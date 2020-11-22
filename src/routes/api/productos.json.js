// import {productos} from '../../store/productos'
import { db } from '../../firestore'
// let productosarr = [] 

// const getData = async () => {
//   const response = await db.collection('productos').get();
//     // console.log(response);
//     response.forEach((doc) => {
//       const obj = doc.data()
//       productosarr = [...productosarr, {...obj}];
//     });
// }

// getData()

// async function saveData() {
//   const productosCollection = await db.collection('productos')
//   productos.forEach(async (item) => {
//     productosCollection.doc(item.id).set(item);
//   })
// }

export async function get(req, res, next){
  let productosarr = []
  const response = await db.collection('productos').get();
    // console.log(response);
    response.forEach((doc) => {
      const obj = doc.data()
      productosarr = [...productosarr, {...obj}];
    });
  
  
  res.json(productosarr)
  // res.json({hello:"world"})
}