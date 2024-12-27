import Image from "next/image";
import { bigShoulders } from "@/app/layout";
import StarRating from "@/components/common/StarRating";

const CustomisationDetails = ({
  data,
  setCurrentCustomizeStep,
}: {
  data: any;
  setCurrentCustomizeStep: any;
}) => {
  const product = data;

  const handleSaveCustomization = () => {
    const customizationDetails = {
      addtext: data?.addtext,
      imageText: data?.imageText,
      designImage: data?.designImage,
      logoPosition: data?.logoPosition,
      printEmbroidery: data?.printEmbroidery,
    };
    console.log(customizationDetails);
    try {
    } catch (error) {
      console.log("Customization Details: " + error);
    } finally {
    }
  };
  console.log(data);
  return (
    <div className="flex flex-wrap justify-center gap-10 items-start">
      <div>
        <p className="text-2xl font-bold pb-3">Product</p>
        <Image
          priority
          unoptimized
          width={400}
          height={400}
          alt="ProductImage"
          src={product?.ProductImage}
          className="w-fit mx-auto object-contain"
        />
        <h1
          className={`text-xl pt-2 font-black uppercase ${bigShoulders.className}`}
        >
          {product.ProductName}
        </h1>
        <p className="text-sm font-bold">({product?.Composition})</p>
      </div>
      <div>
        <p className="text-2xl font-bold pb-3">Colour</p>
        <div
          style={{ backgroundColor: data?.color?.Html_Code || "#FF6900" }}
          className="h-40 w-20"
        ></div>
        <p className="text-sm font-bold pt-2">
          {data?.color?.Colour_Description.trim()}
        </p>
      </div>
      <div>
        <p className="text-2xl font-bold pb-3">Logo</p>
        <Image
          priority
          unoptimized
          width={400}
          height={400}
          alt="ProductImage"
          src={data?.designImage}
          className="w-40 mx-auto object-contain"
        />
        <p className="text-sm font-bold pt-2">Medium</p>
      </div>
      <div>
        <p className="text-2xl font-bold pb-3">Logo Position</p>
        <Image
          priority
          unoptimized
          width={400}
          height={400}
          alt="ProductImage"
          src={data?.logoPosition?.icon}
          className="w-fit mx-auto object-contain"
        />
        <p className="text-sm font-bold pt-2 capitalize">
          {data?.logoPosition?.title.split("-").join(" ")}
        </p>
      </div>
      <div>
        <p className="text-2xl font-bold pb-3">Application</p>
        <Image
          priority
          unoptimized
          width={400}
          height={400}
          alt="ProductImage"
          src={data?.printEmbroidery?.icon}
          className="w-40 mx-auto object-contain"
        />
        <p className="text-sm pt-2 capitalize">
          ({data?.printEmbroidery?.maxWidth})
        </p>
        <p className="text-sm capitalize">({data?.printEmbroidery?.price})</p>
        <p className="text-sm capitalize">({data?.printEmbroidery?.terms})</p>
      </div>
      <div>
        {" "}
        <p className="text-2xl font-bold pb-3">Quantity</p>
        {data?.size.map((size: any) => {
          return (
            <p className="" key={size?.Size}>
              {size?.Size} X {size?.quantity}
            </p>
          );
        })}
      </div>
      <div className="flex gap-2 items-center">
        <button
          type="button"
          onClick={handleSaveCustomization}
          className={`w-fit flex items-center justify-center px-10 py-2 border transition-all duration-200 ease-linear border-primary/20 hover:bg-primary rounded-full text-xl font-bold bg-primary/80 text-black ${bigShoulders.className}`}
        >
          Save & View Product
        </button>
        <button
          type="button"
          onClick={() => setCurrentCustomizeStep(0)}
          className={`w-fit flex items-center justify-center px-10 py-2 border transition-all duration-200 ease-linear border-primary/20 hover:bg-primary rounded-full text-xl font-bold bg-primary/80 text-black ${bigShoulders.className}`}
        >
          Add Another Logo
        </button>
      </div>
    </div>
  );
};

export default CustomisationDetails;
