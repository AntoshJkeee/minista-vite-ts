const getAttrNameFromSelector = (attrSelector: string) => {
	// let a = 4

	return attrSelector.substring(1, attrSelector.length - 1)
}

export default getAttrNameFromSelector
