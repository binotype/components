import { binotype } from "@binotype/model"
import { FunctionalComponent, FunctionalUtilities, h, VNode } from "@stencil/core"
import { Node } from "../Node"

export const Aside: FunctionalComponent<binotype.Context.Article<Node>> & {
	override: FunctionalComponent<binotype.Context.Article<Node>>
} = (properties, children, utils) => Aside.override(properties, children, utils)
Aside.override = (
	article: binotype.Context.Article<Node>,
	children: VNode[],
	_utils: FunctionalUtilities
): VNode | VNode[] | null => (
	<aside>
		{typeof article.meta.image == "string" && <img src={article.meta.image} title={article.title?.plain} />}
		{children}
	</aside>
)
export namespace Aside {}
