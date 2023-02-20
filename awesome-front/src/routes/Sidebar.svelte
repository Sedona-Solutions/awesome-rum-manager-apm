<script lang="ts">
    import BootstrapIcon from "../widgets/BootstrapIcon.svelte";
    import {base} from "$app/paths";
    import {page} from "$app/stores";

    function isActive(targetUrl: string, currentUrl: string) {
        return targetUrl === currentUrl || (targetUrl!=='/' && currentUrl.startsWith(targetUrl));
    }

    $: currentUrl = $page.url.pathname.replace(base, '');
</script>

<nav class="sidebar d-flex flex-column align-items-center">
    <div class="text-white p-2 ps-1 pb-5">
        Awesome
        <div class="text-end fw-bold">
            RUM
        </div>
    </div>
    <ul class="d-flex nav nav-pills nav-flush flex-column mb-auto text-center">
        <li class:active={isActive('/', currentUrl)}>
            <a href="{base}/" class="nav-link text-white">
                <BootstrapIcon class="d-block mx-auto" icon="house-door"/>
                <span>Dashboard</span>
            </a>
        </li>
        <li class:active={isActive('/products', currentUrl)}>
            <a href="{base}/products" class="nav-link text-white">
                <BootstrapIcon class="d-block mx-auto" icon="grid"/>
                <span>Products</span>
            </a>
        </li>
        <li class:active={isActive('/metrics', currentUrl)}>
            <a href="{base}/metrics" class="nav-link text-white">
                <BootstrapIcon class="d-block mx-auto" icon="speedometer"/>
                <span>Metrics</span>
            </a>
        </li>
        <li class:active={isActive('/orders', currentUrl)}>
            <a href="{base}/orders" class="nav-link text-white">
                <BootstrapIcon class="d-block mx-auto" icon="table"/>
                <span>Orders</span>
            </a>
        </li>
    </ul>
</nav>

<style lang="scss">

  .sidebar {
    background-color: #ef4643;
    height: 100%;
  }

  ul {
    width: 100px;
  }

  li {
    padding: 0.4em 0;
  }

  .active {
    background-color: #c53838;
    border-right: 2px solid white;
    margin-right: 1px;
  }

  li:hover {
    background-color: #c53838;
  }

  span {
    font-size: 12px;
  }
</style>
