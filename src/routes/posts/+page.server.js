// import { posts } from './data.js';

export async function load() {
  
  // const json = await res.json()
  // console.log(json)
  
  // const pallet = Array.from({length:3}).map(x=>(randomHex()))
  return {
    // posts: json.results,
    pallet: [
      randomHex(),
      randomHex(),
      randomHex(),
    ]
  };
}
// const fetchFromApi = async (hex) => await fetch ("https://www.thecolorapi.com/id?hex=" = hex + "&format=json").then(x => x.json())
const randomHex = ()=>Array.from({length:3})
.map(x=> Math.random() * 255)
.map(x=>Math.floor(x))
.map(x=>x.toString(16))
.map(x=>x.length==1?"0"+x:x)
.join('')
