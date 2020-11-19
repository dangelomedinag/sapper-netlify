import { v4 as uuidv4 } from 'uuid';

const productos = [
  {
    id: uuidv4(),
    nombre: 'Cheescake de Maracuya',
    tipo: 'cheescakes',
    descripcion: 'Rico cheescake con exquisito sabor a maracuya',
    precio: 1800,
    descuento: 0,
    salient:true,
    imgs: [
      'https://res.cloudinary.com/sapper-heroku-test/image/upload/v1605582379/sapper/IMG_01_itrkow.jpg'
    ]
  },
  {
    id: uuidv4(),
    nombre: 'Cheescake de Chocolate',
    tipo: 'cheescakes',
    descripcion: 'Rico cheescake con exquisito sabor a Chocolate',
    precio: 1800,
    descuento: 0,
    salient:true,
    imgs: [
      'https://res.cloudinary.com/sapper-heroku-test/image/upload/v1605582379/sapper/IMG_04_ghvyq5.jpg'
    ]
  },
  {
    id: uuidv4(),
    nombre: 'Cheescake de Limón',
    tipo: 'cheescakes',
    descripcion: 'Rico cheescake con exquisito sabor a Limón',
    precio: 1800,
    descuento: 0,
    salient:false,
    imgs: [
      'https://res.cloudinary.com/sapper-heroku-test/image/upload/v1605582379/sapper/IMG_05_shb5n1.jpg'
    ]
  },
  {
    id: uuidv4(),
    nombre: 'Cheescake de Majar con Nueces',
    tipo: 'cheescakes',
    descripcion: 'Rico cheescake con exquisito sabor a Manjar y trozitos de Nueces.',
    precio: 1800,
    descuento: 0,
    salient:true,
    imgs: [
      'https://res.cloudinary.com/sapper-heroku-test/image/upload/v1605582381/sapper/IMG_06_tvcq7w.jpg'
    ]
  },
  {
    id: uuidv4(),
    nombre: 'Quesillo venezolano',
    tipo: 'quesillos',
    descripcion: 'quesillo venezolano es un postre típico del país caribeño (y Canarias). Además es muy similar al clásico flan de huevo.',
    precio: 1000,
    descuento: 0,
    salient:true,
    imgs: [
      'https://res.cloudinary.com/sapper-heroku-test/image/upload/v1605582382/sapper/IMG_11_wkxmzx.jpg',
      'https://res.cloudinary.com/sapper-heroku-test/image/upload/v1605582383/sapper/IMG_10_th8uwj.jpg',
      'https://res.cloudinary.com/sapper-heroku-test/image/upload/v1605582385/sapper/IMG_09_ist2ky.jpg',
      'https://res.cloudinary.com/sapper-heroku-test/image/upload/v1605582382/sapper/IMG_07_krygar.jpg',
      'https://res.cloudinary.com/sapper-heroku-test/image/upload/v1605582381/sapper/IMG_08_iiqvta.jpg',
    ]
  },
  {
    id: uuidv4(),
    nombre: 'Ponche crema Venezolano',
    tipo: 'bebidas',
    descripcion: 'El ponche crema venezolano cuenta con más de un siglo de tradición. En la actualidad',
    precio: 8500,
    descuento: 0,
    salient:false,
    imgs: []
  },
]

const categorias = [
  {
    nombre: 'cheescakes',
    titulo: 'Distintos sabores, uno especial para ti',
    descripcion: 'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.'
  },
  {
    nombre: 'quesillos',
    titulo: 'Tradicional quesillo venezolano',
    descripcion: 'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.'
  },
  {
    nombre: 'bebidas',
    titulo: 'Ponche crema venezolano',
    descripcion: 'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.'
  }
]

export {productos, categorias}