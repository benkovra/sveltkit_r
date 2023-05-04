<script>
    export let data;
    // console.log("hi")
  </script>

<h1>Title of Page</h1>
<p>Basic page description</p>
<aside>
    <nav class="sidebar">
        {#each data.posts as {id, title}}
          <a href="/posts/{id}">{title}</a>
        {/each}
    </nav>
</aside>