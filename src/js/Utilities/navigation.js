import { Utility } from "../Utility.js";

export default class Navigation {
	static setInitialNav = () => {
		document.querySelectorAll(`a[href="${document.location.hash}"]`).forEach((link) => {
			console.log(window.innerWidth);
			if (window.innerWidth > 550) {
				link.parentElement.classList.add("active-side-link");
			} else {
				console.log(document.location.hash);
				["#playlists", "#favourite", "#history"].includes(document.location.hash)
					? document
							.querySelector(`a[href="#library"]`)
							.parentElement.classList.add("active-mobile-link")
					: link.parentElement.classList.add("active-mobile-link");
			}
		});

		Utility.loadLinkContent(document.location.hash.slice(1));
	};

	static setNav = () => {
		const page = document.location.hash.slice(1);

		this.addLinkStyle(document.location.hash);
		Utility.loadLinkContent(page);
	};

	static addLinkStyle = (hash) => {
		const element = document.querySelectorAll(`a[href="${hash}"]`);
		const activeDesktopClass = "active-side-link";
		const activeMobileClass = "active-mobile-link";
		const active = element.forEach((link) => {
			if (link.parentElement.classList.contains(activeDesktopClass || activeMobileClass)) {
				return true;
			} else {
				return false;
			}
		});

		const links = document.querySelectorAll(`.link`);

		if (active) {
			return false;
		} else {
			links.forEach((link) => {
				if (link.classList.contains(activeDesktopClass)) {
					link.classList.remove(activeDesktopClass);
				}

				if (link.classList.contains(activeMobileClass)) {
					link.classList.remove(activeMobileClass);
				}
			});

			if (window.innerWidth <= 550 && ["#playlists", "#favourite", "#history"].includes(hash)) {
				document
					.querySelector(`a[href="#library"]`)
					.parentElement.classList.add("active-mobile-link");
				document.querySelector(`a[href="${hash}"]`).parentElement.classList.add("active-side-link");
			} else {
				element.forEach((link) => {
					link.parentElement.classList.contains("mobile-link")
						? link.parentElement.classList.add(activeMobileClass)
						: link.parentElement.classList.add(activeDesktopClass);
				});
			}
		}
	};
}
