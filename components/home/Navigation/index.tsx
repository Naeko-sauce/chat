import Menubar from "./Menubar"
export default function Navigation(){
    return   <nav
            className={` dark relative h-full w-[260px] bg-gray-900 text-gray-300 p-2`}
        >
            <Menubar />
           
        </nav>
}