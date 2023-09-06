import { useState, useEffect } from "react";

export default function get(url) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setContent(json);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [url]);

  return { content };
}