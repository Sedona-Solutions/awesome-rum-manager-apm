<script lang="ts">
    import {rhumsMock} from "@awesome/models/rhum";

    export let data
    let rhums = $rhumsMock.find(rhum => rhum.id === Number(data.id));
</script>

<h1>Details</h1>
<dl>
    <dt>Id</dt>
    <dd>{rhums.id}</dd>

    <dt>Name</dt>
    <dd>{rhums.name}</dd>

    <dt>Note</dt>
    <dd>{rhums.note}</dd>
</dl>
