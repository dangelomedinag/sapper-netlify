const {Router} = require('express')
import {db} from '../src/firestore'
import {v4 as uuidv4} from 'uuid';
const cloudinary = require('cloudinary').v2;
const router = Router();
const multer = require("multer");
const path = require("path");


// Cloudinary config
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_cloud_name, 
  api_key: process.env.CLOUDINARY_api_key, 
  api_secret: process.env.CLOUDINARY_api_secret
});

// Multer config
const upload = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);  
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});



router.post('/crear', upload.array("image", 6), async (req, res, next)=>{

  const {nombre, descripcion, precio, descuento, salient, categoria, new_categ, name_new_categ} = req.body
		
		let new_unique_id = uuidv4()
		let extracted = categoria.split(',')


		let create = {
			id: new_unique_id,
			nombre,
			descripcion,
			precio,
			descuento,
			salient: salient === "on" ? true : false,
			categoria_id: extracted[1],
			tipo: extracted[0],
      imgs: [],
      cloudinary: []
		}
		
		// Upload image to cloudinary
		const uploader = async (path) => await cloudinary.uploader.upload(path,
				{folder: 'sapper'}
			)

		const urls = []

		const files = req.files

		for (const file of files) {
			const {path} = file;
			const newPath = await uploader(path);
			urls.push(newPath);
			create.cloudinary.push(newPath)
		}

		let arrImgs = urls.map(item => item.secure_url)
		create.imgs = arrImgs

		let newProductRef = db.collection('productos').doc(new_unique_id);
		let product = await newProductRef.set(create);
		console.log(product)

		res.status(200).json({
			message: "Image cargadas correctamente",
			data: urls
		})
})

router.put('/editar', async(req, res, next) => {
  const {id, nombre, descripcion, precio, descuento, salient, categoria_id} = req.body;
  
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
})

router.delete('/eliminar', async(req, res,next) => {
  const {id, imgs} = req.body;
  let report = []
  const uploader = async (public_id) => await cloudinary.uploader.destroy(public_id, function(error, result) {console.log(result)})

  let documentRef = db.collection('productos').doc(id).delete()

  for (const img of imgs) {
    let {public_id} = img
    const deleteDoc = await uploader(public_id);
    report.push(deleteDoc);
  }

  res.status(200).json({id, report, doc: documentRef}).end()
  
})

router.post('/comentarios', async(req, res, next) => {
  let new_unique_id = uuidv4()
  const comentario = {
    ...req.body,
    id: new_unique_id,
    fecha_creacion: new Date().toLocaleString()
  }
  try {
    let newProductRef = db.collection('comentarios').doc(new_unique_id);
    let product = await newProductRef.set(comentario);
    
    res.status(200).end(JSON.stringify(product))   
  } catch (error) {
    res.status(301).end(JSON.stringify({message: "por alguna razon no se pudo actualizar la base de datos", error}))
  }
})
export default router