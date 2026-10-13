import { useEffect, useState } from "react";
import { Check, MessageCircle, QrCode, Radio, ShoppingBag } from "lucide-react";
import { addToCart } from "@/lib/cart";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { demoProducts, StoreProduct } from "@/data/storeDemo";
import { supabase } from "@/lib/supabase";
export function ProductDetail({ slug }: { slug: string }) {
  const [loading, setLoading] = useState(true),
    [programmed, setProgrammed] = useState(false),
    [selected, setSelected] = useState(0);
  const [p, setP] = useState<StoreProduct | undefined>();
  useEffect(() => {
    let active = true;
    setLoading(true);
    setP(undefined);
    setSelected(0);
    if (!supabase) {
      setLoading(false);
      return;
    }
    supabase
      .from("products")
      .select("*")
      .eq("slug", slug)
      .eq("is_active", true)
      .maybeSingle()
      .then(({ data, error }) => {
        if (active) {
          setP(error ? undefined : ((data ?? undefined) as StoreProduct));
          setLoading(false);
        }
      });
    return () => {
      active = false;
    };
  }, [slug]);
  if (loading)
    return (
      <div>
        <Navbar />
        <main className="mx-auto min-h-[70vh] max-w-7xl px-6 pt-40" role="status">
          Cargando producto...
        </main>
        <Footer />
      </div>
    );
  if (!p)
    return (
      <div>
        <Navbar />
        <main className="mx-auto min-h-[70vh] max-w-7xl px-6 pt-40">
          <h1 className="text-4xl font-bold">Producto no encontrado</h1>
          <a href="/productos" className="mt-6 inline-block text-primary">
            ← Volver a productos
          </a>
        </main>
        <Footer />
      </div>
    );
  const images = [p.image_url, ...(p.image_urls ?? [])]
    .filter((v): v is string => !!v)
    .filter((v, i, a) => a.indexOf(v) === i);
  return (
    <div>
      <Navbar />
      <main className="pt-24">
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-2 lg:py-20">
          <div className="self-start rounded-[28px] border border-border bg-white p-5 shadow-sm lg:sticky lg:top-28 lg:p-8">
            {images.length ? (
              <div className="w-full">
                <div className="flex min-h-[300px] items-center justify-center">
                  <img
                    src={images[selected] ?? images[0]}
                    alt={p.name}
                    className="max-h-[440px] w-full rounded-2xl object-contain"
                  />
                </div>
                {images.length > 1 && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {images.map((url, i) => (
                      <button
                        key={url}
                        type="button"
                        onClick={() => setSelected(i)}
                        className={`h-20 w-20 overflow-hidden rounded-xl border-2 bg-white p-1 ${selected === i ? "border-primary" : "border-border"}`}
                      >
                        <img
                          src={url}
                          alt={`${p.name} foto ${i + 1}`}
                          className="h-full w-full object-contain"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="w-64 rounded-[38px] bg-white p-8 text-center shadow-2xl">
                <Radio className="mx-auto h-14 w-14" />
                <p className="mt-5 text-xs font-bold tracking-widest text-primary">CREZETA</p>
                <h2 className="mt-2 text-2xl font-bold">Déjanos tu reseña</h2>
                <div className="mx-auto mt-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-black text-white">
                  <QrCode className="h-16 w-16" />
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center">
            <a href="/productos" className="mb-7 text-sm text-muted-foreground">
              ← Todos los productos
            </a>
            <span className="text-xs font-bold uppercase tracking-[.22em] text-primary">
              {p.category}
            </span>
            <h1 className="mt-3 text-4xl font-bold md:text-6xl">{p.name}</h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">{p.description}</p>
            <div className="mt-7 space-y-3">
              {[
                "NFC + QR en un mismo punto",
                "Vinculación y programación opcionales por S/ 20.00",
                "Soporte inicial de CreZeta",
              ].map((x) => (
                <div key={x} className="flex gap-3 text-sm">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  {x}
                </div>
              ))}
            </div>
            <fieldset className="mt-8 space-y-3">
              <legend className="mb-3 font-semibold">Selecciona la preparación del producto</legend>
              <label className="flex cursor-pointer gap-3">
                <input type="radio" checked={!programmed} onChange={() => setProgrammed(false)} />{" "}
                Sin programación — sin costo adicional
              </label>
              <label className="flex cursor-pointer gap-3">
                <input type="radio" checked={programmed} onChange={() => setProgrammed(true)} />{" "}
                Programado y vinculado — + S/ 20.00
              </label>
            </fieldset>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <div>
                <span className="text-xs text-muted-foreground">Precio</span>
                <p className="text-3xl font-bold">
                  S/ {(Number(p.price) + (programmed ? 20 : 0)).toFixed(2)}
                </p>
              </div>
              <button
                disabled={p.stock <= 0}
                onClick={() => addToCart(p, 1, programmed)}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 font-semibold text-white"
              >
                <ShoppingBag className="h-5 w-5" /> Agregar al carrito
              </button>
            </div>
            <p className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
              <MessageCircle className="h-4 w-4" /> Agrégalo al carrito y continúa tu compra cuando
              estés listo.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
