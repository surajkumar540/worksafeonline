// func is called to check the current screen data is available or not
export const getScreenActiveStatus = (
  customizeData: any,
  currentCustomizeStep: any
) => {
  const { imageText, designImage, addtext, printEmbroidery, logoPosition } =
    customizeData || {};
  switch (currentCustomizeStep) {
    case 0:
      return !!imageText?.id;
    case 1:
      return !!(designImage || addtext?.textLine1);
    case 2:
      return !!printEmbroidery?.id;
    case 3:
      return !!logoPosition?.length;
    default:
      return false;
  }
};

export const fetchRequest = (data: any) => {
  const requests = [
    {
      condition: true,
      key: "savedLogos",
      url: "api/ArtworkList",
      params: { style: data.ProductID, search: "" },
    },
    {
      condition: true,
      key: "artworkList",
      url: "api/TextArtworkList",
      params: { style: data.ProductID, search: "" },
    },
    {
      condition: true,
      key: "artworkTemplate",
      url: "api/DesignProductPositionTemplate",
      params: { artwork: "", product: data.ProductID },
    },
    {
      condition: true,
      key: "textColours",
      url: "api/ProductTextColours",
      params: { product: data.ProductID, colour: data?.color?.Html_Code },
    },
    {
      condition: true,
      key: "textFontFamily",
      url: "api/ProductTextFontFamily",
      params: { product: data.ProductID },
    },
    {
      condition: true,
      key: "modalData",
      url: "api/CustomizeLogoPopUp",
      params: { style: data.ProductID },
    },
  ];
  return requests;
};
