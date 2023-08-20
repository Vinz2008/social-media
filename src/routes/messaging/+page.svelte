<script lang="ts">
    import { doc, setDoc,deleteDoc } from "firebase/firestore";
    import { onMount } from "svelte";
    import { getFirebaseContext } from "sveltefire";
    const { auth, firestore } = getFirebaseContext();
    function find_conversation() : string | undefined {
        return undefined;
    }
    function connect(){
        setDoc(doc(firestore!, "waiting_room", auth?.currentUser?.uid!), {});
        const conversation = find_conversation();
        if (conversation != undefined){

        }  else {

        }
    }
    async function disconnect(){
        //await deleteDoc(doc(firestore!, "users", auth?.currentUser?.uid!));
    }
    onMount(() => {
        console.log('the component has mounted');
    });
</script>

<button on:click={() => {connect()}}>Connect</button>

<button on:click={async () => {await disconnect()}}>Disconnect</button>