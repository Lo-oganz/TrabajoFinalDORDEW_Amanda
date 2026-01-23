import Button from "./Button";
import { Card, CardContent } from "./Card";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  size?: string;
  format?: string;
  tag?: string;
  color?: string;
};


type CardsProps = {
  product: Product;
  onAddToCart?: (p: Product) => void;
};

const fmt = (n: number) =>
  new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(n);

export default function Cards({ product, onAddToCart }: CardsProps) {
  return (
    <Card className="min-w-[260px] snap-center">
      <CardContent className="space-y-3">
        <p className="text-slate-300">{product.description}</p>

        <div className="flex items-baseline justify-between">
          <span className="text-2xl font-bold">{fmt(product.price)}</span>
        </div>

        <div className="flex gap-2 pt-2">
          <Button
            variant="buy"
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
