import { binotype } from "@binotype/model"
import { FunctionalComponent, FunctionalUtilities, h, VNode } from "@stencil/core"
import { isoly } from "isoly"
import { tidily } from "tidily"
import { Node } from "../Node"

export const Meta: FunctionalComponent<binotype.Context.Article<Node>> & {
	override: FunctionalComponent<binotype.Context.Article<Node>>
} = (properties, children, utils) => Meta.override(properties, children, utils)
Meta.override = (
	{ published, changed, author }: binotype.Context.Article<Node>,
	children: VNode[],
	_utils: FunctionalUtilities
): VNode | VNode[] | null => (
	<p>
		{published && (
			<time class="article-published">{tidily.format(isoly.Date.normalize(published), "date", "se-SE")}</time>
		)}
		{changed && <time class="article-changed">{tidily.format(isoly.Date.normalize(changed), "date", "se-SE")}</time>}
		{/*wordCount && <span class="article-word-count">{wordCount}</span>*/}
		{/*readingTime && <span class="article-reading-time">{readingTime}</span>*/}
		{author && <span class="article-author">{author}</span>}
		{/*publication && <span class="article-publication">{publication}</span>*/}
		{children}
	</p>
)
export namespace Meta {}
