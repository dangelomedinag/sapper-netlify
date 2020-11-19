import { productos } from '../../store/productos'
import {v4 as uuidv4} from 'uuid';

export function get(req, res, next){
  res.end(JSON.stringify(productos))
}

export function post(req, res, next){
  productos.push({...req.body, id: uuidv4()})

  res.end(JSON.stringify(productos))
}