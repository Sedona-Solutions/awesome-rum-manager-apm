<script lang="ts">
    import {onMount} from "svelte";
    import {Rhum} from "../../../models/rhum.js";
    import {Types} from "../../../models/types.js";

    export let data
    let rhum: Rhum = new Rhum();
    const endpoint = "http://localhost:9080/rums/"+data.id;
    onMount(async () => {
        const response = await fetch(endpoint).then(response => response.json());
        rhum = await response;
    });
</script>

<h1>Informations sur le rhum</h1>
<dl>
    <dt>Id</dt>
    <dd>{rhum.id}</dd>

    <dt>Nom</dt>
    <dd>{rhum.name}</dd>

    <dt>Type</dt>
    <dd>{Types[rhum.type]}</dd>

    <dt>Degré d'alcool</dt>
    <dd>{rhum.alcoholLevel}°</dd>

    <dt>Volume</dt>
    <dd>{rhum.bottleSize}cl</dd>

    <dt>Description</dt>
    <dd>{rhum.description}</dd>

    <dt>Distillerie</dt>
    <dd>{rhum.distillery}</dd>

    <dt>Origine</dt>
    <dd>{rhum.origin}</dd>

    <dt>Prix</dt>
    <dd>{rhum.price}€</dd>

    <dt>Stock</dt>
    <dd>{rhum.stock}</dd>
</dl>
