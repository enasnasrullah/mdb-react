import { axiosInstance } from "./";
import { API_KEY } from "../utils/constants";

const getTrending = async (type) =>
  await axiosInstance.get(`trending/${type}/day?api_key=${API_KEY}`);

const getSearchData = async (search) =>
  await axiosInstance.get(`search/multi?api_key=${API_KEY}&query=${search}`);

const getDetails = async ({ media_type, item_id }) =>
  await axiosInstance.get(`${media_type}/${item_id}?api_key=${API_KEY}`);

export { getTrending, getSearchData, getDetails };
