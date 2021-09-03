export default class InfoModal {
	static modal = document.querySelector(".infoModal");

	static show = (content) => {
		// clearTimeout(hideModal);
		this.modal.textContent = content;
		this.modal.style.opacity = "1";
		this.modal.style.transform = "translateY(0)";

		const hideModal = setTimeout(this.hide, 2000);
	};

	static hide = () => {
		this.modal.style.opacity = "0";
		this.modal.style.transform = "translateY(-100%)";
	};
}
