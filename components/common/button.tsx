import { ComponentPropsWithRef } from "react";
export default function Button({children,className,...props}:ComponentPropsWithRef<"button">){
    return <button className={' border border-gray-300 rounded px-3 py-5 ${className}'} {...props}>{children}</button>;
}