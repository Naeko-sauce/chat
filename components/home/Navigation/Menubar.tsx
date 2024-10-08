import { useAppContext } from "@/components/AppContext"
import Button from "../../common/button"
import { HiPlus } from "react-icons/hi"
import { LuPanelLeft } from "react-icons/lu"
import { ActionType } from "@/reducers/AppReducer"
export default function Navigation(){
    const {dispatch} = useAppContext()
    return <div className="flex justify-between space-x-3">
    <Button icon={HiPlus} variant="outline" className="flex-1" >新建对话</Button>
    <Button icon={LuPanelLeft} variant="outline" onClick={()=>{
        dispatch({type:ActionType.UPDATE,field:"displayNavigation",value:false})
    }}  />
    </div>
    
}