export default class MobileFunctionalities {
	static closemobileModal = () => {
		const mobileAddModal = document.querySelector(".add-container-mobile");
		const mobileAddModalContent = document.querySelector(".add-content-mobile");

		mobileAddModal.style.left = "100%";
		mobileAddModal.style.opacity = "0";
		mobileAddModalContent.style.transform = "translateY(100%)";
	};
}
