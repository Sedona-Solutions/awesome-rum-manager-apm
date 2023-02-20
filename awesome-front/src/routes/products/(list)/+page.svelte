<script lang="ts">
    import {base} from "$app/paths";
    import BootstrapIcon from "@awesome/widgets/BootstrapIcon.svelte";
    import type {PageData} from './$types';
    import {invalidateAll} from "$app/navigation";
    import {RumRepository} from "@awesome/repository/rum.repository";

    export let data: PageData;

    function removeRum(id: number) {
        new RumRepository().deleteById(id).then((resp) => {
            console.log(resp)
            invalidateAll()
        });
    }

    $: ({rums} = data)
</script>

<div class="m-4">
    <div class="row pb-3 justify-content-around">

        <div class="col-6">
            <div class="input-group">
            <span class="input-group-text">
            <BootstrapIcon icon="search" size={18}/>
            </span>
                <input type="text" class="form-control" placeholder="Search by name, origin, ...">
            </div>
        </div>
        <div class="col">
            <button class="btn btn-link">
                + Filters
            </button>
        </div>

        <div class="col-auto">
            <a class="btn btn-primary d-flex align-items-center gap-1" href="{base}/products/create">
                <BootstrapIcon class="me-1" icon="plus-circle" size={18}/>
                <span>New rum</span>
            </a>
        </div>
    </div>


    <table class="table table-hover shadow">
        <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Origin</th>
            <th scope="col">Distillery</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        {#each rums as rum}
            <tr>
                <td><a href="{base}/products/{rum.id}">{rum.name} ({rum.bottleSize}cl)</a></td>
                <td>{rum.origin}</td>
                <td>{rum.distillery}</td>
                <td>{rum.price}</td>
                <td>{rum.stock}</td>
                <td>
                    <div class="d-flex gap-2 align-items-center">
                        <a href="{base}/products/{rum.id}/edit">
                            <BootstrapIcon class="btn-outline-primary" icon="pen" size={20}/>
                        </a>
                        <button class="btn btn-link p-0" on:click="{()=>removeRum(rum.id)}">
                            <BootstrapIcon class="link-danger" icon="trash" size={20}/>
                        </button>
                    </div>
                </td>
            </tr>
        {/each}
    </table>
</div>

<style lang="scss">
  table {
    border-radius: 1em;
    overflow: hidden;
    border-collapse: collapse;
  }

  th {
    background: linear-gradient(#4b4b4b, #3b3b3b);
    color: white;
  }

  th, td {
    padding: 1.5em !important;
    border-bottom: 2px solid white;
    border-top: 2px solid white;
  }
</style>
