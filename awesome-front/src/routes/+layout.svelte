<script lang="ts">
    import 'bootstrap/dist/css/bootstrap.min.css';

    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import Sidebar from "./Sidebar.svelte";
</script>


<div class="wrapper">
    <header>
        <Header/>
    </header>
    <main>
        <slot/>
    </main>
    <aside>
        <Sidebar/>
    </aside>
    <footer>
        <Footer/>
    </footer>
</div>

<style lang="scss">
  .wrapper {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
    "sidebar  header"
    "sidebar content"
    "sidebar  footer";
  }

  header {
    grid-area: header;
  }

  main {
    padding: 1em;
    grid-area: content;
  }

  aside {
    position: sticky;
    top: 0;
    grid-area: sidebar;
    height: 100vh;
  }

  footer {
    grid-area: footer;
  }
</style>
