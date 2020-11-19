import {productos} from './productos';
import squareImage from '../utils/urlopt'


let cards = []
productos.filter(prod => prod.salient).forEach((item) => {
  if (item.imgs.length == 0) return

  let obj = {
    id: item.id,
    header: item.nombre,
    text: item.descripcion,
    src: squareImage(item.imgs[0]),
  };
  cards = [...cards, obj];
});

export const config = cards;