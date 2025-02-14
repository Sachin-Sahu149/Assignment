import { AlignJustify, ArrowDownWideNarrow } from "lucide-react";
import { useStyleState } from "../stateStore/useStyleState";



export function Navbar() {


  const { isClickedAINotes, setisClickedAINotes } = useStyleState();

  console.log("isClickedAINotes : ", isClickedAINotes);


  return (
    <div className='h-16 sm:h-20 w-full fixed top-4 z-50 bg-gray-700'>
      <div className='w-full h-full flex justify-between items-center px-2 py-2 sm:px-2 '>

        <div className='flex justify-start items-center max-lg:w-auto sm:px-7 w-80 bg-slate-300'>

          <AlignJustify onClick={() => setisClickedAINotes(!isClickedAINotes)} className='cursor-pointer active:bg-slate-200 transition-all duration-700 ease-in-out ' size={25} color="#000000" strokeWidth={3} absoluteStrokeWidth />
          <div className='ml-2'>
            <span onClick={() => setisClickedAINotes(!isClickedAINotes)} className=' text-lg  xs:text-xl md:text-2xl cursor-pointer '>University</span>
          </div>
        </div>
        <div className='w-full max-xs:hidden h-full flex-1 flex sm:justify-between justify-end ml-2 px-2 xl:pr-12  items-center bg-green-500'>
          <div className='flex justify-start  max-sm:flex-1 pl-4 xl:pl-28 bg-gray-400 z-40'>

            {/* <ArrowDownWideNarrow className='cursor-pointer' size={30} color="#ffffff" strokeWidth={2.5} absoluteStrokeWidth /> */}
            <p className=" text-xl sm:text-3xl font-bold  ">Delhi University</p>
          </div>
        </div>

      </div>
    </div>
  )
}

