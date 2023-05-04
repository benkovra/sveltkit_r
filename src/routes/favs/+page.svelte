<script>
    export let data;
    // console.log("hi")
  </script>
  
<h1>Launch Library</h1>
<p>Basic page description</p>
<aside>
    <nav class="sidebar">
        {#each data.favs as {id, title}}
          <a href="/favs/{id}">{title}</a>
        {/each}
    </nav>
</aside>