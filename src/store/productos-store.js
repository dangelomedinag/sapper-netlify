import { writable } from 'svelte/store';


function getProductosStore() {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		get: async() => {
      
      const getProductos = await fetch('api/productos.json');
      let productos = await getProductos.json();
      set(productos)
    }
	};
}

function getCategoriasStore() {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		get: async() => {
      
      const getCategorias = await fetch('api/categorias.json');
      let categorias = await getCategorias.json();

      set(categorias)
    }
	};
}

const prodStore = getProductosStore()
const categStore = getCategoriasStore()

export {prodStore, categStore}