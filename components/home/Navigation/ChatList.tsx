import { Chat } from "@/types/chat"
import { useState } from "react"
import { AiOutlineEdit } from "react-icons/ai"
import { MdCheck, MdClose, MdDeleteOutline } from "react-icons/md"
import { PiChatBold, PiTrashBold } from "react-icons/pi"

export default function ChatList(){
    const [ChatList,setChatList] = useState<Chat[]>([
        {
            id: "1",
            title: "这是vue教程vue是全世界最好的语言",
            updateTime: Date.now()
        },
        {
            id: "2",
            title: "母猪产后护理",
            updateTime: Date.now() + 1
        },
        {
            id: "3",
            title: "男人和男人怎么生孩子",
            updateTime: Date.now() + 2
        }
    ])
    return <div className="flex-1 mt-2 flex flex-col">
        <ul>
            {
                ChatList.map((item)=>{
                    return <li key={item.id} className="flex items-center p-3 space-x-3 cursor-pointer">
                        <div>
                            <PiChatBold />
                        </div>
                        <div className=" relative flex-1 whitespace-nowrap overflow-hidden">{item.title}</div>
                        <span className="absolute right-0 inset-y-0 w-8 from-gray-900 bg-gradient-to-l"></span>
                    </li>
                })
            }
        </ul>
    </div>
}