import { MdOutlineTipsAndUpdates } from "react-icons/md"
import examples from "@/data/examples.json"
import Button from "@/components/common/button"
import { useMemo, useState } from "react"
export default function Example(){
    const [shoFull,setShowFll] = useState(false)
    const list = useMemo(()=>{
        if(shoFull){
            return examples
        } else{
            return examples.slice(0,15)
        }
    },[shoFull])
    return <>
    <div className=" mt-20 mb-4 text-4xl">
        <MdOutlineTipsAndUpdates/>
    </div>
    <ul className=" flex justify-center flex-wrap gap-3.5">
        {list.map((item)=>{
            return <li key={item.act}>
                <Button>{item.act}</Button>
            </li>
        })}
    </ul>
    {!shoFull && <>
        <p className="p-2">
            ...
        </p>
        <div className=" flex items-center w-full space-x-2">
            <hr className=" flex-1 border-t border-dotted border-gray-200 dark:border-dark-600"/>
            <Button onClick={()=>{
                setShowFll(true)
            }}>显示全部</Button>
            <hr className=" flex-1 border-t border-dotted border-gray-200 dark:border-dark-600"/>
        </div>
    </>}
    </>
}