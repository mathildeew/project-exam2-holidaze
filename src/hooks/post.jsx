import { useState, useEffect } from "react";
import { json } from "react-router-dom";

export default function post(url, postContent) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function postData() {
      try {
        const body = JSON.stringify(postContent);
        const response = await fetch(url, body);
        const json = await response.json();

        setData(json);
        console.log(json);
      } catch {
        json.errors;
      }
      console.log(json.errors);
    }
    postData();
  }, [url, postContent]);
}
