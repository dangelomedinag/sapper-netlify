import { db } from '../firestore'

export async function post(req, res, next){
  const {id, nombre, descripcion, precio, descuento, salient, categoria_id} = req.body
  
  let update = {
    nombre,
    descripcion,
    precio, 
    descuento, 
    salient,
    categoria_id
  }

  let documentRef = db.doc(`productos/${id}`)
  
  documentRef.update(update).then(response => {
    console.log(response, `Document updated at ${response._writeTime._seconds}`);
    res.status(200).json({id, updated_at: response._writeTime._seconds}).end()
  }).catch(err=>{
    console.log(err)
    res.status(301).end(JSON.stringify({message: "no se pudo actualizar el documento", err}))
  })

}