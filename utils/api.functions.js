import axios from "axios";
import { CONSTANTS } from "./constants";

// export const register = async ({ name, email }) => {
//     try {
//         const response = await axios.post(`${CONSTANTS.BACKEND_URL}/users`, {
//             name,
//             email,

//         });

//         return {
//             status: response.status,
//             data: response.data,
//         };
//     } catch (error) {
//         return {
//             status: 500,
//             data: error.response.data,
//         }
//     }
// }

export async function login({ IndexNo, name }) {
  const response = await fetch(`${CONSTANTS.BACKEND_API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      IndexNo,
      name,
    }),

    credentials: "include",
  });

  if (response.ok) {
    const data = await response.json();

    return data;
  } else {
    throw new Error("Failed to login");
  }
}
