<script lang="ts">
    import {base} from "$app/paths";
    import {Types} from "@awesome/models/types";
    import BootstrapIcon from "@awesome/widgets/BootstrapIcon.svelte";
    import {goto} from "$app/navigation";
    import {createForm} from "felte";
    import {RumRepository} from "@awesome/repository/rum.repository";
    import type {Rum} from "@awesome/models/rum"

    const {form} = createForm({
        initialValues: {
            alcoholLevel: 40,
            bottleSize: 70
        },
        onSubmit: async (values: Rum) => {
            const created = await new RumRepository().create(values);
            console.log(created);
            goto(`${base}/products`);
        }
    });
</script>


<div class="container d-flex justify-content-between align-items-center">
    <h1>Add a new rum</h1>
    <a class="btn btn-secondary d-flex align-items-center gap-1" href="{base}/products">
        <BootstrapIcon icon="arrow-left" size={18}/>
        <span>Back </span>
    </a>
</div>

<div class="mx-5 my-3 p-4 card shadow">
    <form use:form class="row needs-validation">
        <div class="col-12">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" name="name" id="name" required placeholder="Name of rum"/>
        </div>
        <div class="col-12">
            <label for="type" class="form-label">Type</label>
            <select class="form-select" id="type" name="type" required>
                {#each Object.entries(Types) as [key, label]}
                    <option value="{key}">{label}</option>
                {/each}
            </select>
        </div>
        <div class="col-6">
            <label for="alcoholLevel" class="form-label">Alcohol level</label>
            <div class="input-group">
                <input class="form-control" type="number" id="alcoholLevel" name="alcoholLevel" step=".01" required>
                <span class="input-group-text">°</span>
            </div>
        </div>
        <div class="col-6">
            <label for="bottleSize" class="form-label">Volume</label>
            <div class="input-group">
                <input class="form-control" type="number" id="bottleSize" name="bottleSize" required>
                <span class="input-group-text">cl</span>
            </div>
        </div>

        <div class="col-6">
            <label for="distillery" class="form-label">Distillery</label>
            <input class="form-control" type="text" id="distillery" name="distillery">
        </div>
        <div class="col-6">
            <label for="origin" class="form-label">Origin</label>
            <input class="form-control" type="text" id="origin" name="origin">
        </div>
        <div class="col-6">
            <label for="price" class="form-label">Price</label>
            <div class="input-group">
                <span class="input-group-text">€</span>
                <input class="form-control" type="number" id="price" name="price" required>
            </div>
        </div>
        <div class="col-6">
            <label for="stock" class="form-label">Stock</label>
            <input class="form-control" type="number" id="stock" name="stock">
        </div>
        <div class="col-12">
            <label for="description" class="form-label">Description <span class="text-muted">(Optional)</span></label>
            <textarea class="form-control" id="description" name="description"></textarea>
        </div>
        <div class="text-end mt-5 aa">
            <button class="btn btn-primary btn-lg" type="submit">Save</button>
        </div>
    </form>
</div>

<style lang="scss">
  .form-label {
    font-weight: bold;
    padding-top: 0.5em;
  }
</style>
