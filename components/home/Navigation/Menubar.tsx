import Button from "../../common/button"
import { HiPlus } from "react-icons/hi"
import { LuPanelLeft } from "react-icons/lu"
export default function Navigation(){
    return <div className="flex justify-between space-x-3">
    <Button icon={HiPlus} variant="outline" >新建对话</Button>
    <Button icon={LuPanelLeft} variant="outline"  />
    </div>
    
}