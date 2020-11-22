import { db } from '../../firestore'

export async function get(req, res, next){
  let categoriasarr = [] 
  const response = await db.collection('categorias').get();
  response.forEach((doc) => {
    const obj = doc.data()
    categoriasarr = [...categoriasarr, {...obj}];
  });
  
  res.json(categoriasarr)
}