import { useAppContext } from "@/components/AppContext"
import Button from "../../common/button"
import { MdLightMode,MdDarkMode,MdInfo } from "react-icons/md"

export default function Navigation(){
    const {setState,state:{themeMode}} = useAppContext()
    return <div className=" absolute bottom-0 left-0 right-0 bg-gray-800 flex p-2 justify-between">
    <Button onClick={()=>{
        setState((v)=>{
            return {...v,themeMode:themeMode==="light"?"dark":"light"}
        })
    }}  icon={themeMode === "dark" ? MdDarkMode : MdLightMode} variant="text" 
    
    />
    <Button icon={MdInfo} variant="text" onClick={()=>{
        
    }}  />
    </div>
    
}