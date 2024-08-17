import { ComponentPropsWithRef } from "react";
export default function Button({children,className,...props}:ComponentPropsWithRef<"button">){
    return <button className={' border border-gray-300 rounded px-3 py-5 ${className} hover:bg-gray-800 active:bg-gray-700'} {...props}>{children}</button>;
}