import { useState, useEffect } from "react";

export default function post(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function postData() {
      try {
      } catch {}
      console.log(error);
    }
    postData();
  }, [url]);
}
