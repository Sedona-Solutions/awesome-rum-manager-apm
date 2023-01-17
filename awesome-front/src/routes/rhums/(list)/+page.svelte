<script>
    import {rhumsMock} from '@awesome/models/rhum';
    import {base} from "$app/paths";

    let rhums = rhumsMock;
</script>

base path :{base}

<h1>List <a class="btn btn-primary" href="/rhums/create">Create</a></h1>
<ul>
    {#each rhums as rhum}
        <li><a href="{base}/rhums/{rhum.id}">{rhum.name}</a></li>
    {/each}
</ul>
