<script>
  import { onMount } from "svelte";
  import Soundboard from "./Soundboard.svelte";
  import SoundSearch from "./SoundSearch.svelte";
  export let name; 
  export let imgpath;
  export let imgpath2;

  let searchTerm = "";
  let sounds = [];
  let displayList = [];

  onMount(async () => {
    const res = await fetch(`soundboard.json`);
    sounds = await res.json();
    displayList = sounds.files;
  });

  function filterList(list, query) {
    displayList = sounds.files;
    return displayList.filter(item => {
      return (
        item.name.toLowerCase().match(query.toLowerCase()) ||
        item.artist.toLowerCase().match(query.toLowerCase())
      );
    });
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
  h1 {
    color: rgb(1, 1, 59);
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 100;
    text-align: center;
  }
  img {
    width: 100vw;
    max-width: 500px;
    align-items: center;
    justify-content: center;
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .cheek {
    max-width: 200px;
  }
  .soundboard{
    min-width: 90vw;
  }
</style>

<svelte:head>
  <title>{name}</title>
</svelte:head>
<header>
  <img src={imgpath2} alt="<h1>{name}</h1>"/>
  <img class="cheek" src={imgpath} alt="."/>
</header>
<main>
  <section class="soundboard">
    <Soundboard bind:sounds={displayList} />
  </section>
</main>
