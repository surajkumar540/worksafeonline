import Image from 'next/image'
import React from 'react'

const ProductImage = () => {
  return (
    <div className="flex gap-8 w-full ">
    <div className="flex flex-col gap-2">
      {Array.from({length:4}).map((_,index)=>{
          return <Image
          key={index}
          src={
            "https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/product_1_1-244x300.jpg"
          }
          alt="Product Image"
          width={100} // Specify width
          height={100} // Specify height
          className="w-[170px] h-[160px] object-cover shadow-sm border rounded-md"
        />
      })}
    </div>

    {/* Main Image */}

    <div className="w-full">
      <Image
        src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/product_1_1.jpg"
        alt="Product Image"
        width={600} // Specify width
        height={300} // Specify height
        className="object-cover border h-full w-full  shadow-sm rounded-md"
      />
    </div>
  </div>
  )
}

export default ProductImage