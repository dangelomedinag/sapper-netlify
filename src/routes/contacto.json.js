import {v4 as uuidv4} from 'uuid';

const commentarios = []

export function get(req, res, next){
  res.end(JSON.stringify(commentarios))
}
export function post(req, res, next){
  commentarios.push({...req.body, id: uuidv4()})
  res.end(JSON.stringify(commentarios))
}