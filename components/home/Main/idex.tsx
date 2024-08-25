import ChatInput from "./ChatInput";
import Menu from "./Menu";
import MessageList from "./Message";
import ModelSelect from "./ModelSelect";
import Welcome from "./Welcome";

export default function Main (){
    return <div className="relative flex-1">
     <main className=" overflow-y-auto  bg-white w-full h-full text-gray-900 dark:bg-gray-800 dark:text-gray-100">
        <Menu/>
        {/* <Welcome/> */}
       <ChatInput/>
       <MessageList />
        </main></div>
}