import { FunctionalComponent, FunctionalUtilities, h, VNode } from "@stencil/core"
import { binotype } from "@binotype/model"
import { Menu } from "./Menu"
import { Node } from "./Node"

export const Navigation: FunctionalComponent<binotype.Context.Menu<Node>> & {
	override: FunctionalComponent<binotype.Context.Menu<Node>>
} = (properties, children, utils) => Navigation.override(properties, children, utils)
Navigation.override = (
	{ items, depth }: binotype.Context.Menu<Node>,
	children: VNode[],
	_utils: FunctionalUtilities
): VNode | VNode[] | null => (
	<nav>
		<Menu items={items} depth={depth} />
		{children}
	</nav>
)
export namespace Navigation {}
