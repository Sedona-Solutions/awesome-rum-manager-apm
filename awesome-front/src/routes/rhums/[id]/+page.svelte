<script lang="ts">
    import {rhumsMock} from "@awesome/models/rhum";

    export let data
    let rhums = rhumsMock[data.id - 1];
</script>

<h1>Details</h1>
<dl>
    <dt>Id</dt>
    <dd>{rhums.id}</dd>

    <dt>Name</dt>
    <dd>{rhums.name}</dd>
</dl>
