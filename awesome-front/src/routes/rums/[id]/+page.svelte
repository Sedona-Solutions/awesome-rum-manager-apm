<script lang="ts">
    import {base} from "$app/paths";
    import {onMount} from "svelte";
    import type {Rum} from "@awesome/models/rum.ts";
    import {Types} from "@awesome/models/types.ts";
    import BootstrapIcon from "@awesome/widgets/BootstrapIcon.svelte";
    import {PUBLIC_API_BASE_PATH} from "$env/static/public";
    import {goto} from "$app/navigation";

    export let data;
    let rum: Rum|null = null;
    const endpoint = `${PUBLIC_API_BASE_PATH}/rums/${data.id}`;
    onMount(async () => {
        rum = await fetch(endpoint).then(response => response.json());
    });
    function removeRum(): void {
        const endpoint = `${PUBLIC_API_BASE_PATH}/rums/${data.id}`;
        fetch(endpoint, {method: 'DELETE'}).then((resp) => {
            console.log(resp)
            goto(base+'/rums');
        });
    }
</script>

<div class="container d-flex justify-content-between">
    <h1>Rum informations</h1>
    <div>
        <button class="btn btn-danger" on:click={removeRum}>
            <BootstrapIcon class="me-1" icon="trash" width="24" height="24"></BootstrapIcon>
            Remove rum
        </button>
        <a class="btn btn-primary" href="{base}/rums">
            <BootstrapIcon class="me-1" icon="arrow-left-square" width="24" height="24"></BootstrapIcon>
            Back to the list
        </a>
    </div>
</div>

<div class="m-5">
    <div class="card">
        {#if rum}
            <div class="card-body d-flex">
                <div class="image me-5">
                    <img width="64" src="{base}/assets/wine-bottle-solid.svg" class="img-fluidrounded-circle" alt="">
                </div>
                <div>
                    <h5 class="card-title h1">{rum.name}</h5>
                    <p class="card-text">{rum.description}</p>
                </div>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>Type</b> {Types[rum.type]}</li>
                <li class="list-group-item"><b>Volume</b> {rum.bottleSize}cl</li>
                <li class="list-group-item"><b>Alcohol level</b> {rum.alcoholLevel}°</li>
                <li class="list-group-item"><b>Distillery</b> {rum.distillery}</li>
                <li class="list-group-item"><b>Origin</b> {rum.origin}</li>
            </ul>
            <div class="card-body d-flex justify-content-around">
                <b>{rum.price}€</b>
                <p><b>Stock</b> {rum.stock}</p>
            </div>
        {/if}
    </div>
</div>