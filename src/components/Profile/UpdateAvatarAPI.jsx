import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import * as storage from "../../js/storage/localStorage";

const token = storage.get("token");

export default axios.create({
  baseURL: "https://api.noroff.dev",
  headers: {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  },
});

// const updateAvatarAPI = (data) => {
//   const [isError, setIsError] = useState();
//   const [isSuccess, setIsSuccess] = useState();
//   const token = storage.get("token");
//   const name = storage.get("name");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://api.noroff.dev/api/v1/holidaze/profiles/${name}/media`,
//           {
//             method: "PUT",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//             body: JSON.stringify(data),
//           }
//         );

//         console.log(response);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return { response };
// async function sendFormData(formData) {
//   try {
//     setIsError(false);
//     setIsSuccess(false);

//     const response = await fetch(
//       `https://api.noroff.dev/api/v1/holidaze/profiles/${name}/media`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(formData),
//       }
//     );
//     const json = await response.json();

//     // console.log(response);
//     setIsSuccess(true);

//     {
//       response.ok && setIsSuccess(true);
//     }

//     // if (response.ok) {
//     //   const json = await response.json();
//     //   console.log(json);
//     // }
//     // if (response.ok) {
//     //   setIsSuccess(true);
//     // }

//     // if (response.ok) {
//     //   const json = await response.json();
//     //   setData(json);
//     //   setIsSuccess(true);
//     //   console.log(json);
//     // } else {
//     //   setIsError(true);
//     // }
//   } catch (error) {
//     console.log(error);
//     setIsError(true);
//   }
//   // setIsLoading(false);
//   // console.log(isSuccess);
// }

// return {
//   data,
//   isError,
//   isSuccess,
//   sendFormData,
// };
// };

// export default updateAvatarAPI;
