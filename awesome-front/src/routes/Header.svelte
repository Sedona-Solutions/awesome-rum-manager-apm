<script lang="ts">
    import BootstrapIcon from "../widgets/BootstrapIcon.svelte";
    import {base} from "$app/paths";
    import {page} from '$app/stores'

    let pageTitles = new Map<string, string>([
        ["", "Dashboard"],
        ["products", "Products"],
        ["orders", "Orders"],
        ["metrics", "Metrics"],
    ]);

    $: pageTitle = pageTitles.get($page.url.pathname.replace(base, '').split('/')[1]);
</script>
<header class="d-flex justify-content-between align-items-center">
    <div>
        <h4>{pageTitle}</h4>
    </div>
    <div class="d-flex justify-content-end align-items-center gap-3">
        <div>
            <BootstrapIcon icon="question-circle" size={18}>
            </BootstrapIcon>
        </div>
        <div class="d-block position-relative">
            <span class="dot"></span>
            <BootstrapIcon icon="bell" size={18}>
            </BootstrapIcon>
        </div>
        <div class="d-flex align-items-center gap-2">
            <img src="{base}/assets/avatar.jpg" class="avatar rounded-circle shadow-4">
            <span>Kerri Jackson</span>
        </div>
    </div>
</header>

<style lang="scss">
  header {
    font-size: 12px;
    background: linear-gradient(#4b4b4b, #3b3b3b);

    color: white;
    padding: 10px 30px;
  }

  .avatar {
    width: 40px;
  }

  .dot::before {
    content: '';
    background-color: #ef4643;
    border-radius: 50%;
    right: 0;
    position: absolute;
    height: 8px;
    width: 8px;
  }
</style>

