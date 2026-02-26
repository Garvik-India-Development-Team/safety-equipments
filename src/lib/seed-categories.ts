import { getDb } from "./db";
import { ObjectId } from "mongodb";

export const CATEGORY_TREE = [
  {
    name: "Personal Protective Equipment (PPE)",
    slug: "ppe",
    children: [
      { name: "Head Protection", slug: "head-protection" },
      { name: "Eye Protection", slug: "eye-protection" },
      { name: "Hearing Protection", slug: "hearing-protection" },
      { name: "Respiratory Protection", slug: "respiratory-protection" },
      { name: "Hand Protection", slug: "hand-protection" },
    ],
  },
  {
    name: "Safety Clothing",
    slug: "safety-clothing",
    children: [
      { name: "Reflective Jackets", slug: "reflective-jackets" },
      { name: "Coveralls", slug: "coveralls" },
      { name: "Chemical Resistant Suits", slug: "chemical-resistant-suits" },
      { name: "Fire Retardant Clothing", slug: "fire-retardant-clothing" },
    ],
  },
  {
    name: "Foot Protection",
    slug: "foot-protection",
    children: [
      { name: "Safety Shoes", slug: "safety-shoes" },
      { name: "Gumboots", slug: "gumboots" },
    ],
  },
  {
    name: "Fall Protection",
    slug: "fall-protection",
    children: [
      { name: "Safety Harness", slug: "safety-harness" },
      { name: "Lanyards", slug: "lanyards" },
      { name: "Lifelines", slug: "lifelines" },
      { name: "Rope Ladder", slug: "rope-ladder" },
    ],
  },
  {
    name: "Fire Safety",
    slug: "fire-safety",
    children: [
      { name: "Fire Extinguishers", slug: "fire-extinguishers" },
      { name: "Fire Blankets", slug: "fire-blankets" },
    ],
  },
  {
    name: "Road Safety & Traffic",
    slug: "road-safety-traffic",
    children: [
      { name: "Safety Cones", slug: "safety-cones" },
      { name: "Barricades", slug: "barricades" },
      { name: "Reflective Tape", slug: "reflective-tape" },
    ],
  },
  {
    name: "Lockout Tagout",
    slug: "lockout-tagout",
    children: [
      { name: "Lockout Kits", slug: "lockout-kits" },
      { name: "Safety Padlocks", slug: "safety-padlocks" },
    ],
  },
  {
    name: "Industrial & Security Products",
    slug: "industrial-security-products",
    children: [
      { name: "Safety Signages", slug: "safety-signages" },
      { name: "Warning Boards", slug: "warning-boards" },
      { name: "First Aid Kits", slug: "first-aid-kits" },
    ],
  },
];

export async function seedCategories() {
  const db = await getDb();
  const coll = db.collection("categories");
  await coll.deleteMany({}); // clear existing
  let order = 0;
  for (const main of CATEGORY_TREE) {
    const mainId = new ObjectId();
    await coll.insertOne({
      _id: mainId,
      name: main.name,
      slug: main.slug,
      parentId: null,
      order: order++,
      level: 0,
    });
    let subOrder = 0;
    for (const sub of main.children) {
      await coll.insertOne({
        _id: new ObjectId(),
        name: sub.name,
        slug: sub.slug,
        parentId: mainId,
        order: subOrder++,
        level: 1,
      });
    }
  }
  return { ok: true };
}
