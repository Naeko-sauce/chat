import { groupByDate } from "@/components/common/util"
import { Chat } from "@/types/chat"
import { list } from "postcss"
import { useMemo, useState } from "react"
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
        },
        {
            id: "4",
            title: "男人和男人怎么生孩子",
            updateTime: Date.now() + 2
        },
        {
            id: "5",
            title: "男人和男人怎么生孩子",
            updateTime: Date.now() + 2
        },
        {
            id: "6",
            title: "男人和男人怎么生孩子",
            updateTime: Date.now() + 2
        },
        {
            id: "7",
            title: "男人和男人怎么生孩子",
            updateTime: Date.now() + 2
        },
        {
            id: "8",
            title: "男人和男人怎么生孩子",
            updateTime: Date.now() + 2
        },
        {
            id: "9",
            title: "男人和男人怎么生孩子",
            updateTime: Date.now() + 2
        },
        {
            id: "10",
            title: "男人和男人怎么生孩子",
            updateTime: Date.now() + 2
        },
        {
            id: "11",
            title: "男人和男人怎么生孩子",
            updateTime: Date.now() + 2
        },
        {
            id: "12",
            title: "男人和男人怎么生孩子",
            updateTime: Date.now() + 2
        },
       
    ])
// 定义一个状态保存当前选择的对话
const [selectedChat,setSelectedChat] =useState<Chat>()
const groupList = useMemo(()=>{
    console.log(groupByDate);
    return groupByDate(ChatList)
},[ChatList])
    return <div className="flex-1 mt-2 mb-[48] flex flex-col overflow-auto">
        {groupList.map(([date,list])=>{
            return <div key={date}> 
            <div className=" sticky top-0 z-10 p-3 text-sm bg-gray-900 text-gray-500 ">{date}</div>
            <ul>
            {
                list.map((item)=>{
                    const selected =selectedChat?.id === item.id
                    return <li
                            onClick={()=>{
                                setSelectedChat(item)
                            }}                    
                            key={item.id} className={`group flex items-center p-3 space-x-3 cursor-pointer
                                rounded-md hover:bg-gray-800
                             ${ selected? "bg-gray-800" :''}`}>
                        <div>
                            <PiChatBold />
                        </div>
                        <div className=" relative flex-1 whitespace-nowrap overflow-hidden">{item.title}</div>
                        <span
                        className={`group-hover:from-gray-800 absolute right-0 inset-y-0 w-8  ${
                            selected ? "from-gray-800" : "from-gray-900"
                        }`}
                    ></span>
                    </li>
                })
            }
        </ul></div>
        })}
       
    </div>
}