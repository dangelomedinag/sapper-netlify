<script>
  // import { config } from '../store/slidyImages';

  import Slidy from 'svelte-slidy';

  const cards = config;

  /* 
  const cards = [
    {
      id: 1,
      header: 'Cheescake de Maracuya',
      text: 'Rico cheescake con exquisito sabor a maracuya',
      src:
        'https://res.cloudinary.com/sapper-heroku-test/image/upload/w_500,h_500,c_fill/v1605582379/sapper/IMG_04_ghvyq5.jpg' ,
    },
    {
      id: 2,
      header: 'What is Slidy?',
      text: 'SLIDY – simple configurable carousel component on SvelteJS',
      src:
        'https://res.cloudinary.com/sapper-heroku-test/image/upload/w_500,h_500,c_fill/v1605582379/sapper/IMG_01_itrkow.jpg',
    },
    {
      id: 3,
      header: 'What is Slidy?',
      text: 'SLIDY – simple configurable carousel component on SvelteJS',
      src:
        'https://res.cloudinary.com/sapper-heroku-test/image/upload/w_500,h_500,c_fill/v1605582379/sapper/IMG_05_shb5n1.jpg',
    },
    {
      id: 4,
      header: 'What is Slidy?',
      text: 'SLIDY – simple configurable carousel component on SvelteJS',
      src:
        'https://res.cloudinary.com/sapper-heroku-test/image/upload/w_500,h_500,c_fill/v1605582381/sapper/IMG_06_tvcq7w.jpg',
    },
    {
      id: 5,
      header: 'What is Slidy?',
      text: 'SLIDY – simple configurable carousel component on SvelteJS',
      src:
        'https://res.cloudinary.com/sapper-heroku-test/image/upload/w_500,h_500,c_fill/v1605582382/sapper/IMG_11_wkxmzx.jpg',
    },
    {
      id: 6,
      header: 'What is Slidy?',
      text: 'SLIDY – simple configurable carousel component on SvelteJS',
      src:
        'https://res.cloudinary.com/sapper-heroku-test/image/upload/w_500,h_500,c_fill/v1605582382/sapper/IMG_03_ue3lj4.jpg',
    },
    {
      id: 7,
      header: 'What is Slidy?',
      text: 'SLIDY – simple configurable carousel component on SvelteJS',
      src:
        'https://res.cloudinary.com/sapper-heroku-test/image/upload/w_500,h_500,c_fill/v1605582388/sapper/IMG_02_ro1jcf.jpg',
    },
    {
      id: 8,
      header: 'What is Slidy?',
      text: 'SLIDY – simple configurable carousel component on SvelteJS',
      src:
        'https://res.cloudinary.com/sapper-heroku-test/image/upload/w_500,h_500,c_fill/v1605582385/sapper/IMG_09_ist2ky.jpg',
    },
    {
      id: 9,
      header: 'What is Slidy?',
      text: 'SLIDY – simple configurable carousel component on SvelteJS',
      src:
        'https://res.cloudinary.com/sapper-heroku-test/image/upload/w_500,h_500,c_fill/v1605582382/sapper/IMG_07_krygar.jpg',
    },
  ]; */

  const slidy_cards = {
    slides: cards,
    wrap: {
      id: 'slidy_default', // customize this instance Slidy by #id
      width: '100%',
      height: '50vh',
      padding: '0px 50px 0px 50px',
    },
    slide: {
      gap: 5,
      class: '', // classname for styling slide
      width: 'auto',
      height: '100%',
      backimg: false, // if true image on background slidewrap & slot for content empty
      imgsrckey: 'src', // prop for ypurs image src key
    },
    controls: {
      dots: false,
      dotsnum: false,
      dotsarrow: false,
      dotspure: false, // dotnav like realy dots :)
      arrows: true,
      keys: false, // nav by arrow keys
      drag: true, // nav by mousedrag
      wheel: false, // nav by mousewheel (shift + wheel) or swipe on touch/trackpads
    },
    duration: 250, // duration slides animation
    axis: 'x', // new in 2.2.0 axis direction
    loader: {
      // new in 2.0 settings for preloader spinner
      color: 'red',
      size: 75,
      speed: 600,
      thickness: 1,
    },
  };
</script>

<style>
  @media screen and (min-width: 640px) {
    :global(#slidy_default .slidy-ul li) {
      max-width: 85%;
    }
  }
  @media screen and (min-width: 768px) {
    :global(#slidy_default .slidy-ul li) {
      max-width: 70%;
    }
  }
  @media screen and (min-width: 1024px) {
    :global(#slidy_default .slidy-ul li) {
      max-width: 60%;
    }
  }
  @media screen and (min-width: 1280px) {
    :global(#slidy_default .slidy-ul li) {
      /* max-width: 33%; */
      max-width: 33%;
    }
  }
  :global(#slidy_default .slidy-ul li img) {
    /* transform: scale(1); */
    /* transition: transform 350ms, box-shadow 350ms; */
  }
  :global(#slidy_default .slidy-ul li.active img) {
    /* transform: scale(1.15); */
    /* box-shadow: 0 14px 25px rgba(0, 0, 0, 0.36); */
  }
  :global(#slidy_default .slidy button, #slidy_default .slidy button) {
    /* transform: scale(1.15); */
    /* box-shadow: 0 14px 25px rgba(0, 0, 0, 0.36); */
    display: none;
  }

  .slide {
    position: relative;
    display: flex;
    flex-flow: column;
    text-align: center;
    align-content: center;
    justify-content: space-around;
    min-height: 100%;
    height: 100%;
    width: 100%;
  }

  .slide img {
    max-height: 100%;
    width: auto;
    height: 70%;
    box-sizing: border-box;
    vertical-align: middle;
    object-fit: cover;
    position: relative;
    z-index: 1;
    box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);
  }

  :global(.active .slide) {
    /* border: 1px solid theme('colors.gray.300'); */
    /* background-color: theme('colors.gray.300'); */
  }

  /* .slide article {
    padding: 1em;
  } */

  /* .slide {
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
  }*/
  h1 {
    text-align: center;
    padding-top: 1em;
    /* padding-bottom: 1em; */
  }
</style>

<div class="flex flex-col items-center justify-center mx-auto bg-gray-100">
  <h1
    class="text-center py-2 text-2xl text-primary-700 uppercase font-light tracking-wider">
    destacado
  </h1>
  <div class="w-full">
    <Slidy {...slidy_cards} let:item>
      <div class="slide">
        <img alt={item.header} src={item.src} />
        <article class="px-8">
          <h2 class="text-primary-700">{item.header}</h2>
          <p class="text-gray-500 truncate">{item.text}</p>
        </article>
      </div>
    </Slidy>
  </div>
</div>
