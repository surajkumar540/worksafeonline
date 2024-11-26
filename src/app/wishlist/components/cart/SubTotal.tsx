import { bigShoulders } from "@/app/layout";

interface CartItem {
  ID: string;
  EndPrice: number;
}

const SubTotal = ({ cart }: { cart: CartItem[] }) => {
  const totalAmount =
    cart?.reduce((acc, item) => {
      if (typeof item?.EndPrice === "number") {
        return acc + item.EndPrice;
      } else {
        console.error(`Invalid EndPrice for item ID: ${item?.ID}`);
        return acc;
      }
    }, 0) || 0;

  return (
    <div
      className={`flex uppercase justify-between items-center text-2xl p-4 ${bigShoulders.className}`}
    >
      <strong>SubTotal:</strong>{" "}
      <span className="font-black text-xl">{totalAmount.toFixed(2)}$</span>
    </div>
  );
};

export default SubTotal;
