export type PreviewProduct = {
  slug: string;
  name: string;
  category: string;
  price: string;
  priceAmount: number;
  stockLabel: string;
  stockStatus: "in-stock" | "low-stock" | "made-to-order";
  badge: string;
  description: string;
  palette: string;
};

export const previewProducts: PreviewProduct[] = [
  {
    slug: "pembe-kalp-kupe",
    name: "Pembe Kalp Küpe",
    category: "Küpe",
    price: "₺320",
    priceAmount: 320,
    stockLabel: "Stokta",
    stockStatus: "in-stock",
    badge: "Çiçekli seri",
    description:
      "Pastel pembe tonlu, minik kalp detaylı neşeli bir küpe taslağı.",
    palette: "from-[#FFD6E7] via-[#F78FB3] to-[#FFE66D]"
  },
  {
    slug: "minik-cilek-figur",
    name: "Minik Çilek Figür",
    category: "Figür",
    price: "₺280",
    priceAmount: 280,
    stockLabel: "Az kaldı",
    stockStatus: "low-stock",
    badge: "Tatlı vitrin",
    description:
      "Çilek formundan ilham alan, masa üstü veya hediye kutusu için minik figür.",
    palette: "from-[#FF8A7A] via-[#FFD6E7] to-[#9BE7C0]"
  },
  {
    slug: "papatya-anahtarlik",
    name: "Papatya Anahtarlık",
    category: "Aksesuar",
    price: "₺220",
    priceAmount: 220,
    stockLabel: "Hazırlanıyor",
    stockStatus: "made-to-order",
    badge: "Yumuşak renk",
    description:
      "Papatya hissi veren, çantaya veya anahtarlığa takılabilecek canlı aksesuar.",
    palette: "from-[#FFE66D] via-[#FFF8F2] to-[#C7B8FF]"
  }
];

export function getPreviewProduct(slug: string) {
  return previewProducts.find((product) => product.slug === slug);
}
