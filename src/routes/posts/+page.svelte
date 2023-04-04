<script>
    export let data;
  </script>

<h1>Title of Page</h1>
<p>Basic page description</p>
<aside>
    <nav class="sidebar">
        {#each data.summaries as {slug, title}}
          <a href="/posts/{slug}">{title}</a>
        {/each}
    </nav>
</aside>