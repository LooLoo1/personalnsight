import { Choice } from "types"
import { extractElements } from "./extractElements"

export const replaceTitle = (text: string, answers: Choice[]) => {
	const keys = extractElements(text);
	if (keys.length > 0) {
		const templates = keys.map((key) => {
			const choice = answers.find((answer) => answer.responseKey === key);
			return choice?.template || "";
		});

		keys.forEach((key, index) => {
			text = text.replace(
				`{${key}}`,
				templates[index] !== "" ? `${templates[index]} ` : "",
			);
		});
	}
	return text;
};