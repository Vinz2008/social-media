<script>
	import SocialMedia from './SocialMedia.svelte';
	import Profile from './Profile.svelte';
	import NavBar from './NavBar.svelte';
	import { auth, googleProvider } from './firebase';
	import { authState } from 'rxfire/auth';
	let user;
	const unsubscribe = authState(auth).subscribe(u => user = u);
	function login() {
        auth.signInWithPopup(googleProvider);
    }
</script>

<section>
	<NavBar/>
	<main2>
	{#if user}
		<Profile {...user} />
		<button on:click={ () => auth.signOut() }>Logout</button>
		<hr>
		<SocialMedia uid={user.uid} />
	{:else}
		<button on:click={login}>
			Signin with Google
		</button>
	{/if}
	</main2>
</section>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	main2 {
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