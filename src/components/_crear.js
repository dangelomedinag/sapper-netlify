import { db } from '../../firestore'
import cloudinary from '../../../cloudinary'
import upload from '../../../multer'


export const post = [upload.single("image"), async (req, res, next) => {
  
  const {nombre, descripcion, precio, descuento, salient, categoria, new_categ, name_new_categ, image} = req.body

  // console.log(image)
  
  let create = {
    nombre,
    descripcion,
    precio,
    descuento,
    salient,
    categoria,
    new_categ,
    name_new_categ,
    image
  }
  res.json(create)

  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(result)
    res.json(result)

  } catch (err) {
    console.log(err);
  }


  // let documentRef = db.doc(`productos/${id}`)
  
  // documentRef.update(update).then(response => {
  //   console.log(response, `Document updated at ${response._writeTime._seconds}`);
  //   res.status(200).json({id, updated_at: response._writeTime._seconds}).end()
  // }).catch(err=>{
  //   console.log(err)
  //   res.status(301).end(JSON.stringify({message: "no se pudo actualizar el documento", err}))
  // })

}]