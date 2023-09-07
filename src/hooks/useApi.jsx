import { useState, useEffect } from "react";

export default function UseAPI(url, fetchOptions) {
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url, fetchOptions);
        const json = await response.json();
        setIsLoading(false);
        setContent(json);
        response.ok && setIsSuccess(true);
        response.ok === false && setIsError(true);
        // console.log(response);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      }
    }
    getData();
  }, [url]);

  return { content, isLoading, isError, isSuccess };
}
