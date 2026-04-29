import { dom } from "@typeup/dom"
import { h } from "@stencil/core"
import { convert, register } from "../../convert"

register("block.list.definition.term", async (node: dom.Block.List.Definition.Term) => (
	<li>{await convert(node.content)}</li>
))
