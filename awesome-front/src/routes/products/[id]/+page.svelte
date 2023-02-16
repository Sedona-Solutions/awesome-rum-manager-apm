<script lang="ts">
    import {base} from "$app/paths";
    import {Types} from "@awesome/models/types";
    import BootstrapIcon from "@awesome/widgets/BootstrapIcon.svelte";
    import {goto} from "$app/navigation";
    import {RumRepository} from "@awesome/repository/rum.repository";
    import type {PageData} from './$types';
    import BottleRating from "@awesome/routes/products/[id]/rating/BottleRating.svelte";

    export let data: PageData;
    const {rum} = data;

    function removeRum(): void {
        new RumRepository().deleteById(rum.id).then((resp) => {
            console.log(resp)
            goto(base + '/products');
        });
    }
</script>


<div class="container d-flex justify-content-between">
    <h1>Rum informations</h1>
    <div class="d-inline-flex align-items-center gap-2">
        <a class="btn btn-primary d-flex align-items-center gap-1" href="{base}/products/{rum.id}/edit">
            <BootstrapIcon icon="pen" size={18}/>
            <span>Edit</span>
        </a>
        <button class="btn btn-danger d-flex align-items-center gap-1" on:click={removeRum}>
            <BootstrapIcon icon="trash" size={18}/>
            <span>Remove</span>
        </button>
        <a class="btn btn-secondary d-flex align-items-center gap-1" href="{base}/products">
            <BootstrapIcon icon="arrow-left" size={18}/>
            <span>Back </span>
        </a>
    </div>
</div>

<div class="mx-5 my-3 p-4 card shadow">
    {#if rum}
        <div class="card-body d-flex gap-5">
            <div class="image">
                <img width="64" src="{base}/assets/default-bottle.jpg" class="img-fluidrounded-circle" alt="">
            </div>
            <div>
                <h5 class="card-title h1">{rum.name}</h5>
                <p class="card-text">{rum.description}</p>
            </div>
            <div class="d-flex flex-grow-1 align-self-center justify-content-end">
                <BottleRating/>
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
