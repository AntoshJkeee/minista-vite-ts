import getAttrNameFromSelector from "@/utils/getAttrNameFromSelector";

const getParams = (element: HTMLElement, dataAttrSelector: string) => {
	return JSON.parse(element.getAttribute(getAttrNameFromSelector(dataAttrSelector)) as string);
}

export default getParams