<script>
    import {base} from "$app/paths";
    import {onMount} from "svelte";

    let rhums = [];
    const endpoint = "http://localhost:9080/rums";
    onMount(async () => {
        rhums = await fetch(endpoint)
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
    <h1>Liste des rhums</h1>
    <a class="btn btn-primary" href="{base}/rhums/create">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
        Ajouter un nouveau rhum
    </a>
</div>

{#each rhums as rhum}
    <div class="item d-flex align-items-center">
        <div class="image">
            <img width="64" src="{base}/assets/wine-bottle-solid.svg" class="img-fluidrounded-circle">
        </div>
        <div class="text">
            <a href="{base}/rhums/{rhum.id}">
                <h3 class="h5">{rhum.name}</h3>
            </a>
            <small>{rhum.description}</small>
        </div>
    </div>
{/each}
