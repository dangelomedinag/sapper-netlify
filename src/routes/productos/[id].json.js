import { db } from '../../firestore'

export async function get(req, res, next){
  const {id} = req.params;

  let producto = []

  let prodctsRef = db.collection('productos');
  let query = prodctsRef.where('id', '==', id).get()
    .then(snapshot => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        res.statusCode = 404;
        res.end(JSON.stringify({error: "El producto que seleccionaste ya no está disponible"}))
        return;
      }

      snapshot.forEach(doc => {
        // console.log(doc.id, '=>', doc.data());
        producto = doc.data()
      });
      res.setHeader("Content-Type", "applications/json");
      res.end(JSON.stringify(producto));
    })
    .catch(err => {
      console.log('Error getting documents', err);
      res.statusCode = 301;
      res.end()
    });
}
