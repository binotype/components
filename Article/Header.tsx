import { FunctionalComponent, FunctionalUtilities, h, VNode } from "@stencil/core"
import { Meta } from "./Meta"
import { binotype } from "@binotype/model"

export const Header: FunctionalComponent<binotype.Context.Article<VNode>> & {
	override: FunctionalComponent<binotype.Context.Article<VNode>>
} = (properties, children, utils) => Header.override(properties, children, utils)
Header.override = (
	{ title, ...meta }: binotype.Context.Article<VNode>,
	children: VNode[],
	_utils: FunctionalUtilities
): VNode | VNode[] | null => (
	<header>
		{title && <h1>{title.formatted}</h1>}
		<Meta {...meta} />
		<a href="../">
			<svg width="2em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
				<path d="M464 256c0-114.875-93.125-208-208-208S48 141.125 48 256s93.125 208 208 208 208-93.125 208-208zm-112 32H160l96-96 96 96z" />
			</svg>
		</a>
		{children}
	</header>
)
export namespace Header {}
