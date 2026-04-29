import { binotype } from "@binotype/model"
import { FunctionalComponent, FunctionalUtilities, h, VNode } from "@stencil/core"
import { Node } from "../Node"

export const Footer: FunctionalComponent<binotype.Context.Article<Node>> & {
	override: FunctionalComponent<binotype.Context.Article<Node>>
} = (properties, children, utils) => Footer.override(properties, children, utils)
Footer.override = (
	{ meta }: binotype.Context.Article<Node>,
	children: VNode[],
	_utils: FunctionalUtilities
): VNode | VNode[] | null => (
	<footer>
		{children}
		<p>
			{meta?.copyright && <span id="footer-copyright">{meta.copyright}</span>}
			{meta?.license && <span id="footer-license">{meta.license}</span>}
		</p>
	</footer>
)
export namespace Footer {}
