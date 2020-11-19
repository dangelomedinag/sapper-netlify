// import {productos} from './_data.js';
import {productos} from '../../store/productos';

export function get(req,res,next) {
  const {id} = req.params;

  const producto = productos.find(p => p.id.toString() === id);

  if (producto) {
    res.setHeader("Content-Type", "applications/json");
    res.end(JSON.stringify(producto));
  }else {
    res.statusCode = 404;
    res.end(JSON.stringify({error: "El producto que seleccionaste ya no está disponible"}))
  }
}