import { FunctionalComponent, FunctionalUtilities, h, VNode } from "@stencil/core"

export const Menu: FunctionalComponent<Readonly<Menu.Properties>> & {
	override: FunctionalComponent<Menu.Properties>
} = (properties, children, utils) => Menu.override(properties, children, utils)
Menu.override = (
	{ items, depth }: Menu.Properties,
	_children: VNode[],
	_utils: FunctionalUtilities,
): VNode | VNode[] | null => (
	<ul>
		{items.map(item => (
			<li
				class={item.selected == "current" ? "current" : item.selected == "parent" ? "current-parent" : ""}
				title={item.description}
			>
				<a href={item.url}>{item.label}</a>
				{item.items && item.items.length > 0 && depth != 1 && <Menu items={item.items} depth={depth && depth - 1} />}
			</li>
		))}
	</ul>
)
export namespace Menu {
	export interface Properties {
		items: {
			label: string
			description?: string
			url: string
			selected?: "current" | "parent"
			items?: Properties["items"]
		}[]
		depth?: number
	}
}
