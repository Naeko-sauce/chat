"use client"

import { Action, initState, reducer, State } from "@/reducers/AppReducer";
import { Dispatch, ReactNode, SetStateAction, createContext, useMemo, useState, useContext, useReducer } from "react";


// 定义上下文类型
type AppContextProps = {
    state: State; 
    dispatch: Dispatch<Action> 
};

// 创建上下文，初始值为 null!
const AppContext = createContext<AppContextProps>(null!);

export function useAppContext() {
    return useContext(AppContext); // 这里需要 useContext 来获取上下文值
}

// 创建上下文提供者组件
export default function AppContextProvider({ children }: { children: ReactNode }) {
    
    console.log("aaa");
    
    const [state, dispatch] = useReducer(reducer,initState)
   

    // 使用 useMemo 缓存上下文值，避免不必要的重新渲染
    const contextValue = useMemo(() => {
        return { state, dispatch }; // 这里的 state 和 setState 与上下文类型中的属性名称一致
    }, [state, dispatch]);

    return (
        <AppContext.Provider value={contextValue}>
            
            {children}
        </AppContext.Provider>
    );
}
