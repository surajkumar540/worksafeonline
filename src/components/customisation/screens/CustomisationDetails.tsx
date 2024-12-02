import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/api";
import { bigShoulders } from "@/app/layout";
import { useRouter } from "next/navigation";
import StarRating from "@/components/common/StarRating";

const CustomisationDetails = ({
  product,
  customizeData,
  setCustomizeData,
  handleCustomizeNext,
}: {
  product: Product;
  customizeData: any;
  setCustomizeData: any;
  handleCustomizeNext: any;
}) => {
  const navigate = useRouter();
  let cartData: any = localStorage.getItem("cart") || `[]`;
  cartData = JSON.parse(cartData);

  let filterProduct = cartData.filter(
    (item: any) => item.ID === product?.ProductID
  );
  if (filterProduct.length > 0) filterProduct = filterProduct[0];
  return (
    <div className="flex justify-start gap-10 mb-10">
      <Image
        priority
        unoptimized
        width={100}
        height={100}
        alt="ProductImage"
        src={filterProduct?.ProductImage}
        className="w-1/4 object-contain"
      />
      <div className="flex w-3/4 flex-col text-left justify-start">
        <h1
          className={`text-xl md:text-3xl py-2 font-black uppercase ${bigShoulders.className}`}
        >
          {product.ProductName}
        </h1>
        <div className="flex flex-wrap text-gray-600 items-center gap-3 md:gap-5">
          <span className="pt-px">
            <span>Brands: </span>
            <span className="text-primary font-semibold">
              {product.productBrand}
            </span>
          </span>
          <Link
            href="#reviews"
            className="hover:underline hover:underline-offset-2"
          >
            <StarRating rating={product.reviewsCount} showText={true} />
          </Link>
          <div className="flex items-center gap-1 text-green-500">
            <span className="rounded-full">✔ {product.availability}</span>
          </div>
        </div>
        <p className={`text-2xl my-2 font-extrabold ${bigShoulders.className}`}>
          £{product?.ProductSellingPrice}
        </p>
        <div className="pb-5">
          <h2
            className={`text-2xl flex gap-2 items-center underline underline-offset-2 font-bold ${bigShoulders.className}`}
          >
            Customisation Details
          </h2>
          <div className="grid grid-cols-3 mt-3 justify-start items-start">
            <div className="h-full">
              <div className="border border-black font-bold uppercase text-center py-2">
                <h4>ArtWork</h4>
              </div>
              <div className="border border-t-0 h-full border-black flex flex-col justify-center items-center p-2">
                <p className="font-bold">
                  Font Style: <span className="font-light">New Roman</span>
                </p>
                <p className="font-bold">
                  Color: <span className="font-light">Black</span>
                </p>
                <p className="font-bold">
                  Line Text 1: <span className="font-light">Vulchur</span>
                </p>
              </div>
            </div>
            <div className="h-full">
              <div className="border border-x-0 border-black font-bold uppercase text-center py-2">
                <h4>Position</h4>
              </div>
              <div className="border flex border-x-0 justify-center h-full items-center border-t-0 border-black font-bold uppercase text-center py-2">
                <Image
                  alt="Image"
                  width={200}
                  height={75}
                  className="w-fit object-contain"
                  src="https://www.clothes2order.com/images/c2o_new_2013/layout/checkout/positions/3.jpg"
                />
              </div>
            </div>
            <div className="h-full">
              <div className="border border-black font-bold uppercase text-center py-2">
                <h4>Application Type </h4>
              </div>
              <div className="border flex justify-center items-center h-full border-t-0 border-black font-bold uppercase text-center py-2">
                <Image
                  alt="Image"
                  width={200}
                  height={75}
                  className="w-fit object-contain"
                  src="https://customiseitnow.co.uk/wp-content/plugins/wooart/public/img/type_embroidered.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <button
            type="button"
            onClick={() => navigate.push("/cart")}
            className={`w-fit flex items-center mt-10 justify-center px-10 py-2 border transition-all duration-200 ease-linear border-primary/20 hover:bg-primary rounded-full text-xl font-bold bg-primary/80 text-black ${bigShoulders.className}`}
          >
            Save & View Cart
          </button>
          <button
            type="button"
            onClick={() => navigate.push("/checkout")}
            className={`w-fit flex items-center mt-10 justify-center px-10 py-2 border transition-all duration-200 ease-linear border-primary/20 hover:bg-primary rounded-full text-xl font-bold bg-primary/80 text-black ${bigShoulders.className}`}
          >
            View Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomisationDetails;
