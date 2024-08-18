"use client"

import { Dispatch, ReactNode, SetStateAction,createContext, useMemo, useState} from "react"

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


export default function AppContextProps({children}:{children:ReactNode}){
    const [state,setSate] = useState({displayNavigation:true})
    // 缓存计算结果
    const contextValue = useMemo(() => {
        return { state, setSate }
    }, [state, setSate])
    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}