<script>
  import {rhumsMock} from "@awesome/models/rhum";
  import {createForm} from "svelte-forms-lib";

  const { form, handleChange, handleSubmit } = createForm({
    initialValues: {
      name: "",
      note: ""
    },
    onSubmit: (values) => {
      $rhumsMock = [...$rhumsMock, Object.assign({id: $rhumsMock.length + 1}, values)]
    },
  });
</script>

<h1>New Rhum <a class="btn btn-primary" href="/rhums">Back to list</a></h1>
<form class="content" on:submit|preventDefault={handleSubmit}>
  <label>Name</label>
  <input type="text" name="name" bind:value={$form.name} />
  <label>Note</label>
  <input type="text" name="note" bind:value={$form.note} />
  <button type="submit">Create</button>
</form>
