"use client"
import Navigation from "@/components/home/Navigation";
import Main from "@/components/home/Main/idex";
import { useAppContext } from "@/components/AppContext";
import { ActionType } from "@/reducers/AppReducer";

export default function Home() {
 const {state:{themeMode}} = useAppContext()
  return (
    <div className={` ${themeMode} h-full flex`} >
       
      <Navigation />
      <Main  />
      

    </div>
  );
}
 