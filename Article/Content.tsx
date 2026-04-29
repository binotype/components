import { binotype } from "@binotype/model"
import { FunctionalComponent, FunctionalUtilities, h, VNode } from "@stencil/core"
import { Node } from "../Node"

export const Content: FunctionalComponent<binotype.Context.Article<Node>> & {
	override: FunctionalComponent<binotype.Context.Article<Node>>
} = (properties, children, utils) => Content.override(properties, children, utils)
Content.override = (
	{ content }: binotype.Context.Article<Node>,
	children: VNode[],
	_utils: FunctionalUtilities
): VNode | VNode[] | null => (
	<main>
		{content}
		{children}
	</main>
)
export namespace Content {}
