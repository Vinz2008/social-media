<script>
	import SocialMedia from './lib/SocialMedia.svelte';
	import Profile from './lib/Profile.svelte';
	import NavBar from './lib/NavBar.svelte';
	import { auth, googleProvider } from './lib/firebase';
	import { authState } from 'rxfire/auth';
	let user;
	const unsubscribe = authState(auth).subscribe(u => user = u);
	function login() {
        auth.signInWithPopup(googleProvider);
    }
	let page_nb;
	function change_page_nb(event){
		const { page } = event.detail;
		page_nb = page;
		console.log("changed really page ", page);
	}
</script>

<main>
<NavBar on:goTo={change_page_nb}/>
<outNavBar>
{#if page_nb == 0}
{#if user}
<SocialMedia uid={user.uid} />
{/if}
{/if}

{#if page_nb == 2}	
	{#if user}
		<Profile {...user} />
		<button on:click={ () => auth.signOut() }>Logout</button>
		<hr>
	{:else}
		<button on:click={login}>
			Signin with Google
		</button>
	{/if}
{/if}
</outNavBar>
</main>

<style>
	section {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	outNavBar {
		position:absolute;
  		overflow:auto;
		padding-left: 10em;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>