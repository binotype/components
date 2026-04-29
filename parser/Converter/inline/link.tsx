import { dom } from "@typeup/dom"
import { h } from "@stencil/core"
import { convert, register } from "../convert"

register("inline.link", async (node: dom.Inline.Link) => {
	return <a href={node.target}>{await convert(node.content)}</a>
})
