<script>
    import {base} from "$app/paths";
    import { onMount } from "svelte";

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

base path :{base}

<h1>List <a class="btn btn-primary" href="/rhums/create">Create</a></h1>
<ul>
    {#each rhums as rhum}
        <li><a href="{base}/rhums/{rhum.id}">{rhum.name}</a> {rhum.description}</li>
    {/each}
</ul>
