const ProductFitting = ({ productFittings }: { productFittings: any[] }) => {
  return (
    <div className="mt-4">
      <p className="font-semibold">Available Fittings</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {productFittings.map((fitting) => (
          <div
            key={fitting.Fitting_Sequence_No}
            className="flex flex-col items-center justify-center border rounded-lg px-4 py-2 shadow-sm hover:shadow-md cursor-pointer transition duration-300"
          >
            <p className="font-semibold flex items-center gap-2">
              {fitting.Fitting_Description.trim()}
              {fitting.Perc_Uplift > 0 && (
                <span className="text-sm text-green-500">
                  +{fitting.Perc_Uplift}%
                </span>
              )}
            </p>
            <p className="text-sm text-gray-500">
              Code: {fitting.Fitting.trim()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFitting;
