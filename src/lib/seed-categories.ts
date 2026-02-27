import { getDb } from "./db";
import { ObjectId } from "mongodb";

export const CATEGORY_TREE = [
  {
    name: "Personal Protective Equipment",
    slug: "ppe",
    children: [
      { name: "Head Protection", slug: "head-protection" },
      { name: "Eye & Face Protection", slug: "eye-protection" },
      { name: "Hearing Protection", slug: "hearing-protection" },
      { name: "Respiratory Protection", slug: "respiratory-protection" },
      { name: "Hand Protection", slug: "hand-protection" },
    ],
  },
  {
    name: "Safety Clothing & Footwear",
    slug: "safety-clothing-footwear",
    children: [
      { name: "High-Visibility Clothing", slug: "high-visibility-clothing" },
      { name: "Chemical Resistant Suits", slug: "chemical-resistant-suits" },
      { name: "Safety Shoes", slug: "safety-shoes" },
      { name: "Gumboots", slug: "gumboots" },
      { name: "Coveralls", slug: "coveralls" },
    ],
  },
  {
    name: "Fall Protection",
    slug: "fall-protection",
    children: [
      { name: "Safety Harnesses", slug: "safety-harnesses" },
      { name: "Lanyards", slug: "lanyards" },
      { name: "Anchor Points", slug: "anchor-points" },
      { name: "Safety Nets", slug: "safety-nets" },
      { name: "Lifelines", slug: "lifelines" },
    ],
  },
  {
    name: "Fire & Chemical Safety",
    slug: "fire-chemical-safety",
    children: [
      { name: "Fire Extinguishers", slug: "fire-extinguishers" },
      { name: "Fire Blankets", slug: "fire-blankets" },
      { name: "Chemical Spill Kits", slug: "chemical-spill-kits" },
      { name: "Eye Wash Stations", slug: "eye-wash-stations" },
    ],
  },
  {
    name: "Emergency Response & First Aid",
    slug: "emergency-response-first-aid",
    children: [
      { name: "First Aid Kits", slug: "first-aid-kits" },
      { name: "Stretchers", slug: "stretchers" },
      { name: "Rescue Equipment", slug: "rescue-equipment" },
    ],
  },
  {
    name: "Workplace Safety Signage & Barriers",
    slug: "workplace-safety-signage-barriers",
    children: [
      { name: "Safety Signs", slug: "safety-signs" },
      { name: "Traffic Cones", slug: "traffic-cones" },
      { name: "Barricades", slug: "barricades" },
      { name: "Warning Boards", slug: "warning-boards" },
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
    name: "Gas Detection & Confined Space",
    slug: "gas-detection-confined-space",
    children: [
      { name: "Portable Gas Detectors", slug: "portable-gas-detectors" },
      { name: "Ventilation Systems", slug: "ventilation-systems" },
    ],
  },
  {
    name: "Electrical Safety Equipment",
    slug: "electrical-safety-equipment",
    children: [
      { name: "Insulated Tools", slug: "insulated-tools" },
      { name: "Voltage Detectors", slug: "voltage-detectors" },
      { name: "Arc Flash Gear", slug: "arc-flash-gear" },
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
