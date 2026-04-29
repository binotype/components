import { dom } from "@typeup/dom"
import { h } from "@stencil/core"
import { convert, register } from "../convert"

register("block.code", async (node: dom.Block.Code) => (
	<figure>
		<pre>
			<code class="${node.language}">
				${node.value.replace(/&/gi, "&amp;").replace(/</gi, "&lt;").replace(/>/gi, "&gt;")}
			</code>
		</pre>
		<figcaption>${await convert(node.content)}</figcaption>
	</figure>
))
