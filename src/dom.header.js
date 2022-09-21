export const addHeaderEvent = function () {
    const hamburgerBtn = document.querySelector(".hamburger");
    const sidebar = document.querySelector(".sidebar");
    const slider = document.querySelector(".switch");

    hamburgerBtn.addEventListener("click", (e) => {
        sidebar.classList.toggle("hidden");
    })

    // slider.addEventListener("change", () => {
    //     if(this.checked) {

    //     }
    //     else {}
    // })
}