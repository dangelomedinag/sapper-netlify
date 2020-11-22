<script>
  import { config } from '../store/slidyImages';
  import { mainStore } from '../store/store_main';
  import Header from '../components/Header.svelte';
  // import Slidy from '../components/Slidy.svelte';
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

<svelte:head>
  <title>conSweet - Inicio</title>
</svelte:head>

<Header>
  Antojo de algo rico?
  <span slot="sub">Estas en el lugar indicado</span>
  <!-- <a href="." slot="btn">xxxxx</a> -->
</Header>

<!-- < Slidy > -->

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

<!-- < Slidy > -->
<hr />
{#each $mainStore as item}
  <p>{item.nombre}</p>
{/each}
<p class="mt-3">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui omnis quo quam
  rem possimus accusamus fugit nobis id tempora, repellat ut odio praesentium
  quae ex eum. Reprehenderit laborum hic illo! Officiis ipsum aliquid fugiat
  ipsa consectetur quis provident ducimus quisquam cupiditate. Voluptatum,
  tenetur fugiat sunt facere excepturi dolores sit, aut optio iusto, obcaecati
  quia ad dolorem eius tempore quas adipisci. Laborum, culpa! Voluptatibus
  tempora quos suscipit libero deserunt architecto voluptate? Odio cumque porro
  eaque possimus laborum? Delectus adipisci corrupti quo itaque. Culpa et esse
  voluptatum sapiente perferendis, error ab adipisci! Eligendi aspernatur
  laudantium praesentium nulla eveniet asperiores quod et voluptatum labore
  obcaecati veritatis dolor, in est nihil magni doloremque deleniti consequatur
  adipisci dignissimos assumenda numquam eius! Amet veniam ullam magni. Cum
  deleniti eligendi magni repellat quas officiis tempora illum, non vel, et eum
  eos doloremque id. Voluptatum molestiae commodi non beatae quia quas, dolore
  deleniti praesentium eaque. Facere, rerum nostrum. Voluptatibus, dolore sunt!
  Aspernatur itaque, fugiat eveniet vitae iure cupiditate magnam inventore
  voluptatibus ullam in hic minima doloremque aliquid, neque voluptas,
  architecto excepturi nam fugit impedit quod! Laborum, repellendus expedita!
  Hic ipsum dolorem nihil perspiciatis similique, cum expedita assumenda tempora
  illo asperiores impedit ab eius nulla? Maiores ad, maxime, possimus voluptate
  tempora in odio, deleniti odit aspernatur eaque ipsa voluptatum. Iste
  architecto sequi corporis nulla fugiat quia libero dignissimos ex ea deleniti
  nam omnis maiores culpa id quis minus assumenda incidunt perspiciatis
  laboriosam modi eaque, voluptates repudiandae, ullam illo? Error. Maiores
  voluptatem distinctio culpa reiciendis iure recusandae. Suscipit magni
  corrupti eligendi amet expedita reiciendis aperiam, est consectetur
  accusantium, illo voluptate eveniet facere? Deserunt officia debitis commodi
  eligendi nam. Perspiciatis, minima. Reiciendis molestias, impedit deserunt
  velit architecto deleniti, nam itaque dolore, consequatur necessitatibus iure
  distinctio sit provident! Praesentium beatae ipsam ipsum molestiae,
  perferendis porro optio odit. Dignissimos, minus! Iure, dignissimos et.
  Delectus assumenda deleniti fugiat earum necessitatibus? Illum quo eius hic
  eos, facilis maiores optio dolor amet sit nostrum voluptas corporis ad
  suscipit tenetur exercitationem debitis? Nemo facilis voluptatum
  exercitationem iusto. Atque officia eligendi esse eum totam, veniam magnam
  eius rem, blanditiis nobis quibusdam deleniti nemo possimus delectus
  exercitationem impedit minima mollitia quod cupiditate odio! Accusantium, aut
  ea. Dolor, at voluptatem. Unde eius minus itaque ducimus natus maxime ratione
  possimus ipsum cupiditate incidunt dolores nihil tempora non totam fugit
  praesentium soluta labore vitae, esse quam accusamus sapiente sequi, ut
  necessitatibus! At. Voluptas similique quo saepe, provident, quidem adipisci
  error vero ratione, ut minus aliquid placeat neque? Pariatur ipsa optio illo,
  iste cum libero necessitatibus nemo nisi sequi, ipsum accusantium consequatur
  fugit. Nemo ab aut quidem in doloremque consectetur dolorem atque accusantium
  dolorum vel, error, rerum, fugit dicta! Illum itaque, suscipit ab nemo
  expedita debitis quam provident eaque ipsa, doloribus labore tenetur. Fugiat
  dolorem et dolores. Harum similique soluta voluptas eum, labore nemo adipisci
  veritatis quaerat fuga hic, illum alias nisi, eos velit iure. Minima assumenda
  blanditiis eos fuga voluptates, ab alias. Quisquam, veniam? Aspernatur optio
  commodi quo quae cum atque, delectus odit libero expedita voluptas
  reprehenderit, debitis aperiam eos eius doloremque ex inventore ipsa totam
  impedit ducimus accusamus facere? Neque, expedita. Repellendus quisquam porro
  libero omnis voluptatibus eos harum ipsum iusto nihil ab architecto, alias
  labore. Iusto hic possimus necessitatibus. Nesciunt doloremque laborum quo
  libero recusandae laudantium facilis accusantium consectetur quis! Recusandae,
  eveniet, ullam reiciendis facere dolor architecto exercitationem repellendus
  ab corporis iste fugiat? Voluptas, eligendi voluptatem veritatis quos velit
  sed numquam asperiores quia id sit quasi laboriosam quae totam tempore? Ipsam
  consequatur animi fugit est earum iste ad, reiciendis ratione veritatis
  praesentium neque quasi deserunt nesciunt. Quaerat, repellat dolorem omnis
  accusamus facere non officia, blanditiis corrupti laborum doloribus saepe
  modi! Labore dolores architecto adipisci. Porro at ullam explicabo tempore
  quia, blanditiis perferendis nesciunt maiores enim recusandae culpa quos
  tenetur aliquam cumque voluptas sint ut necessitatibus amet corrupti
  molestias? Accusantium, aperiam! Libero ducimus labore minima, voluptatibus
  enim sint error magni, est totam quia architecto odio minus voluptas culpa
  necessitatibus? Similique hic ullam atque! Iusto fugiat quod totam adipisci
  tempora, harum rem. Recusandae quisquam totam, accusantium sint harum, placeat
  delectus nemo praesentium modi molestias doloribus nesciunt tempora culpa vel
  sit provident a soluta voluptate? Ea iste impedit laudantium deserunt dolores
  dignissimos tempora! Praesentium, voluptates? Officia eaque cupiditate quam
  illo amet ut, quibusdam perspiciatis deleniti nostrum nihil animi, maiores
  iure nesciunt praesentium quo voluptates harum. Alias dolores minima
  voluptatibus inventore sed aliquid nemo. Eaque pariatur, id reprehenderit
  ratione similique quasi saepe mollitia officiis sequi. Sint minus aspernatur,
  esse, quis libero est eum sunt distinctio laborum accusantium reprehenderit
  possimus voluptates, dolorum odio. Eveniet, doloremque! Illum id corrupti eum
  libero ipsam tempora ea, deleniti ratione quos. Suscipit vel quos sed.
  Doloremque odio provident corporis nesciunt laudantium laboriosam impedit
  quos. Veniam nisi odio autem animi? Sapiente. Praesentium tempora laboriosam
  necessitatibus qui dignissimos nobis minima. Cumque quas, molestiae tenetur
  porro doloremque ex laudantium odit nulla nisi sint in fugiat voluptas labore
  aliquam eligendi ut quod, earum quae. Hic molestias aut, provident, voluptatem
  cum facilis minus cupiditate reiciendis dicta obcaecati id error blanditiis
  velit nobis, odio expedita? Error sint nesciunt mollitia sed maxime
  consectetur et quam id. Reprehenderit. Sed, officiis iusto explicabo sunt
  velit, nam ullam dolorum cumque, iure reiciendis adipisci porro commodi.
  Assumenda quas dolore quasi architecto, quaerat id magni fuga optio laborum
  hic corrupti enim nihil? Facere, harum voluptatem? A nesciunt culpa beatae,
  veritatis molestiae rem ad dignissimos possimus, soluta ipsam aperiam non ea.
  Rerum aperiam, doloremque iure amet totam quasi dignissimos dolore praesentium
  sunt dolorem. Quisquam nesciunt, repudiandae fuga unde aut non repellat
  doloribus possimus nulla laborum quibusdam animi ad, vitae amet delectus?
  Repudiandae impedit alias ipsam dolorum. Optio deleniti perferendis neque
  veniam, in eius! Illo, ratione similique et error enim doloribus excepturi
  nisi molestiae, repellendus nostrum ad dolores dolorum non architecto rerum
  eum quo recusandae, suscipit quam eaque consectetur fugiat. Repudiandae quae
  culpa obcaecati! Explicabo voluptate pariatur veritatis minus quidem, dolorum
  perspiciatis provident facilis mollitia recusandae rerum ullam reiciendis
  ipsum cupiditate ipsa, consequatur architecto quod consequuntur velit unde
  eveniet eos iste et minima? Magni. Consectetur officia enim dolorum quos
  iusto, autem iure consequuntur ratione accusantium quis sunt blanditiis
  inventore suscipit veniam temporibus pariatur amet ipsa impedit voluptate
  saepe ex corporis odio aut. Amet, saepe? Aspernatur magnam rerum minus vitae
  et ea veritatis architecto? Vitae architecto, quo illum fuga aperiam
  recusandae commodi eius soluta molestias harum atque fugit dolores est labore
  modi, enim distinctio perferendis? Perspiciatis vel ex sunt tempore, numquam
  repellendus veritatis saepe, ullam itaque adipisci enim eaque consequatur non.
  Voluptas in libero sed magnam ipsam natus ipsum eligendi at rem
  exercitationem, voluptates enim. Soluta nihil qui ipsa nam deleniti aperiam
  dolores reprehenderit recusandae, sunt, error aliquid eveniet quibusdam
  accusantium quasi veritatis odit autem mollitia sapiente impedit blanditiis
  natus quis accusamus! Dolorem, reiciendis minima. Similique pariatur iste,
  iure laboriosam dolorem ullam quaerat! Porro corrupti tempore dolorem,
  perferendis ipsa delectus officia hic nisi maiores atque voluptatum totam
  perspiciatis, facere, pariatur debitis veniam ducimus laborum? Adipisci. Autem
  nesciunt alias ducimus harum praesentium mollitia. Porro saepe quis unde
  adipisci possimus animi impedit eaque molestiae eius debitis perspiciatis
  minima neque consequuntur aperiam doloribus, molestias repudiandae accusamus,
  reiciendis repellat. Deserunt similique laborum nemo. Sunt ut qui quo
  dignissimos est unde, aperiam debitis excepturi enim obcaecati veritatis
  consequuntur facilis, voluptatem quidem nihil esse fugiat distinctio, deleniti
  iusto ducimus temporibus totam.
</p>
