import { useState } from "react";

export const getAccessToken = () => {
  return sessionStorage.getItem("access_token");
};

// export const fetchWithAuth = async (url: string, options: RequestInit) => {
//   const accessToken = getAccessToken();
//   return toastedFetch(url, {
//     ...options,
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });
// };

// export const useToastedFetch = (url: string, options: RequestInit) => {
//   const [error, setError] = useState<Error | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const fetch = async (url: string, options: RequestInit) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(url, options);
//       if (!response.ok) {
//         setError(new Error("Failed to fetch data"));
//       }
//       return response;
//     } catch (error) {
//       setError(error as Error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return { isLoading, error, fetch };
// };
