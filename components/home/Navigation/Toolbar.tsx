import { useAppContext } from "@/components/AppContext"
import Button from "../../common/button"
import { MdLightMode,MdDarkMode,MdInfo } from "react-icons/md"
import { ActionType } from "@/reducers/AppReducer"

export default function Navigation(){
    const {dispatch,state:{themeMode}} = useAppContext()
    return <div className=" absolute bottom-0 left-0 right-0 bg-gray-800 flex p-2 justify-between">
    <Button onClick={()=>{
        dispatch({type:ActionType.UPDATE,field:"themeMode",value:themeMode ==="dark"?"light":"dark"})
    }}  icon={themeMode === "dark" ? MdDarkMode : MdLightMode} variant="text" 
    
    />
    <Button icon={MdInfo} variant="text" onClick={()=>{
        
    }}  />
    </div>
    
}