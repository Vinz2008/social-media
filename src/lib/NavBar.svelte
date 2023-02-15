<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    function goToMain(){
        page = 0;
        dispatch('goTo', {
            page
        });
        console.log("change page to ", page);
    }
    function goToMessages(){
        page = 1;
        dispatch('goTo', {
            page
        });
        console.log("change page to ", page);
    }
    function goToProfile(){
        page = 2;
        dispatch('goTo', {
            page
        });
        console.log("change page to ", page);
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
<button on:click={goToMain}>Main</button>
<br>
<button on:click={goToMessages}>Messages</button>
<br>
<button on:click={goToProfile}>Profile</button>
<br>
</nav>