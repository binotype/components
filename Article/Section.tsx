import { FunctionalComponent, FunctionalUtilities, h, VNode } from "@stencil/core"
import { SelfLink } from "../SelfLink"
import { Content } from "./Content"
import { Header } from "./Header"
import { Summary } from "./Summary"
import { binotype } from "@binotype/model"

export const Section: FunctionalComponent<Section.Properties> & {
	override: FunctionalComponent<Section.Properties>
	overrides: Partial<Record<string, FunctionalComponent<Section.Properties>>>
} = (properties, children, utils) => Section.override(properties, children, utils)
Section.override = (
	properties: Section.Properties,
	children: VNode[],
	_utils: FunctionalUtilities,
): VNode | VNode[] | null =>
	(Section.overrides[properties.type || "default"] || Section.overrides["default"])?.(properties, children, _utils) ||
	null
Section.overrides = {
	default: (
		{ id, type, title, link, content, sections }: Section.Properties,
		children: VNode[],
		_utils: FunctionalUtilities,
	): VNode | VNode[] | null => (
		<section id={id} class={`type-${type}`}>
			{typeof title == "string" && <Header title={title} />}
			{content && <Content content={content} />}
			{sections && sections.map(section => <Section {...section} />)}
			{children}
			{typeof link == "string" && <SelfLink link={link}></SelfLink>}
		</section>
	),
}
export namespace Section {
	export interface Properties extends Partial<Summary.Properties>, SelfLink.Properties {
		id: string
		type?: string
		title?: string
		meta?: binotype.Meta
		link?: string
		content?: string
		sections?: Properties[]
	}
}
