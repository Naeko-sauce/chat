"use client"

import { Dispatch, SetStateAction,createContext} from "react"

type State = {
    // 是否显示导航栏
    displayNavigation:boolean
}
type AppContextProps= {
    // 包含一个状态类型
    State:State
    // 状态的更新函数
    setSate:Dispatch<SetStateAction<State>>
}
const AppContext = createContext<AppContextProps>(null!);


export default function AppContextProps(){

}