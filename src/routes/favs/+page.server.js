export async function load() {
    const res = await fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=5")
    const json = await res.json()
    console.log(json)
    return {
      favs: json.results.map(result => result.launches).filter(result => result !== undefined)
    };
  }