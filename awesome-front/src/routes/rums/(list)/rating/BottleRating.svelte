<script>
	import RateBottle from "./RateBottle.svelte";

    // User rating states
    let rating = null;
    let hoverRating = null;

    // using curried function to initialize hover with id
    const handleHover = (id) => () => {
        hoverRating = id;
    }
    const handleRate = (id) => (event) => {
        if (rating &&
            rating.toString() === event.srcElement.dataset.bottleid
        ) {
            return;
        }
        rating = id;
    }

    let bottles = [
        {id: 1, title: 'One bottle'},
        {id: 2, title: 'Two bottles'},
        {id: 3, title: 'Three bottles'},
        {id: 4, title: 'Four bottles'},
        {id: 5, title: 'Five bottles'},
    ]
</script>
<style>
    .bottleContainer {
        display: inline-block;
        transition: background .2s ease-out;
        border-radius: 8px;
        padding: 4px 6px 0;
    }

    :global(button) {
        cursor: pointer;
    }
</style>

<div class="feedback">
	<span class="bottleContainer">
		{#each bottles as bottle (bottle.id)}
			<RateBottle
                    filled={hoverRating ? (hoverRating >= bottle.id) : (rating >= bottle.id)}
                    bottleId={bottle.id}
                    on:mouseover={handleHover(bottle.id)}
                    on:mouseleave={() => hoverRating = null}
                    on:click={handleRate(bottle.id)}
            />
		{/each}
	</span>
</div>