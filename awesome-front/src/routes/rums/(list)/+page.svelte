<script>
    import {base} from "$app/paths";
    import BootstrapIcon from "@awesome/widgets/BootstrapIcon.svelte";
    import {PUBLIC_API_BASE_PATH} from "$env/static/public";
    import BottleRating from "./rating/BottleRating.svelte";
    import Search from "./search/Search.svelte";

    let rums = [];
    let searchTerm = "";

    async function search() {
        const searchEndpoint = `${PUBLIC_API_BASE_PATH}/rums/search?name=` + searchTerm;
        rums = await fetch(searchEndpoint)
            .then(response => response.json())
            .catch(error => {
                console.log('search error', error);
                return [];
            });
    }
    search();
</script>

<style>
    .item:nth-of-type(2n) {
        background: #fafafa;
    }
</style>

<div class="container d-flex justify-content-between">
    <h1>List of rums</h1>
    <div class="justify-content-end d-inline-flex">
        <Search bind:searchTerm on:input={search} />
        <a class="btn btn-primary" name="create-rum" href="{base}/rums/create">
            <BootstrapIcon class="me-1" icon="plus-circle" width="24" height="24"></BootstrapIcon>
            Add a new rum
        </a>
    </div>
</div>

<div class="m-5">
    {#each rums as rum}
        <div class="d-flex justify-content-between">
            <a href="{base}/rums/{rum.id}" name="rum-details" class="btn item d-flex align-items-center mb-4">
                <div class="image me-5">
                    <img width="64" src="{base}/assets/wine-bottle-solid.svg" class="img-fluidrounded-circle" alt="">
                </div>
                <div class="text">
                    <h3 class="h5" name="rum-name">{rum.name}
                        <small>({rum.bottleSize}cl)</small>
                    </h3>
                    <small>{rum.description}</small>
                </div>
            </a>
            <BottleRating />
        </div>
    {/each}
</div>
