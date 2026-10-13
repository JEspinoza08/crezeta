import { useEffect, useState } from "react";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { CartItem, getCart, updateCart } from "@/lib/cart";
export function Cart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const load = () => setItems(getCart());
  useEffect(() => {
    load();
    addEventListener("crezeta-cart", load);
    return () => removeEventListener("crezeta-cart", load);
  }, []);
  const total = items.reduce((a, x) => a + x.price * x.quantity, 0);
  const wa = `https://wa.me/51995772022?text=${encodeURIComponent(`Hola CreZeta 👋 Quiero comprar:\n${items.map((x) => `• ${x.quantity}x ${x.name} — S/ ${(x.price * x.quantity).toFixed(2)}`).join("\n")}\n\nTotal: S/ ${total.toFixed(2)}`)}`;
  return (
    <div>
      <Navbar />
      <main className="mx-auto min-h-[70vh] max-w-6xl px-6 pb-20 pt-32">
        <span className="text-xs font-bold uppercase tracking-[.22em] text-primary">Tu compra</span>
        <h1 className="mt-2 text-4xl font-bold">Carrito</h1>
        {!items.length ? (
          <div className="mt-10 rounded-[28px] border bg-white p-10 text-center">
            <ShoppingBag className="mx-auto h-10 w-10 text-primary" />
            <h2 className="mt-4 text-xl font-bold">Tu carrito está vacío</h2>
            <a
              href="/productos"
              className="mt-5 inline-block rounded-full bg-gradient-primary px-6 py-3 font-semibold text-white"
            >
              Ver productos
            </a>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="space-y-4">
              {items.map((x) => (
                <div
                  key={`${x.id}-${!!x.programmed}`}
                  className="flex gap-4 rounded-2xl border bg-white p-4"
                >
                  <div className="h-24 w-24 overflow-hidden rounded-xl bg-surface">
                    {x.image_url && (
                      <img src={x.image_url} alt={x.name} className="h-full w-full object-cover" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <a href={`/productos/${x.slug}`} className="font-bold">
                      {x.name}
                    </a>
                    <p className="mt-1 font-semibold">S/ {x.price.toFixed(2)}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        onClick={() => updateCart(x.id, x.quantity - 1, x.programmed)}
                        className="rounded-full border p-2"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-7 text-center text-sm">{x.quantity}</span>
                      <button
                        onClick={() => updateCart(x.id, x.quantity + 1, x.programmed)}
                        className="rounded-full border p-2"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => updateCart(x.id, 0, x.programmed)}
                        className="ml-2 text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <aside className="h-fit rounded-[28px] bg-[#17151f] p-7 text-white">
              <h2 className="text-xl font-bold">Resumen</h2>
              <div className="mt-5 flex justify-between border-t border-white/10 pt-5">
                <span>Total</span>
                <strong className="text-2xl">S/ {total.toFixed(2)}</strong>
              </div>
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="mt-6 block rounded-full bg-gradient-primary px-5 py-3 text-center font-semibold"
              >
                Continuar compra
              </a>
              <p className="mt-3 text-center text-xs text-white/55">
                Coordinaremos pago, programación/vinculación y entrega.
              </p>
            </aside>
          </div>
        )}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
