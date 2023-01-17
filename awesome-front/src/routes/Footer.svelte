<script>
    import BootstrapIcon from "../widgets/BootstrapIcon.svelte";
    import {base} from "$app/paths";
</script>

<footer class="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
        <a href="{base}/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg class="bi" width="30" height="24">
                <use xlink:href="#bootstrap"></use>
            </svg>
        </a>
        <span class="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3"><a class="text-muted" href="{base}/">
            <BootstrapIcon icon="twitter" width="24" height="24">
            </BootstrapIcon>
        </a></li>
        <li class="ms-3"><a class="text-muted" href="{base}/">
            <BootstrapIcon icon="instagram" width="24" height="24">
            </BootstrapIcon>
        </a></li>
        <li class="ms-3"><a class="text-muted" href="{base}/">
            <BootstrapIcon icon="facebook" width="24" height="24">
            </BootstrapIcon>
        </a></li>
    </ul>
</footer>
