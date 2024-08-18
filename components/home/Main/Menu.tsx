"use client"
import Button from "@/components/common/button";
import { LuPanelLeft } from "react-icons/lu";
import { useAppContext } from "@/components/AppContext";
import { ActionType } from "@/reducers/AppReducer";

export default function Menu() {
    const { dispatch,state: {displayNavigation} } = useAppContext();

    return (
        <Button 
            icon={LuPanelLeft} 
            className={`${displayNavigation ?"hidden" : ""} fixed left-2 top-2 `}
            variant="outline" 
            onClick={() => {
                dispatch({type:ActionType.UPDATE,field:"displayNavigation",value:true})
            }} // 这里闭合正确
        />
    );
}
