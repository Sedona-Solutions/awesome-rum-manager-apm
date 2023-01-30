<script>
  import {base} from "$app/paths";
  import {createForm} from "svelte-forms-lib";
  import {Types} from "../../../models/types.ts";
  import BootstrapIcon from "../../../widgets/BootstrapIcon.svelte";
  import {goto} from "$app/navigation";
  import {variables} from "../../../variables.ts";


  const { form, handleSubmit } = createForm({
    initialValues: {
      name: "",
      alcoholLevel: 40,
      bottleSize: 70,
      description: "",
      distillery: "",
      origin: "",
      price: "",
      stock: 0,
      type: ""
    },
    onSubmit: (values) => {
      const endpoint = variables.apiBasePath+"/rums";
      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }).then(response => {
        console.log(response)
        goto(base+'/rums');
      });
    },
  });
</script>


<div class="container d-flex justify-content-between">
  <h1>Add a new rum</h1>
  <a class="btn btn-primary" href="{base}/rums">
    <BootstrapIcon class="me-1" icon="arrow-left-square" width="24" height="24"></BootstrapIcon>
    Back to the list
  </a>
</div>

<div class="m-5">
  <form class="row needs-validation" novalidate="" on:submit|preventDefault={handleSubmit}>
    <div class="col-12">
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" name="name" id="name" bind:value={$form.name} required placeholder="Name of rum"/>
    </div>
    <div class="col-12">
      <label for="type" class="form-label">Type</label>
      <select class="form-select" id="type" required bind:value={$form.type}>
        {#each Object.entries(Types) as [key, label]}
          <option value="{key}">{label}</option>
        {/each}
      </select>
    </div>
    <div class="col-6">
      <label for="alcoholLevel" class="form-label">Alcohol level</label>
      <div class="input-group">
        <input class="form-control" type="number" id="alcoholLevel" bind:value={$form.alcoholLevel} required>
        <span class="input-group-text">°</span>
      </div>
    </div>
    <div class="col-6">
      <label for="bottleSize" class="form-label">Volume</label>
      <div class="input-group">
        <input class="form-control" type="number" id="bottleSize" bind:value={$form.bottleSize} required>
        <span class="input-group-text">cl</span>
      </div>
    </div>

    <div class="col-6">
      <label for="distillery" class="form-label">Distillery</label>
      <input class="form-control" type="text" id="distillery" bind:value={$form.distillery} >
    </div>
    <div class="col-6">
      <label for="origin" class="form-label">Origin</label>
      <input class="form-control" type="text" id="origin" bind:value={$form.origin}>
    </div>
    <div class="col-6">
      <label for="price" class="form-label">Price</label>
      <div class="input-group">
        <span class="input-group-text">€</span>
        <input class="form-control" type="number" id="price" bind:value={$form.price} required>
      </div>
    </div>
    <div class="col-6">
      <label for="stock" class="form-label">Stock</label>
      <input class="form-control" type="number" id="stock" bind:value={$form.stock}>
    </div>
    <div class="col-12">
      <label for="description" class="form-label">Description <span class="text-muted">(Optional)</span></label>
      <textarea class="form-control" id="description" bind:value={$form.description}></textarea>
    </div>
    <div class="text-end mt-5">
      <button class="btn btn-primary btn-lg" type="submit">Save</button>
    </div>
  </form>
</div>