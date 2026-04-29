import { binotype } from "@binotype/model"
import { h, Fragment } from "@stencil/core"
import { Converter } from "./Converter"
import { Node } from "../Node"

export const parser = new binotype.Parser(async content => {
	let result: binotype.Content<Node>
	if (typeof content == "string") result = <Fragment>{content}</Fragment>
	else if (Array.isArray(content)) result = await Converter.convert(content)
	else result = <Fragment></Fragment>
	return result
})
