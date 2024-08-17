import Button from "../common/button"
import { HiPlus } from "react-icons/hi"
import { LuPanelLeft } from "react-icons/lu"
export default function Navigation(){
    return <div className="flex space-x-3 w-[260px] h-full"><Button icon={HiPlus} variant="outline" className="flex-1">新建对话</Button>
    <Button icon={LuPanelLeft} variant="outline" ></Button>
    </div>
}