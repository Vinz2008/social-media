<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    function goToPage(pageNb){
        page = pageNb;
        dispatch('goTo', {
            page
        });
    }
    // 0 : main page
    // 1 : messages
    // 2 : profile
    export let page = 0;
</script>

<style>
nav {
    top: 75px;
    bottom: 0px;
    position: fixed;
}
</style>

<nav>
<button on:click={goToPage(0)}>Main</button>
<br>
<button on:click={goToPage(1)}>Messages</button>
<br>
<button on:click={goToPage(2)}>Profile</button>
<br>
</nav>