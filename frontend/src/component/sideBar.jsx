import {
  Home, Star, ChevronDown, Trash2,
  Bell, Archive, Lightbulb,
  Calendar,
  NotebookText,
  CalendarDays,
  Clock,
  Users, ReceiptIndianRupee,
  LogOutIcon
} from "lucide-react";

import { CustomTooltip } from "./CustomTooltip";
import { useStyleState } from "../stateStore/useStyleState";
import { Link, useNavigate } from "react-router-dom";




function SidebarItem({ label, icon }) {

  const navigate = useNavigate();

  return (
    <div 
    onClick={()=>navigate('/')}
    role="link" tabIndex={0} className="h-16 group/Icon xs:w-16 flex justify-start items-center relative group-hover:w-full lg:w-full  group-hover:rounded-r-full 
        lg:rounded-r-full lg:rounded-l-none xs:hover:bg-[#ffffdf]  xs:group-hover:focus:bg-yellow-200 lg:focus:bg-yellow-200 cursor-pointer  mb-1 transition-all duration-500 ease-in-out">
      <div className="lg:ml-3 p-3 group-focus/Icon:bg-yellow-200 rounded-full max-xs:hidden  max-xs:hover:bg-[#ffffac]">
        {icon}
      </div>
      <CustomTooltip text={label} position="right">
        <div className="lg:ml-3 p-3 relative group-focus/Icon:bg-yellow-200 rounded-full xs:hidden max-xs:hover:bg-[#ffffac] " >
          {icon}
        </div>
      </CustomTooltip>
      <p className=" h-7 w-48 overflow-hidden max-xs:hidden absolute  left-16 opacity-0 lg:translate-x-0 lg:opacity-100 translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-gray-800  text-xl ">
        {label}
      </p>
    </div>
  )
}

export default function Sidebar({ isModalOpen }) {
  // console.log(isModalOpen)

  const { isClickedAINotes } = useStyleState();

  return (
    <div className={` ${false ? 'w-0 -ml-0  ' : ' w-16 xs:max-lg:hover:w-52 lg:w-52 '}  group  pb-4 absolute  top-24 bottom-0 bg-violet-600 left-0 z-10 lg:z-0 transition-all ease-in-out duration-700`}>
      <div className={`h-full flex flex-col border`}>
        <div className=" mb-1 w-full flex-1 border custom-scrollbar py-1  overflow-y-auto overflow-x-hidden">

          <SidebarItem icon={<Home size={25} strokeWidth={1.5} />} label={'Home'} />
          <SidebarItem icon={<CalendarDays size={25} strokeWidth={1.5} />} label={'Calender'} />
          <SidebarItem icon={<NotebookText size={25} strokeWidth={1.5} />} label={'My Course'} />
          <SidebarItem icon={<Clock size={25} strokeWidth={1.5} />} label={'Time Table'} />
          <SidebarItem icon={<Users size={25} strokeWidth={1.5} />} label={'My Faculty'} />
          <SidebarItem icon={<ReceiptIndianRupee size={25} strokeWidth={1.5} />} label={'Fees Details'} />

        </div>

        <div className=" h-16 group/profile flex items-center justify-between overflow-hidden relative xs:max-lg:group-hover:bg-sky-600 lg:bg-rose-400 box-border p-1    my-1  transition-all duration-700 ease-in-out rounded-full">

          <Link to={'/profile'}>
            <div role="button" className="avatar  h-14 flex items-center  cursor-pointer">
              <img src='/avatar/avatar-placeholder.png' className=" w-12 h-12 rounded-full" alt="profile" />
            </div>
          </Link>

          <Link to={'/profile'} className=" h-7 w-48 overflow-hidden max-xs:hidden absolute left-14 opacity-0 lg:translate-x-0 lg:opacity-100 translate-x-full 
            group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 text-white text-lg font-semibold">

            Sachin Sahu...
          </Link>

          <LogOutIcon role="button" className="mr-1 z-30 active:text-gray-800 rounded-full p-0 hidden xs:group-hover:block cursor-pointer "
            size={20} color="#ffffff" strokeWidth={3.1} absoluteStrokeWidth />
        </div>
      </div>

    </div>
  )

}



