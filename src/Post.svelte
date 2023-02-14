<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function LikePost() {
        ratio++;
	    dispatch('like_change', {
            id,
            ratio
        });
    }
    function dislikePost(){
        console.log("id internal : ", id);
        ratio--;
	    dispatch('like_change', {
            id,
            ratio
        });
    }
    function remove() {
		dispatch('remove', { id });
	}
    export let uid;
    export let id; // document ID
    export let text;
    export let ratio;
</script>

<style>
    div {
        border-style: solid;
        border-width: thin;
        border-color: #000000;
    }
    span {
        padding-left: 1em;
    }
</style>

<li>
    <div>
    <span class="is-complete">{ text }</span>
    <br/>
    <span>{ ratio } ratio</span>
    <button on:click={LikePost}> ❤️ </button>
    |
    <button on:click={dislikePost}> ❌ </button>
    |
    <button on:click={remove}> 🗑 </button>
    </div>
</li>
    