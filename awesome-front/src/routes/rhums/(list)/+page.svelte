<script>
    import {rhumsMock} from '@awesome/models/rhum';
    import {base} from "$app/paths";
</script>

base path :{base}

<h1>List <a class="btn btn-primary" href="/rhums/create">Create</a></h1>
<ul>
    {#each $rhumsMock as rhum}
        <li><a href="{base}/rhums/{rhum.id}">{rhum.name}</a> {rhum.note}</li>
    {/each}
</ul>
