export async function load({ params }) {
  console.log("Your params:" + params );
  
  const res = await fetch("https://api.spaceflightnewsapi.net/v3/articles/launch/" + params.slug)
  const favs = await res.json()
  
    return {
      favs
    }
  }