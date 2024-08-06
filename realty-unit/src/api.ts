import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1";

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getProperties = async (payload: any) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/property/getProperties`,
      payload,
      options
    );
    return data?.data;
  } catch (error) {
    console.log(error);
  }
};
