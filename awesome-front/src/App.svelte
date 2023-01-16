<script lang="ts">
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Router from 'svelte-spa-router'
    import {routes} from "./pages/routes.js";
    import Header from "./pages/layout/Header.svelte";
    import Footer from "./pages/layout/Footer.svelte";
</script>

<Header/>
<div class="container p-5">
    <Router {routes}/>
</div>
<Footer/>
