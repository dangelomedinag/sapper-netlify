import { writable } from 'svelte/store';
import axios from 'axios';



function getProductosStore() {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		get: async() => {
      
      const getProductos = await axios.get('api/productos.json');
      let productos = getProductos.data;
      set(productos)
    }
	};
}

function getCategoriasStore() {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		get: async() => {
      
      const getCategorias = await axios.get('api/categorias.json');
      let categorias = getCategorias.data;

      set(categorias)
    }
	};
}

const prodStore = getProductosStore()
const categStore = getCategoriasStore()

export {prodStore, categStore}