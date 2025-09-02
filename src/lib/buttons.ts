
export type ButtonData = {
	title: string
	href: string
	src: string
}

export function buttonDataToHtmlString(buttonData: ButtonData) : string {
	return `<a title="${buttonData.title}" href="${buttonData.href}"><img width="88px" height="31px" src="${buttonData.src}" alt="${buttonData.title}"/></a>`
}

export const annieButtonData: ButtonData = {
	title: "Annie's Den",
	href: "https://anniesden.dev",
	src: "https://anniesden.dev/assets/button.gif"
}

export const buttonsFriends: ButtonData[] = [
	// { title: "mookalh", href: "https://mookalh.com/", src: "$lib/assets/buttons/friends/mookalh.com"},
	// { title: "studiospacefarer", href: "https://studiospacefarer.com/", src: "$lib/assets/buttons/friends/studiospacefarer.com"},
	{ title: "bscit", href: "https://bscit.dev/", src: "https://bscit.dev/media/images/button.gif"},
	{ title: "bellets :-DD", href: "https://bellets.me/", src: "https://bellets.me/assets/bellets.gif"},
	{ title: "Kett's Site!", href: "https://racc.at/", src: "https://racc.at/media/uploads/88x31.png"},
	{ title: "Chai's site!", href: "https://axoga.to/", src: "https://axoga.to/images/stamps/chai.png"},
	{ title: "compactbunker", href: "https://compactbunker.org/", src: "https://compactbunker.org/blinkies/personal.gif"},
	{ title: "puddingpudd", href: "https://puddingpudd.com/", src: "https://puddingpudd.com/buttons/Pudd_Button.gif"},
	{ title: "mimiya", href: "https://mimiya.nekoweb.org/", src: "https://mimiya.nekoweb.org/button.png"},
]