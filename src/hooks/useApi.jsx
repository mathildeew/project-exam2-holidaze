import axios from "axios";
import { useState, useEffect } from "react";
import { get } from "../js/storage/localStorage";

const useApi = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const token = get("token");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const fetchApi = async (url, method, data) => {
    setIsLoading(true);
    try {
      const response = await axios({
        url: url,
        method: method,
        headers: headers,
        data: data,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };
  return { data, isSuccess, isLoading, isError, fetchApi };
};

export default useApi;
