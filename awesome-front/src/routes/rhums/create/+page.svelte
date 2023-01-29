<script>
  import {base} from "$app/paths";
  import {createForm} from "svelte-forms-lib";
  import {Types} from "../../../models/types.ts";

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
      const endpoint = "http://localhost:9080/rums";
      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }).then(response => console.log(response));
    },
  });
</script>


<div class="container d-flex justify-content-between">
  <h1>Ajout d'un rhum</h1>
  <a class="btn btn-primary" href="{base}/rhums">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
    </svg>
    Retour à la liste
  </a>
</div>

<div class="m-5">
  <form class="row needs-validation" novalidate="" on:submit|preventDefault={handleSubmit}>
    <div class="col-12">
      <label for="name" class="form-label">Nom</label>
      <input type="text" class="form-control" name="name" id="name" bind:value={$form.name} required placeholder="Nom du rhum"/>
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
      <label for="alcoholLevel" class="form-label">Degré d'alcool</label>
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
      <label for="distillery" class="form-label">Distillerie</label>
      <input class="form-control" type="text" id="distillery" bind:value={$form.distillery} >
    </div>
    <div class="col-6">
      <label for="origin" class="form-label">Origine</label>
      <input class="form-control" type="text" id="origin" bind:value={$form.origin}>
    </div>
    <div class="col-6">
      <label for="price" class="form-label">Prix</label>
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
      <label for="description" class="form-label">Description <span class="text-muted">(Optionnel)</span></label>
      <textarea class="form-control" id="description" bind:value={$form.description}></textarea>
    </div>
    <div class="text-end mt-5">
      <button class="btn btn-primary btn-lg" type="submit">Enregistrer</button>
    </div>
  </form>
</div>