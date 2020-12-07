import { db } from '../../firestore'


export async function get(req, res, next){
  let productosarr = []
  const response = await db.collection('productos').get();
    response.forEach((doc) => {
      const obj = doc.data()
      productosarr = [...productosarr, {...obj}];
    });
  
  
  res.json(productosarr)
}