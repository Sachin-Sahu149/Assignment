import { AlignJustify, ArrowDownWideNarrow } from "lucide-react";
import { useStyleState } from "../stateStore/useStyleState";



export function Navbar() {


  const { menu, setMenu } = useStyleState();

  console.log("menu : ", menu);


  return (
    <div className='h-16 sm:h-20 w-full fixed top-0 z-50 bg-slate-400'>
      <div className='w-full h-full flex justify-between items-center px-2 py-2 sm:px-2 '>

        <div className='flex justify-start items-center max-lg:w-auto sm:px-7 w-80 '>

          <AlignJustify onClick={() => setMenu(!menu)} className='cursor-pointer active:bg-slate-200 transition-all duration-700 ease-in-out ' size={25} color="#000000" strokeWidth={3} absoluteStrokeWidth />
          <div className='ml-2'>
            <span onClick={() => setMenu(!menu)} className=' text-lg  xs:text-2xl md:text-3xl cursor-pointer '>University</span>
          </div>
        </div>
        <div className='w-full max-xs:hidden h-full flex-1 flex sm:justify-between justify-end ml-2 px-2 xl:pr-12  items-center '>
          <div className='flex justify-start  max-sm:flex-1 pl-4 xl:pl-28 z-40'>

            {/* <ArrowDownWideNarrow className='cursor-pointer' size={30} color="#ffffff" strokeWidth={2.5} absoluteStrokeWidth /> */}
            <p className=" text-xl sm:text-3xl font-bold  ">Delhi University</p>
          </div>
        </div>

      </div>
    </div>
  )
}

