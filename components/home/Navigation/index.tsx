import Menubar from "./menubar"
export default function Navigation(){
    return   <nav
            className={` relative  bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100`}
        >
            <Menubar />
           
        </nav>
}