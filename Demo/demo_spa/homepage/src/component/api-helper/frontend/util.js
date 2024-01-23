import axios from "axios";
import sharedConfig from '../../config/config';
const backendendpoint = sharedConfig.REACT_APP_API_URL;

export const getAllProduct = async (data) => {
  const header = {
    "Content-Type": "application/json",
  };
  const res = await axios({
    url: `${backendendpoint}/graphql`,
    method: "post",
    headers: header,
    data: {
      query: `{
            products{
               productId,
               productName,
               productDescription,
               listPrice
               slaesPrice
               productImage
              }
           }`,
    },
  });
  const resdata = await res.data;
  return resdata;
};