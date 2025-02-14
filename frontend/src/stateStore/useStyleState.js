import { create } from "zustand";

export const useStyleState = create((set,get)=>({

    isClickedAINotes:false,
    setisClickedAINotes:(()=>(set({isClickedAINotes:!get().isClickedAINotes})))

}))