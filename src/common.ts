
export interface EditorSettings {
	extensions: string[];
	folding: boolean;
	lineNumbers: boolean;
	wordWrap: boolean;
	minimap: boolean;
	semanticValidation: boolean;
	syntaxValidation: boolean;
	themeColor: string;
	fontSize: number;
	fontFamily: string[];
}

export const DEFAULT_SETTINGS: EditorSettings = {
	extensions: ["ts", "js", "py", "css", "c", "cpp", "go", "rs", "java", "lua", "php"],
	folding: true,
	lineNumbers: true,
	wordWrap: true,
	minimap: true,
	semanticValidation: true,
	syntaxValidation: true,
	themeColor: "AUTO",
	fontSize: 16,
	fontFamily: [""]
}


export const viewType = "vscode-editor";
