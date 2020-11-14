import {LoremIpsum} from 'lorem-ipsum';
import {v4 as uuidv4} from 'uuid';


const lorem = new LoremIpsum();

export let productos = [
  {
    id: uuidv4(), precio: 1800, titulo: "cheescake de maracuya", desc: lorem.generateParagraphs(3)
  },
  {
    id: uuidv4(), precio: 1000, titulo: "Quesillo venezolano", desc: lorem.generateParagraphs(4)
  },
  {
    id: uuidv4(), precio: 8000, titulo: "Ponche Crema", desc: lorem.generateParagraphs(2)
  },
]