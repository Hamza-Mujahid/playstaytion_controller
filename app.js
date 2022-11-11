const menu_icon = document.querySelector(".menu-icon");
const menuList = document.querySelector("#menuList");
menuList.style.maxHeight = "0px"

const toggle_menu = () => {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "130px"
    } else {
        menuList.style.maxHeight = "0px"
    }
}

menu_icon.addEventListener("click", toggle_menu)