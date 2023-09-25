import axios from "axios";
import { useState, useEffect } from "react";
import { get } from "../js/storage/localStorage";

const useApi = () => {
  const token = get("token");

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMessage] = useState(null);

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
      setData(response.data);
      setIsSuccess(true);
      setIsError(false);
      setErrorMessage(null);
      return response;
    } catch (error) {
      setIsError(true);
      setIsSuccess(false);
      setData([]);

      if (!error.response) {
        setErrorMessage(`Client-side error: ${error.message}`);
        return isError;
      } else {
        const serverErrorMessage =
          error.response.data.errors &&
          Array.isArray(error.response.data.errors) &&
          error.response.data.errors.length > 0
            ? error.response.data.errors[0].message
            : "Unknown server error";

        console.log(error);
        setErrorMessage(`${serverErrorMessage}`);
      }
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    fetchApi,
    data,
    isLoading,
    isSuccess,
    isError,
    errorMsg,
  };
};

export default useApi;
