import Button from "./Button";
import { Card, CardHeader, CardTitle, CardContent } from "./Card";



export type Product = {
  id: string;
  name: string;
  characterType: "Vocaloid" | "UTAU";
  company?: string;
  voiceProvider?: string;
  group?: string;
  description: string;
  shortBio: string;
  famousSongs: string[];
  price: number;
  image?: string;
  tag?: string;
};


type CardsProps = {
  product: Product;
  onAddToCart?: (p: Product) => void;
  onBuyNow?: (p: Product) => void;
};

const fmt = (n: number) =>
  new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(n);

export default function Cards({ product, onAddToCart, onBuyNow }: CardsProps) {
  return (
    <Card className="min-w-[260px] snap-center">
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          className="h-40 w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="h-40 w-full bg-slate-800/40 grid place-items-center text-slate-400">
          (Sin imagen)
        </div>
      )}

      <CardHeader className="flex items-start justify-between">
        <CardTitle className="text-xl">{product.name}</CardTitle>
        {product.tag && (
          <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
            {product.tag}
          </span>
        )}
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-slate-300">{product.description}</p>

        <div className="flex items-baseline justify-between">
          <span className="text-2xl font-bold">{fmt(product.price)}</span>
        </div>

        <div className="flex gap-2 pt-2">
          <Button
            variant="buy"
            onClick={() => onBuyNow?.(product)}
            leadingIcon={<span aria-hidden>🛒</span>}
          >
            Comprar figura
          </Button>
          <Button
            variant="outline"
            onClick={() => onAddToCart?.(product)}
            leadingIcon={<span aria-hidden>➕</span>}
          >
            Añadir al carrito
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
