<script>
  import { onMount, tick } from "svelte";

  onMount(() => {
    let frame = 0;
    const img = document.querySelector("img#bg");
    const framelist = [1, 2, 3, 2];
    const changebg = async () => {
      await tick();
      img.src = `/bg${framelist[frame]}.png`;
      setTimeout(changebg, frame === 0 ? 3000 : 80);
      frame === framelist.length - 1 ? (frame = 0) : frame++;
    };
    changebg();
  });
</script>

<svelte:head>
  <link rel="preload" as="image" href="/bg1.png" />
  <link rel="preload" as="image" href="/bg2.png" />
  <link rel="preload" as="image" href="/bg3.png" />
</svelte:head>

<div class="shutter1" />
<main>
  <div class="flex full bgwarp">
    <img id="bg" src="/bg1.png" alt="bg" />
    <div class="blurbar" />
    <h1 class="title">NotRealPaz</h1>
  </div>
  <div class="flex full">
    <div>
      <h1>Passawat Noraman</h1>
      <p>Full-stack developer</p>
      <p class="link">
        <img src="/facebook.svg" alt="facebook icon" />
        <a href="https://www.facebook.com/NotRealPaz" rel="me">NotRealPaz</a>
      </p>
      <p class="link">
        <img src="/twitter.svg" alt="twitter icon" />
        <a href="https://twitter.com/NotRealPaz" rel="me">NotRealPaz</a>
      </p>
      <p class="link">
        <img src="/github.svg" alt="github icon" />
        <a href="https://github.com/NotRealPaz" rel="me">NotRealPaz</a>
      </p>
      {@html "<!--sse-->"}
      <p class="link">
        <img src="/email.svg" alt="github icon" />
        <a href="mailto:hi@notrealpaz.me">hi@notrealpaz.me</a>
      </p>
      {@html "<!--/sse-->"}
    </div>
  </div>
</main>

<style>
  .bgwarp {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100vh;
  }

  img#bg {
    position: absolute;
    width: 150%;
    /* min-height: 100vh; */
    z-index: 1;
    filter: blur(0.25vw) brightness(0.25);
  }

  .blurbar {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0) 70%,
      var(--bg-color) 100%
    );
    z-index: 2;
  }

  main {
    margin: 0 auto;
    max-width: 1024px;
  }

  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .full {
    width: 100%;
    height: 100vh;
  }

  h1.title {
    position: absolute;
    font-size: 10vw;
    font-weight: 200;
    z-index: 3;
  }

  .link img {
    vertical-align: bottom;
    margin-right: 5px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .shutter1 {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    z-index: 10000;
    animation: byeShutter 2s forwards;
  }

  .shutter1:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    width: 0;
    height: 1px;
    animation: shutterOpen 2s forwards;
  }

  @keyframes byeShutter {
    80% {
      opacity: 1;
    }

    to {
      opacity: 0;
      display: none;
      z-index: -1;
    }
  }

  @keyframes shutterOpen {
    0% {
      width: 0;
      height: 2px;
      background-color: rgb(0, 132, 255);
    }

    50% {
      width: 100%;
      height: 5%;
    }

    90% {
      width: 100%;
      height: 100%;
    }

    to {
      width: 100%;
      height: 100%;
      background-color: var(--bg-color);
    }
  }
</style>
