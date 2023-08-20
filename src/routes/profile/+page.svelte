<script>
    import { SignedIn, SignedOut } from 'sveltefire';
    import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
</script>

<SignedIn let:user>
    <p>Hello {user.uid}</p>
    <p>{user.email}</p>
    <p>{user.displayName}</p>
    <img src={user.photoURL} alt="profile">
</SignedIn>


<SignedOut let:auth>
    <button on:click={() => signInWithPopup(auth, new GoogleAuthProvider())}>Sign in</button>
</SignedOut>
