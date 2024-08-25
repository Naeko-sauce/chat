import { memo } from "react"
import ReactMarkdown, { Options } from "react-markdown"
function Markdown({children,className="",...props}:Options){
    return <ReactMarkdown className={` markdown prose dark:prose-invert ${className}`} {...props}>{children}</ReactMarkdown>
}
export default memo (Markdown)