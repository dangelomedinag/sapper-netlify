import {v4 as uuidv4} from 'uuid';

const commentarios = []

export function get(req, res, next){
  res.end(JSON.stringify(commentarios))
}
export function post(req, res, next){
  const currlength = commentarios.length

  commentarios.push({...req.body, id: uuidv4(), fecha_creacion: new Date().toLocaleString()})

  if (currlength == commentarios.length) {
    res.status(301).end(JSON.stringify({message: "por alguna razon no se pudo actualizar la base de datos"}))
  }else{
    res.status(200).end(JSON.stringify(commentarios))
  }
}