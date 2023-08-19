const productsData = [
  {
    name: "Lemon Haze Disposable Vape Pen - Hexo - Disposable",
    brand: "Hexo",
    category: "vaporizers",
    description:
      "Super Lemon Haze vape pen is a winning sativa strain that took home first place in the Medical Sativa category at the 2014 Seattle Cannabis Cup. It’s a Washington original, grown by at least two local cultivators. It’s a blend of Lemon Skunk and Super Silver Haze, and it has a sativa/indica ratio of 80:20. That means heady, peppy, cerebral effects such as: Our high-quality, all-in-one 0.25g vape pens strong THC potency, single-strain Lemon Haze formulation contains cannabinoids from sun-grown cannabis, and a native cannabis terpene blend. Thats it. The pen is breath activated for ease of use, leak free, includes a reservoir window and is packaged in a child-resistant format. The heating element is engineered to precisely atomize liquid and lasts for approximately 75 uses. A clean and smooth finish with the light aroma of terpenes is reminiscent of your favourite cannabis strain. HEXO Vape Pens are QPS Certified to be compliant with UL and CSA electrical safety standards. HEXO is dedicated to providing consumers with the highest quality products and is one of the first licensed producers in Canada to comply with voluntary industry standards for lithium battery safety.",
    price: 14.0,
    subcategory: "disposables",
    weight: 0.25,
    type: "sativa",
    thc: 85,
    cbd: 2,
    thc_cbd_unit: "%",
  },
  {
    name: "Melon Monroe Disposable Vape Pen",
    category: "vaporizers",
    brand: "Kazoo",
    price: 14.0,
    subcategory: "disposables",
    weight: 0.25,
    type: "sativa",
    thc: 85,
    cbd: 2,
    thc_cbd_unit: "%",
  },
  {
    name: "Mandarin C X Tangie",
    category: "vaporizers",
    brand: "Mandarin",
    price: 30,
    subcategory: "cartridges",
    weight: 1,
    type: "sativa",
    thc: 85,
    cbd: 2,
    thc_cbd_unit: "%",
  },
  {
    name: "Mosa X Blood Orange",
    category: "vaporizers",
    brand: "Mosa",
    price: 28,
    subcategory: "cartridges",
    weight: 1,
    type: "sativa",
    thc: 85,
    cbd: 2,
    thc_cbd_unit: "%",
  },
  {
    name: "Juice Jar",
    category: "vaporizers",
    brand: "Juice",
    price: 19,
    subcategory: "cartridges",
    weight: 0.5,
    type: "sativa",
    thc: 85,
    cbd: 2,
    thc_cbd_unit: "%",
  },
  {
    name: "Peach Ringz",
    category: "vaporizers",
    brand: "Peach",
    price: 39,
    subcategory: "cartridges",
    weight: 1,
    type: "sativa",
    thc: 85,
    cbd: 2,
    thc_cbd_unit: "%",
  },
  {
    name: "Box Hot Guava Stardawg",
    category: "vaporizers",
    brand: "BoxHot",
    price: 46,
    subcategory: "cartridges",
    weight: 1.2,
    type: "sativa",
    thc: 85,
    cbd: 2,
    thc_cbd_unit: "%",
  },
  {
    name: "Bargain Brand Citrus",
    category: "vaporizers",
    brand: "BargainBrand",
    price: 27,
    subcategory: "cartridges",
    weight: 1,
    type: "sativa",
    thc: 85,
    cbd: 2,
    thc_cbd_unit: "%",
  },
  {
    name: "Spinach Feelz Tropical Diesel",
    category: "vaporizers",
    brand: "Spinach",
    price: 32,
    subcategory: "cartridges",
    weight: 1,
    type: "sativa",
    thc: 85,
    cbd: 2,
    thc_cbd_unit: "%",
  },
  // {
  //   name: "Bargain Brand Grape",
  //   category: "vaporizers",
  //   brand: "Bargain Brand",
  //   price: 27,
  // },
  {
    name: "Grapey Grape",
    category: "vaporizers",
    brand: "Grapey",
    price: 39,
    subcategory: "cartridges",
    weight: 1,
    type: "indica",
    thc: 85,
    cbd: 2,
    thc_cbd_unit: "%",
  },
  {
    name: "Strawnana",
    category: "vaporizers",
    brand: "Straw",
    price: 39,
    subcategory: "cartridges",
    weight: 1,
    type: "indica",
    thc: 85,
    cbd: 2,
    thc_cbd_unit: "%",
  },
  {
    name: "Banana OG X Kush Mints",
    category: "vaporizers",
    brand: "Banana",
    price: 28,
    subcategory: "cartridges",
    weight: 1,
    type: "indica",
    thc: 85,
    cbd: 2,
    thc_cbd_unit: "%",
  },
  {
    name: "Powdered Donuts",
    category: "vaporizers",
    brand: "Powdered",
    price: 28,
    subcategory: "cartridges",
    weight: 1,
    type: "indica",
    thc: 85,
    cbd: 2,
    thc_cbd_unit: "%",
  },
  {
    name: "Watermelon Mojo",
    category: "vaporizers",
    brand: "Watermelon",
    price: 32,
    subcategory: "cartridges",
    weight: 1,
    type: "indica",
    thc: 85,
    cbd: 2,
    thc_cbd_unit: "%",
  },
  {
    name: "Acai Blxst Live Resin",
    category: "vaporizers",
    brand: "Acai",
    price: 40,
    subcategory: "live_resin",
    weight: 1,
    type: "indica",
    thc: 85,
    cbd: 2,
    thc_cbd_unit: "%",
  },
  {
    name: "Purple Berry Live Resin",
    category: "vaporizers",
    brand: "Purple",
    price: 40,
    subcategory: "cartridges",
    weight: 1,
    type: "indica",
    thc: 85,
    cbd: 2,
    thc_cbd_unit: "%",
  },
  {
    name: "Blackberry Cream (Disposable)",
    category: "vaporizers",
    brand: "Blackberry",
    price: 17,
    subcategory: "cartridges",
    weight: 0.3,
    type: "indica",
    thc: 85,
    cbd: 2,
    thc_cbd_unit: "%",
  },
  {
    name: "Red Hawaiian",
    category: "vaporizers",
    brand: "Hawaiian",
    price: 29,
    subcategory: "cartridges",
    weight: 1,
    type: "hybrid",
    thc: 85,
    cbd: 2,
    thc_cbd_unit: "%",
  },
  {
    name: "Jackfruit",
    category: "vaporizers",
    brand: "Jack",
    price: 19,
    subcategory: "cartridges",
    weight: 0.5,
    type: "hybrid",
    thc: 85,
    cbd: 2,
    thc_cbd_unit: "%",
  },
  {
    name: "Purple Monkey",
    category: "vaporizers",
    brand: "Monkey",
    price: 20,
    subcategory: "cartridges",
    weight: 0.5,
    type: "hybrid",
    thc: 85,
    cbd: 2,
    thc_cbd_unit: "%",
  },
  {
    name: "Fuego Berry N’Ice",
    category: "vaporizers",
    brand: "Fuego",
    price: 32,
    subcategory: "disposables",
    weight: 0.3,
    type: "indica",
    thc: 85,
    cbd: 2,
    thc_cbd_unit: "%",
  },
  {
    name: "K.O. by Night Night Blue Widow 3:2:1",
    category: "vaporizers",
    brand: "NightNight",
    price: 40,
    subcategory: "cartridges",
    weight: 1,
    type: "hybrid",
    thc: 85,
    cbd: 2,
    thc_cbd_unit: "%",
  },
  {
    name: "CBD Earth",
    category: "vaporizers",
    brand: "Earth",
    price: 25,
    subcategory: "cartridges",
    weight: 1,
    type: "hybrid",
    thc: 85,
    cbd: 2,
    thc_cbd_unit: "%",
  },
  // Concentrates
  {
    name: "Catacomb Kush Shatter",
    category: "concentrates",
    brand: "Catacomb",
    price: 30,
    subcategory: "shatter",
    weight: 1,
    type: "indica",
    thc: 80,
    cbd: 1,
    thc_cbd_unit: "%",
  },
  {
    name: "Loud Live Resin",
    category: "concentrates",
    brand: "Loud",
    price: 37,
    subcategory: "live_resin",
    weight: 1,
    type: "indica",
    thc: 80,
    cbd: 1,
    thc_cbd_unit: "%",
  },
  {
    name: "Live Duo Resin",
    category: "concentrates",
    brand: "Live",
    price: 48,
    subcategory: "live_resin",
    weight: 1,
    type: "hybrid",
    thc: 80,
    cbd: 1,
    thc_cbd_unit: "%",
  },
  // Prerolls
  {
    name: "Redees Cold Creek",
    category: "prerolls",
    brand: "Redees",
    price: 20,
    subcategory: "preroll_packs",
    item_quantity: 10,
    type: "sativa",
    weight: 0.4,
    thc: 20,
    cbd: 1,
    thc_cbd_unit: "%",
  },
  {
    name: "The Drifter",
    category: "prerolls",
    brand: "Drifter",
    price: 9,
    subcategory: "preroll_packs",
    item_quantity: 3,
    weight: 0.4,
    type: "sativa",
    thc: 20,
    cbd: 1,
    thc_cbd_unit: "%",
  },
  {
    name: "Cherry Bomb Reefers",
    category: "prerolls",
    brand: "Cherry Bomb",
    price: 15,
    subcategory: "preroll_packs",
    item_quantity: 3,
    weight: 0.4,
    type: "sativa",
    thc: 20,
    cbd: 1,
    thc_cbd_unit: "%",
  },
  // Flower
  {
    name: "Super Lemon Haze",
    category: "flower",
    brand: "Super",
    price: 20,
    subcategory: "all_flower",
    weight: 3.5,
    type: "sativa",
    thc: 20,
    cbd: 1,
    thc_cbd_unit: "%",
  },
  {
    name: "Banjo",
    category: "flower",
    brand: "Banjo",
    price: 30,
    subcategory: "all_flower",
    weight: 3.5,
    type: "sativa",
    thc: 20,
    cbd: 1,
    thc_cbd_unit: "%",
  },
  {
    name: "Jean Guy",
    category: "flower",
    brand: "Jean Guy",
    price: 33,
    subcategory: "all_flower",
    weight: 3.5,
    type: "sativa",
    thc: 20,
    cbd: 1,
    thc_cbd_unit: "%",
  },
  // Topicals
  {
    name: "Baker Street Spray",
    category: "topicals",
    brand: "Baker Street",
    price: 32,
    subcategory: "high_cbd",
    weight: "3.5g",
    type: "sativa",
    weight: 0.4,
    thc: 250,
    cbd: 0,
    thc_cbd_unit: "mg",
  },
  {
    name: "Penelope Spray",
    category: "topicals",
    brand: "Penelope",
    price: 30,
    subcategory: "high_cbd",
    weight: 3.5,
    type: "sativa",
    thc: 250,
    cbd: 250,
    thc_cbd_unit: "mg",
  },
  {
    name: "Good Supply THC Oil",
    category: "topicals",
    brand: "Good Supply",
    price: 35,
    subcategory: "high_cbd",
    weight: 3.5,
    type: "sativa",
    thc: 250,
    cbd: 50,
    thc_cbd_unit: "mg",
    subcategory: "all_seeds",

  },
  // Seeds
  {
    name: "Timewarp",
    category: "seeds",
    brand: "Timewarp",
    weight_unit: "other",
    price: 58,
    item_quantity: 5,
    type: "sativa",
    thc: 250,
    cbd: 0,
    thc_cbd_unit: "mg",
    subcategory: "all_seeds",

  },
  {
    name: "Northern Lights",
    category: "seeds",
    brand: "Northern Lights",
    weight_unit: "other",
    price: 27,
    item_quantity: 4,
    type: "indica",
    thc: 250,
    cbd: 250,
    thc_cbd_unit: "mg",
    subcategory: "all_seeds",
  },
];

module.exports = { productsData };
