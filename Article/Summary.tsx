import { binotype } from "@binotype/model"
import { FunctionalComponent, FunctionalUtilities, h, VNode } from "@stencil/core"
import { Node } from "../Node"

export const Summary: FunctionalComponent<binotype.Context.Article<Node>> & {
	override: FunctionalComponent<binotype.Context.Article<Node>>
} = (properties, children, utils) => Summary.override(properties, children, utils)
Summary.override = (
	{ content }: binotype.Context.Article<Node>,
	children: VNode[],
	_utils: FunctionalUtilities
): VNode | VNode[] | null => (
	<main class="summary">
		{content}
		{children}
	</main>
)
export namespace Summary {}
