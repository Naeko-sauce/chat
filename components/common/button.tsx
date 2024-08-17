
import { ComponentPropsWithRef } from "react";
import { IconType } from "react-icons";

// 重新定义组件的参数类型

type ButtonProps = {
    // 用于添加图标可选
    icon?:IconType
    // 风格类型用于控制按钮风格分为三种类型
    variant?:"default" | "outline" |"text"
} & ComponentPropsWithRef<"button">
export default function Button({children,className="",icon:Icon,variant="default",...props}:ButtonProps){
    return <button className={' inline-flex items-center min-w-38[x] min-h-[38px] rounded px-3 py-5 ${className} ${variant === "default" ?"text-black dark:text-gray-300 bg-gray-50 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-900":variant === "outline"? "text-black dark:text-gray-300 bg-gray-50 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-900":"text-black dark:text-gray-300 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700"}'} {...props}>
        {Icon && <Icon className='text-lg ${children ? "mr-1": ""}'/>}
        {children}</button>;
}