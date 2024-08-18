"use client"
import Button from "@/components/common/button";
import { LuPanelLeft } from "react-icons/lu";
import { useAppContext } from "@/components/AppContext";

export default function Menu() {
    const { setState,state: {displayNavigation} } = useAppContext();

    return (
        <Button 
            icon={LuPanelLeft} 
            className={`${displayNavigation ?"hidden" : ""} fixed left-2 top-2 `}
            variant="outline" 
            onClick={() => {
                setState((v) => {
                    return { ...v, displayNavigation: true };
                });
            }} // 这里闭合正确
        />
    );
}
