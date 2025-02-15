import { create } from "zustand";

export const useStyleState = create((set,get)=>({

    menu:false,
    setMenu:(()=>(set({menu:!get().menu})))

}))