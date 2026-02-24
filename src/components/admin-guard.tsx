"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

const ADMIN_KEY = "admin_secret";

export function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [key, setKey] = useState("");

  const checkAuth = useCallback(() => {
    if (typeof window === "undefined") return;
    const stored = sessionStorage.getItem(ADMIN_KEY);
    if (stored) {
      setAuthorized(true);
      return;
    }
    setAuthorized(false);
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem(ADMIN_KEY, key);
    setAuthorized(true);
  };

  const logout = () => {
    sessionStorage.removeItem(ADMIN_KEY);
    setAuthorized(false);
    setKey("");
  };

  if (authorized === null) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <p className="text-muted-foreground">Loading…</p>
      </div>
    );
  }

  if (!authorized) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center p-4">
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4 rounded-lg border bg-card p-6">
          <h1 className="text-xl font-semibold">Admin Login</h1>
          <p className="text-sm text-muted-foreground">Enter admin secret to continue.</p>
          <input
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Admin secret"
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
          />
          <button
            type="submit"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Enter
          </button>
        </form>
      </div>
    );
  }

  return (
    <>
      <div className="absolute right-4 top-4 text-sm">
        <button type="button" onClick={logout} className="text-muted-foreground hover:underline">
          Logout
        </button>
      </div>
      {children}
    </>
  );
}
