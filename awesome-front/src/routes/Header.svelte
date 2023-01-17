<script lang="ts">
    import BootstrapIcon from "../widgets/BootstrapIcon.svelte";
</script>
<header>
    <div class="px-3 py-2 text-bg-dark">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                    <BootstrapIcon class="bi d-block m-3" icon="house-door" width="24" height="24">
                    </BootstrapIcon>
                    Awesome Rum
                </a>

                <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                    <li>
                        <a href="/" class="nav-link text-white">
                            <BootstrapIcon class="bi d-block mx-auto mb-1" icon="speedometer2" width="24" height="24">
                            </BootstrapIcon>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/" class="nav-link text-white">
                            <BootstrapIcon class="bi d-block mx-auto mb-1"  icon="table" width="24" height="24">
                            </BootstrapIcon>
                            Orders
                        </a>
                    </li>
                    <li>
                        <a href="/" class="nav-link text-white">
                            <BootstrapIcon class="bi d-block mx-auto mb-1"  icon="grid" width="24" height="24">
                            </BootstrapIcon>
                            Products
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</header>
