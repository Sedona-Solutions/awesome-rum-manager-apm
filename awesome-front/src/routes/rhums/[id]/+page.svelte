<script lang="ts">
    import {onMount} from "svelte";
    import {Rhum} from "../../../models/rhum.js";

    export let data
    let rhum: Rhum = new Rhum();
    const endpoint = "http://localhost:9080/rums/"+data.id;
    onMount(async () => {
        const response = await fetch(endpoint).then(response => response.json());
        rhum = await response;
    });
</script>

<h1>Details</h1>
<dl>
    <dt>Id</dt>
    <dd>{rhum.id}</dd>

    <dt>Name</dt>
    <dd>{rhum.name}</dd>

    <dt>Description</dt>
    <dd>{rhum.description}</dd>
</dl>
