<script>
  import '../global.css';
</script>

<nav>
  <a href="/">Home</a>
  <a href="/posts">pallets</a>
  <a href="/favs">favs</a>
  
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