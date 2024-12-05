import Image from "next/image";
import { bigShoulders } from "@/app/layout";
// import { useRouter } from "next/navigation";
import StarRating from "@/components/common/StarRating";

const CustomisationDetails = ({ data }: { data: any }) => {
  const product = data;
  // const navigate = useRouter();

  const handleSaveCustomization = () => {
    const customizationDetails = {
      addtext: data?.addtext,
      imageText: data?.imageText,
      designImage: data?.designImage,
      logoPosition: data?.logoPosition,
      printEmbroidery: data?.printEmbroidery,
    };

    const getCartData = localStorage.getItem("cart") || "[]";
    let cartData = JSON.parse(getCartData);

    const productExists = cartData.some(
      (cart: any) => cart?.ID === data?.ProductID
    );

    if (productExists) {
      cartData = cartData.map((cart: any) => {
        if (cart?.ID === data?.ProductID)
          return { ...cart, CustomisationDetails: customizationDetails };
        return cart;
      });
    }
    console.log(cartData);
    // else
    //   cartData.push({
    //     ID: data?.ProductID,
    //     CustomisationDetails: customizationDetails,
    //   });
    // localStorage.setItem("cart", JSON.stringify(cartData));
  };

  return (
    <div className="flex justify-start gap-10 mb-10">
      <div className="w-1/4">
        <Image
          priority
          unoptimized
          width={400}
          height={400}
          alt="ProductImage"
          src={product?.ProductImage}
          className="w-full object-contain"
        />
      </div>
      <div className="flex w-3/4 flex-col text-left justify-start">
        <h1
          className={`text-xl md:text-3xl py-2 font-black uppercase ${bigShoulders.className}`}
        >
          {product.ProductName}
        </h1>
        <p className="text-lg font-bold pb-3">({product?.Composition})</p>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
          {product?.Detail}
        </p>
        <div className="flex flex-wrap text-gray-600 items-center gap-3 md:gap-5">
          <span className="pt-px">
            <span>Brands: </span>
            <span className="text-primary font-semibold">
              {product.productBrand}
            </span>
          </span>
          <span className="hover:underline hover:underline-offset-2">
            <StarRating rating={product.reviewsCount} showText={true} />
          </span>
          <div className="flex items-center gap-1 text-green-500">
            <span className="rounded-full">✔ {product.availability}</span>
          </div>
        </div>
        <p className={`text-2xl my-2 font-extrabold ${bigShoulders.className}`}>
          <span>£{product?.ProductSellingPrice}</span>
          <span className="text-xl line-through text-gray-500 pl-3">
            £{product?.ProductActualPrice}
          </span>
        </p>
        <div className="pb-5">
          <h2
            className={`text-2xl flex gap-2 items-center font-bold ${bigShoulders.className}`}
          >
            Customisation Details
          </h2>
          <div className="grid grid-cols-3 mt-3 justify-start items-start">
            <div className="h-full">
              <div className="border border-black font-bold uppercase text-center py-2">
                <h4>ArtWork</h4>
              </div>
              {product?.imageText?.id === 1 ? (
                <div className="border px-2 flex justify-center h-full items-center border-t-0 border-black font-bold uppercase text-center py-2">
                  <Image
                    alt="Image"
                    width={200}
                    height={75}
                    src={product?.designImage}
                    className="w-auto object-contain"
                  />
                </div>
              ) : (
                <>
                  <div className="border border-t-0 h-full border-black flex flex-col justify-center items-center p-2">
                    <p className="font-bold">
                      Font Style:{" "}
                      <span className="font-light">
                        {product?.addtext?.font}
                      </span>
                    </p>
                    <p className="font-bold">
                      Color:{" "}
                      <span className="font-light">
                        {product?.addtext?.color}
                      </span>
                    </p>
                    {product?.addtext?.textLine1 && (
                      <p className="font-bold">
                        Line Text 1:{" "}
                        <span className="font-light">
                          {product?.addtext?.textLine1}
                        </span>
                      </p>
                    )}
                    {product?.addtext?.textLine2 && (
                      <p className="font-bold">
                        Line Text 2:{" "}
                        <span className="font-light">
                          {product?.addtext?.textLine2}
                        </span>
                      </p>
                    )}
                    {product?.addtext?.textLine3 && (
                      <p className="font-bold">
                        Line Text 3:{" "}
                        <span className="font-light">
                          {product?.addtext?.textLine3}
                        </span>
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>
            <div className="h-full">
              <div className="border border-x-0 border-black font-bold uppercase text-center py-2">
                <h4>Position</h4>
              </div>
              <div className="border px-2 flex border-x-0 justify-center h-full items-center border-t-0 border-black font-bold uppercase text-center py-2">
                <Image
                  alt="Image"
                  width={200}
                  height={100}
                  src={product?.logoPosition?.icon}
                  className="w-2/3 object-contain"
                />
              </div>
            </div>
            <div className="h-full">
              <div className="border border-black font-bold uppercase text-center py-2">
                <h4>Application Type </h4>
              </div>
              <div className="border px-2 flex justify-center items-center h-full border-t-0 border-black font-bold uppercase text-center py-2">
                <Image
                  alt="Image"
                  width={200}
                  height={75}
                  className="w-fit object-contain"
                  src={product?.printEmbroidery?.icon}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <button
            type="button"
            onClick={handleSaveCustomization}
            className={`w-fit flex items-center mt-10 justify-center px-10 py-2 border transition-all duration-200 ease-linear border-primary/20 hover:bg-primary rounded-full text-xl font-bold bg-primary/80 text-black ${bigShoulders.className}`}
          >
            Save & View Cart
          </button>
          <button
            type="button"
            onClick={handleSaveCustomization}
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
