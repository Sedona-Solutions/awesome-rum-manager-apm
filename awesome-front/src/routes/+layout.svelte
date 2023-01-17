<script lang="ts">
    import 'bootstrap/dist/css/bootstrap.min.css';

    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
</script>

<Header/>
<main class="container p-5">
    <slot/>
</main>
<Footer/>
