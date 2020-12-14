import { writable } from "svelte/store";


function State(){
  const { subscribe, set, update } = writable([])

  return {
    subscribe,
    set: (data) => {
      set(data)
    },
    log: () => console.log('log function')
  }
}


const Store = State()

export default Store;