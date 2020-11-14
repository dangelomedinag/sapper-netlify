import {productos} from './_data.js';

export function get(req,res,next) {
  const {id} = req.params;

  const producto = productos.find(p => p.id.toString() === id);

  res.setHeader("Content-Type", "applications/json");
  res.end(JSON.stringify(producto))
}