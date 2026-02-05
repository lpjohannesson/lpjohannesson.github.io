class NavBarPalette {
	front: string;
	back: string;
	selectedText: string;

	constructor(front: string, back: string, selectedText: string) {
		this.front = front;
		this.back = back;
		this.selectedText = selectedText;
	}
}

const borderColor = "#121c47ff";

const mainNavbarFrontColor = "#a6e6ffff";
const mainNavbarBackColor = "#245881ff";

const subNavbarFrontColor = "#b41414ff";
const subNavbarBackColor = "#5c0d1eff";

const Palette = {
	border: borderColor,
	mainNavbar: new NavBarPalette(mainNavbarFrontColor, mainNavbarBackColor, mainNavbarBackColor),
	subNavbar: new NavBarPalette(subNavbarFrontColor, subNavbarBackColor, "white"),
};

export { Palette, NavBarPalette };