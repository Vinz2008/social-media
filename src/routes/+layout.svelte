<script lang="ts">
    import { FirebaseApp } from 'sveltefire';
    import { initializeApp } from 'firebase/app';
    import { getFirestore } from 'firebase/firestore';
    import { getAuth } from 'firebase/auth';
    import Nav from '$lib/Nav.svelte';

    // Initialize Firebase
    var firebaseConfig = {
        apiKey: "AIzaSyAFu63vmZEeN7UQR_4idAzmLG_MxpHSlB8",
        authDomain: "social-media-af20b.firebaseapp.com",
        projectId: "social-media-af20b",
        storageBucket: "social-media-af20b.appspot.com",
        messagingSenderId: "940777685406",
        appId: "1:940777685406:web:3fd4999e0f04a75b28568f"
    };
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);
    const auth = getAuth(app);
</script>

<FirebaseApp {auth} {firestore} >
    <Nav></Nav>
    <slot />
</FirebaseApp>