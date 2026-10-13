export type StoreProduct = {
  id: string; name: string; slug: string; short_description: string; description: string;
  price: number; compare_at_price?: number | null; category: string; badge?: string | null;
  image_url?: string | null; image_urls?: string[] | null; stock: number; is_active: boolean; featured: boolean;
};
export const demoProducts: StoreProduct[] = [{
  id:"demo-reviews", name:"CreZeta Reviews", slug:"crezeta-reviews",
  short_description:"Convierte una buena experiencia en una reseña con NFC + QR.",
  description:"Punto físico NFC + QR personalizado para que tus clientes accedan directamente al perfil de tu negocio y puedan dejar una reseña. Incluye configuración, QR personalizado y vinculación inicial.",
  price:79, compare_at_price:null, category:"Reputación digital", badge:"NUEVO", image_url:null, stock:10, is_active:true, featured:true
}];
