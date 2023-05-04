// // import { posts } from './data.js';

// export async function load({ params }) {
//   // const post = posts.find((post) => post.slug === params.slug);

//   const res = await fetch("http://www.colourlovers.com/api/colors" + params.slug)
//   const post = await res.json()

//   return {
//     post
//   }
// }
// Fetch the colors from the API
// Set up the URL and parameters for the API request
const apiUrl = "http://www.colourlovers.com/api/colors";
const params = {
  lover: "COLOURlover",
  hueRange: "12,68",
  briRange: "2,88",
  keywords: "search term",
  keywordExact: 0,
  orderCol: "dateCreated",
  sortBy: "ASC",
  numResults: 20,
  resultOffset: 0,
  format: "json",
  jsonCallback: "yourCallbackFunction",
};

// Convert the parameters object to a query string
const queryString = Object.entries(params)
  .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
  .join("&");

// Use fetch to make the API request and handle the response
fetch(`${apiUrl}?${queryString}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); // Do something with the response data
  })
  .catch((error) => {
    console.error("There was a problem with the API request:", error);
  });

