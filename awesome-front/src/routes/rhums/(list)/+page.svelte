<script>
    import {rhumsMock} from '@awesome/models/rhum';

    let rhums = rhumsMock;
</script>


<h1>List <a class="btn btn-primary" href="/rhums/create">Create</a></h1>
<ul>
    {#each rhums as rhum}
        <li><a href="/rhums/{rhum.id}">{rhum.name}</a></li>
    {/each}
</ul>
