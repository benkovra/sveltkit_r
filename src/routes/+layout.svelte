<script>
  import '../global.css';
</script>

<nav>
  <a href="/">Home</a>
  <a href="/posts">news</a>
  <a href="/favs">launches</a>
  <a href="/resources">reports</a>
  <a href="/donate">blogs</a>
 </nav>

<main>
  <slot />
</main>

<footer>
  <a href="/">&copy;2023 Rachel</a>
</footer>

<style>
  nav, footer {
    display: flex;
    justify-content: space-evenly;
    padding: .5em;
    background-color:honeydew;
    color: seagreen;
  }
  main {
    grid-row: 2;
  }
  footer {
  grid-row: 3;
  position: sticky;
  bottom: 0;
}
</style>