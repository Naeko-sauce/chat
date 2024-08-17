import Button from "../common/button"
import { HiPlus } from "react-icons/hi"
export default function Navigation(){
    return <div className="flex space-x-3"><Button icon={HiPlus} variant="outline" className="flex-1">新建对话</Button></div>
}