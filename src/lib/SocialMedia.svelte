<script>
    import Post from './Post.svelte';
    import { db } from './firebase';
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';

    export let uid;
    const converter = {
    toFirestore(post) {
        return {
            uid : post.uid,
            text: post.text,
            ratio : post.ratio,
            created: post.created
        }
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options)
        return {
            id: snapshot.id,
            text: data.text,
            ratio : data.ratio,
            created: data.created
        }
    },
}

    let text = 'some post';
    const postsRef = db.collection('posts').withConverter(converter);
    const query = postsRef.where('uid', '==', uid).orderBy('created');
    const posts = collectionData(query, 'id').pipe(startWith([]));
    function add() {
        postsRef.add({ uid, text, ratio: 0, created: Date.now() });
        text = '';
    }
    function updateLike(event) {
        const { id, ratio } = event.detail;
        console.log("event.detail", event.detail);
        console.log("id : ", id);
        postsRef.doc(id).update({ ratio: ratio });
    }
    function removeItem(event) {
        const { id } = event.detail;
        console.log("id : ", id);
        postsRef.doc(id).delete();
    }

</script>

<style>
    input { display: block }
</style>


Posts

<ul>
	{#each $posts as post}
        <Post {...post} on:remove={removeItem} on:like_change={updateLike} />
        
	{/each}
</ul>

<input bind:value={text}>

<button on:click={add}>Add Post</button>