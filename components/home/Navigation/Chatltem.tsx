// 定义参数的类型
import { Chat } from "@/types/chat"
import { MdCheck, MdClose, MdDeleteOutline } from "react-icons/md"
import { PiChatBold, PiTrashBold } from "react-icons/pi"
import { AiOutlineEdit } from "react-icons/ai"
type Props ={
    item:Chat
    selected:boolean
    onSelected:(chat:Chat) => void
}

export default function ChatItem({item,selected,onSelected}:Props){
return <li
onClick={() => {
    onSelected(item)
}}
key={item.id}
className={`group flex items-center p-3 space-x-3 cursor-pointer rounded-md hover:bg-gray-800 ${
    selected ? "bg-gray-800" : ""
}`}
>
<div>
    <PiChatBold />
</div>
<div className='relative flex-1 whitespace-nowrap overflow-hidden'>
    {item.title}
    <span
        className={`group-hover:from-gray-800 absolute right-0 inset-y-0 w-8 bg-gradient-to-l ${
            selected
                ? "from-gray-800"
                : "from-gray-900"
        }`}
    ></span>
</div>
</li>
}