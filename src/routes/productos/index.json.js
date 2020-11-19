import { productos } from '../../store/productos'
import {v4 as uuidv4} from 'uuid';

export function get(req, res, next){
  res.end(JSON.stringify(productos))
}

export function post(req, res, next){
  productos.push({...req.body,tipo:'cualquiera', descuento: 0, salient: true, imgs: ['https://res.cloudinary.com/sapper-heroku-test/image/upload/v1605581993/samples/food/dessert.jpg'],id: uuidv4()})
  // {
  //   id: uuidv4(),
  //   nombre: 'Cheescake de Maracuya',
  //   tipo: 'cheescakes',
  //   descripcion: 'Rico cheescake con exquisito sabor a maracuya',
  //   precio: 1800,
  //   descuento: 0,
  //   salient:true,
  //   imgs: [
  //     'https://res.cloudinary.com/sapper-heroku-test/image/upload/v1605582379/sapper/IMG_01_itrkow.jpg'
  //   ]
  // }

  res.end(JSON.stringify(productos))
}