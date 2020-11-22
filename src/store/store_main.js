import { writable } from 'svelte/store';
// import { db } from '../firestore';



function local_store() {

	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		update: (id, new_obj) => update(curr => {
      const index = curr.findIndex(i => i.id === id);
      curr[index] = new_obj
    }),
		add: (new_obj) => update(curr => {
      curr = [...curr, new_obj]
    }),
		reset: (obj) => set(obj)
	};
}

export const mainStore = local_store();