"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle, Phone, Mail, User, MapPin } from "lucide-react";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Phone is required"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof schema>;

const PHONE = process.env.NEXT_PUBLIC_PHONE_NUMBER || "011-23215050 / 011-43517483";
const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "safetyexpertssales@gmail.com";
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919811048483";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          type: "bulk",
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-safety-blue via-safety-blue/95 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get in touch for quotes, product inquiries, or bulk orders
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Have questions about our products or need a custom quote? We're here to help!
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Contact Person</h3>
                    <p className="text-gray-600">Rahul Sakhuja</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-safety-blue/10 text-safety-blue">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      Mobile: <a href={`tel:${WHATSAPP.replace(/\D/g, "")}`} className="hover:text-safety-blue transition-colors">+91 {WHATSAPP.replace(/\D/g, "")}</a><br />
                      Office: <a href={`tel:01123215050`} className="hover:text-safety-blue transition-colors">011-23215050</a>, 43517483
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-safety-yellow/20 text-safety-yellow">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href={`mailto:${EMAIL}`} className="text-gray-600 hover:text-safety-blue transition-colors">
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                    <p className="text-gray-600">
                      S.C.O : 4614-15, Gali Shahtara, Ajmeri Gate,<br />
                      Delhi - 110006
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Works Address</h3>
                    <p className="text-gray-600">
                      NJ-93 Sector - 3, Bawana Ind. Area,<br />
                      New Delhi - 110039
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${WHATSAPP.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#25D366] transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-200">
                  {/* Embedded Google Map pointing to Delhi Ajmeri Gate Area */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.711822453526!2d77.214416!3d28.644184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd26f7a68585%3A0x6b772027db91bd0!2sAjmeri%20Gate%2C%20New%20Delhi%2C%20Delhi%20110006!5e0!3m2!1sen!2sin!4v1715873204983!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ajmeri Gate Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" {...register("name")} className="mt-1" />
                    {errors.name && (
                      <p className="text-xs text-destructive mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="company">Company *</Label>
                    <Input id="company" {...register("company")} className="mt-1" />
                    {errors.company && (
                      <p className="text-xs text-destructive mt-1">{errors.company.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" {...register("email")} className="mt-1" />
                    {errors.email && (
                      <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" {...register("phone")} className="mt-1" />
                    {errors.phone && (
                      <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <textarea
                      id="message"
                      {...register("message")}
                      className="mt-1 flex min-h-[100px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm"
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  {status === "error" && (
                    <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">Something went wrong. Please try again.</p>
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-safety-yellow hover:bg-safety-yellow/90 text-safety-black font-semibold"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Sending…" : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
