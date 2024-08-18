"use client"

import { Dispatch, ReactNode, SetStateAction, createContext, useMemo, useState, useContext } from "react";

// 定义状态的类型
type State = {
    displayNavigation: boolean;
};

// 定义上下文类型
type AppContextProps = {
    state: State; 
    setState: Dispatch<SetStateAction<State>>; 
};

// 创建上下文，初始值为 null!
const AppContext = createContext<AppContextProps>(null!);

export function useAppContext() {
    return useContext(AppContext); // 这里需要 useContext 来获取上下文值
}

// 创建上下文提供者组件
export default function AppContextProvider({ children }: { children: ReactNode }) {
    
    console.log("aaa");
    
    const [state, setState] = useState({ displayNavigation: true });
   

    // 使用 useMemo 缓存上下文值，避免不必要的重新渲染
    const contextValue = useMemo(() => {
        return { state, setState }; // 这里的 state 和 setState 与上下文类型中的属性名称一致
    }, [state, setState]);

    return (
        <AppContext.Provider value={contextValue}>
            
            {children}
        </AppContext.Provider>
    );
}
