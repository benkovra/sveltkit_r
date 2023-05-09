<script>
    export let data;
    // console.log("hi")
   
// let file = "https://www.thecolorapi.com/id?hex=" + randomHex + "&format=json"
// fetch (file)
// .then(x => x.json())
// .then(y => document.getElementById("demo").style.backgroundColor = y.hex.value);

  </script>

<h1>Random Pallet Generator</h1>
<p>click the button to get a color palet using "the color api"</p>
<aside>
    <nav class="sidebar">
      <button onclick="location.reload()">New Pallet</button>
        {#each data.pallet as hex}
          <p style={`background-color: #${hex}`}> ________________________</p>
        {/each}
    </nav>
</aside>