import { getDb } from "./db";
import { ObjectId } from "mongodb";

export const PPE_CATEGORY_TREE = [
  {
    name: "Head Protection",
    slug: "head-protection",
    children: [
      { name: "Hard Hats Class A", slug: "hard-hats-class-a" },
      { name: "Hard Hats Class B", slug: "hard-hats-class-b" },
      { name: "Hard Hats Class C", slug: "hard-hats-class-c" },
    ],
  },
  {
    name: "Eye & Face Protection",
    slug: "eye-face-protection",
    children: [
      { name: "Safety Glasses", slug: "safety-glasses" },
      { name: "Safety Goggles", slug: "safety-goggles" },
      { name: "Face Shields", slug: "face-shields" },
    ],
  },
  {
    name: "Hearing Protection",
    slug: "hearing-protection",
    children: [
      { name: "Earplugs", slug: "earplugs" },
      { name: "Earmuffs", slug: "earmuffs" },
    ],
  },
  {
    name: "Respiratory Protection",
    slug: "respiratory-protection",
    children: [
      { name: "Dust Masks", slug: "dust-masks" },
      { name: "N95 Masks", slug: "n95-masks" },
      { name: "Half Face Respirators", slug: "half-face-respirators" },
      { name: "Full Face Respirators", slug: "full-face-respirators" },
    ],
  },
  {
    name: "Hand & Body Protection",
    slug: "hand-body-protection",
    children: [
      { name: "Chemical Resistant Gloves", slug: "chemical-resistant-gloves" },
      { name: "Cut Resistant Gloves", slug: "cut-resistant-gloves" },
      { name: "Steel Toe Safety Shoes", slug: "steel-toe-safety-shoes" },
      { name: "Fire Resistant Clothing", slug: "fire-resistant-clothing" },
      { name: "Reflective Safety Vests", slug: "reflective-safety-vests" },
    ],
  },
  {
    name: "Fall Protection Equipment",
    slug: "fall-protection-equipment",
    children: [
      { name: "Full Body Harness", slug: "full-body-harness" },
      { name: "Lifelines", slug: "lifelines" },
      { name: "Shock Absorbing Lanyards", slug: "shock-absorbing-lanyards" },
      { name: "Anchors", slug: "anchors" },
    ],
  },
  {
    name: "Fire & Chemical Safety",
    slug: "fire-chemical-safety",
    children: [
      { name: "Fire Extinguishers", slug: "fire-extinguishers" },
      { name: "Fire Blankets", slug: "fire-blankets" },
      { name: "Spill Containment Kits", slug: "spill-containment-kits" },
    ],
  },
  {
    name: "Workplace Safety Signage & Barriers",
    slug: "workplace-safety-signage-barriers",
    children: [
      { name: "Safety Sign Boards", slug: "safety-sign-boards" },
      { name: "Traffic Cones", slug: "traffic-cones" },
      { name: "Barricade Tapes", slug: "barricade-tapes" },
      { name: "Floor Marking Tapes", slug: "floor-marking-tapes" },
    ],
  },
];

export async function seedCategories() {
  const db = await getDb();
  const coll = db.collection("categories");
  const rootId = new ObjectId();
  await coll.insertOne({
    _id: rootId,
    name: "Personal Protective Equipment (PPE)",
    slug: "ppe",
    parentId: null,
    order: 0,
    level: 0,
  });
  let order = 0;
  for (const main of PPE_CATEGORY_TREE) {
    const mainId = new ObjectId();
    await coll.insertOne({
      _id: mainId,
      name: main.name,
      slug: main.slug,
      parentId: rootId,
      order: order++,
      level: 1,
    });
    let subOrder = 0;
    for (const sub of main.children) {
      await coll.insertOne({
        _id: new ObjectId(),
        name: sub.name,
        slug: sub.slug,
        parentId: mainId,
        order: subOrder++,
        level: 2,
      });
    }
  }
  return { ok: true };
}
