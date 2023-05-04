// import { posts } from './data.js';

export async function load() {
  const res = await fetch("http://www.colourlovers.com/api/colors")
  const json = await res.json()
  console.log(json)
  return {
    posts: json.results
  };
}