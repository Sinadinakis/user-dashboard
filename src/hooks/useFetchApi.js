import { useState, useEffect } from "react";

// Export native fecth function for test purposes
export function fetchSearchResults(url) {
  return fetch(url)
    .then((Response) => {
      if (Response.headers.get("Content-type").includes("application")) {
        return Response.json().then((json) => ({ json, Response }));
      }
      return Response;
    })
    .catch((e) => {
      return { json: e, Response: [] };
    })
    .then(({ json: data, Response }) => {
      if (!Response.ok) {
        if ([422, 404, 403].includes(Response.status)) {
          return Response.statusText;
        }
      }
      if (typeof url === "string" && url !== "") {
        return data;
      }
    });
}

// Create a Costume Hook useFetchApi
export function useFetchApi(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchSearchResults(url).then((data) => setData(data));
  }, [url]);

  return { data };
}
