<script>
  import Slidy from 'svelte-slidy';
  let name = 'Slidy';

  const cards = [
    {
      id: 1,
      header: 'What is Slidy?',
      text: 'SLIDY – simple configurable carousel component on SvelteJS',
      src:
        'https://res.cloudinary.com/sapper-heroku-test/image/upload/v1605582379/sapper/IMG_04_ghvyq5.jpg',
    },
    {
      id: 2,
      header: 'What is Slidy?',
      text: 'SLIDY – simple configurable carousel component on SvelteJS',
      src:
        'https://res.cloudinary.com/sapper-heroku-test/image/upload/v1605582379/sapper/IMG_01_itrkow.jpg',
    },
    {
      id: 3,
      header: 'What is Slidy?',
      text: 'SLIDY – simple configurable carousel component on SvelteJS',
      src:
        'https://res.cloudinary.com/sapper-heroku-test/image/upload/v1605582379/sapper/IMG_05_shb5n1.jpg',
    },
    {
      id: 4,
      header: 'What is Slidy?',
      text: 'SLIDY – simple configurable carousel component on SvelteJS',
      src:
        'https://res.cloudinary.com/sapper-heroku-test/image/upload/v1605582381/sapper/IMG_06_tvcq7w.jpg',
    },
    {
      id: 5,
      header: 'What is Slidy?',
      text: 'SLIDY – simple configurable carousel component on SvelteJS',
      src:
        'https://res.cloudinary.com/sapper-heroku-test/image/upload/v1605582382/sapper/IMG_11_wkxmzx.jpg',
    },
    {
      id: 6,
      header: 'What is Slidy?',
      text: 'SLIDY – simple configurable carousel component on SvelteJS',
      src:
        'https://res.cloudinary.com/sapper-heroku-test/image/upload/v1605582382/sapper/IMG_03_ue3lj4.jpg',
    },
    {
      id: 7,
      header: 'What is Slidy?',
      text: 'SLIDY – simple configurable carousel component on SvelteJS',
      src:
        'https://res.cloudinary.com/sapper-heroku-test/image/upload/v1605582388/sapper/IMG_02_ro1jcf.jpg',
    },
    {
      id: 8,
      header: 'What is Slidy?',
      text: 'SLIDY – simple configurable carousel component on SvelteJS',
      src:
        'https://res.cloudinary.com/sapper-heroku-test/image/upload/v1605582385/sapper/IMG_09_ist2ky.jpg',
    },
    {
      id: 9,
      header: 'What is Slidy?',
      text: 'SLIDY – simple configurable carousel component on SvelteJS',
      src:
        'https://res.cloudinary.com/sapper-heroku-test/image/upload/v1605582382/sapper/IMG_07_krygar.jpg',
    },
  ];

  const slidy_cards = {
    slides: cards,
    wrap: {
      id: 'slidy_cards',
      width: '100%',
      height: '50vh',
      padding: '0',
    },
    slide: {
      gap: 50,
      width: 'auto',
      height: '100%',
      backimg: false,
      imgsrckey: 'src',
    },
    controls: {
      dots: true,
      dotsnum: false,
      dotsarrow: false,
      dotspure: true,
      arrows: false,
      keys: false,
      drag: true,
      wheel: false,
    },
    duration: 350,
  };
</script>

<style>
  @media screen and (min-width: 500px) {
    :global(#slidy_cards .slidy-ul li) {
      width: 70%;
    }
  }
  @media screen and (min-width: 600px) {
    :global(#slidy_cards .slidy-ul li) {
      width: 50%;
    }
  }
  @media screen and (min-width: 700px) {
    :global(#slidy_cards .slidy-ul li) {
      width: 33%;
    }
  }
  :global(#slidy_cards .slidy-ul li img) {
    transform: scale(1);
    transition: transform 350ms, box-shadow 350ms;
  }
  :global(#slidy_cards .slidy-ul li.active img) {
    transform: scale(1.15);
    box-shadow: 0 14px 25px rgba(0, 0, 0, 0.36);
  }
  .slide {
    position: relative;
    display: flex;
    flex-flow: column;
    text-align: center;
    align-content: center;
    justify-content: center;
    height: 100%;
    border-radius: 1rem;
  }
  :global(.active .slide) {
    border: 1px solid theme('colors.primary.300');
    background-color: theme('opacity.25');
  }

  .slide img {
    max-height: 250px;
    width: auto;
    height: 250px;
    box-sizing: border-box;
    vertical-align: middle;
    object-fit: cover;
    position: relative;
    z-index: 1;
    border-radius: 1rem;
    box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);
  }
  .slide article {
    padding-top: 2em;
  }
  h1 {
    text-align: center;
    padding-top: 1em;
    padding-bottom: 1em;
  }
</style>

<h1 class="text-3xl text-primary-700 uppercase font-light">destacados</h1>

<Slidy {...slidy_cards} let:item>
  <div class="slide">
    <img alt={item.header} src={item.src} />
    <article>
      <h2>{item.header}</h2>
      <p>{item.text}</p>
    </article>
  </div>
</Slidy>
