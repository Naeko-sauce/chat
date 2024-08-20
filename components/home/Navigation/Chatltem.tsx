// 定义参数的类型
import { Chat } from "@/types/chat"
import { MdCheck, MdClose, MdDeleteOutline } from "react-icons/md"
import { PiChatBold, PiTrashBold } from "react-icons/pi"
import { AiOutlineEdit } from "react-icons/ai"
import { useEffect, useState } from "react"
type Props ={
    item:Chat
    selected:boolean
    onSelected:(chat:Chat) => void
}

export default function ChatItem({item,selected,onSelected}:Props){
    const [editing,setEditing] = useState(false)
    useEffect(()=>{
        setEditing(false)
    },[selected])
return <li
onClick={() => {
    onSelected(item)
}}
key={item.id}
className={` relative group flex items-center p-3 space-x-3 cursor-pointer rounded-md hover:bg-gray-800 ${
    selected ? "bg-gray-800 pr-[3.5em]" : ""
}`}
>
<div>
    <PiChatBold />
</div>
{selected && editing ? <input autoFocus={true} className="flex-1 min-w-0 bg-transparent outline-none" defaultValue={item.title} />:<div className='relative flex-1 whitespace-nowrap overflow-hidden'>
    {item.title}
    <span
        className={`group-hover:from-gray-800 absolute right-0 inset-y-0 w-8 bg-gradient-to-l ${
            selected
                ? "from-gray-800"
                : "from-gray-900"
        }`}
    ></span>
</div>}


{selected && <div className="absolute right-1 flex" >
    {
        editing ?<><button 
        onClick={(e)=>{
            setEditing(false); e.stopPropagation()
        }}
        className="p-1 hover:text-white"><MdCheck /> </button>
    <button 
    onClick={(e)=>{
        setEditing(false); e.stopPropagation()
    }}
    className="p-1 hover:text-white"><MdClose /> </button></>
    :<><button 
    onClick={(e)=>{
        setEditing(true); e.stopPropagation()
    }}
    className="p-1 hover:text-white"><AiOutlineEdit /> </button>
<button className="p-1 hover:text-white"><MdDeleteOutline /> </button></>
    }
    
</div>}
</li>
}