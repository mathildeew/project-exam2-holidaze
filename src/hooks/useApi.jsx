import { useState, useEffect } from "react";

export default function useApi(url, fetchOptions) {
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url, fetchOptions);
        const json = await response.json();

        setIsLoading(false);
        setContent(json);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      }
    }
    getData();
  }, [url]);

  return { content, isLoading, isError };
}
