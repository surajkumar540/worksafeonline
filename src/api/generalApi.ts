import axios from "axios";

const BASE_URL = "https://johntrn.worksafeonline.co.uk/";

export const Get = async (url: string): Promise<any> => {
  try {
    const response = await axios.get(BASE_URL + url);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error))
      console.error("Axios Error:", error.response?.data || error.message);
    else console.error("Unexpected Error:", error.message || error);
    return null;
  }
};
