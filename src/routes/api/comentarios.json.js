import { db } from '../../firestore'


export async function get(req, res, next){
  let comentariosarr = []
  
  const response = await db.collection('comentarios').get();
    response.forEach((doc) => {
      const obj = doc.data()
      comentariosarr = [...comentariosarr, {...obj}];
    });
  
  
  res.json(comentariosarr)
}