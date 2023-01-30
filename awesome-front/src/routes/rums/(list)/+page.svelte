<script>
    import {base} from "$app/paths";
    import {onMount} from "svelte";
    import BootstrapIcon from "../../../widgets/BootstrapIcon.svelte";
    import {variables} from "../../../variables.ts";

    let rums = [];
    onMount(async () => {
        const endpoint = variables.apiBasePath+"/rums";
        rums = await fetch(endpoint)
            .then(response => response.json())
            .then((data) => data)
            .catch(error => {
                console.log(error);
                return [];
            });
    });
</script>

<style>
    .item:nth-of-type(2n) {
        background: #fafafa;
    }
</style>

<div class="container d-flex justify-content-between">
    <h1>List of rums</h1>
    <a class="btn btn-primary" href="{base}/rums/create">
        <BootstrapIcon class="me-1" icon="plus-circle" width="24" height="24"></BootstrapIcon>
        Add a new rum
    </a>
</div>

<div class="m-5">
    {#each rums as rum}
        <a href="{base}/rums/{rum.id}" class="btn item d-flex align-items-center mb-4">
            <div class="image me-5">
                <img width="64" src="{base}/assets/wine-bottle-solid.svg" class="img-fluidrounded-circle" alt="">
            </div>
            <div class="text">
                <h3 class="h5">{rum.name}
                    <small>({rum.bottleSize}cl)</small>
                </h3>
                <small>{rum.description}</small>
            </div>
        </a>
    {/each}
</div>