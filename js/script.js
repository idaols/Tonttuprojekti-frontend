const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const userMenu = document.querySelector(".user-menu");
const user = document.querySelector(".user");
const search = document.querySelector(".search");

/* Toggle mobile menu */ //nuoli funktiot!
const toggleMenu = () => {
  menu.classList.toggle('active');

  if (userMenu.classList.contains('active')) {
    userMenu.classList.remove('active');
  }
  if (menu.classList.contains("active")) {
    // adds the close (x) icon
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times-circle'></i>";
  } else {
    // adds the menu (hamburger) icon
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  }
}

// Toggle user

const toggleUser = () => {
  userMenu.classList.toggle('active');

  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
  }
  if (userMenu.classList.contains("active")) {
    // adds the close (x) icon
    user.querySelector("a").innerHTML = "<i class='fas fa-times-circle'></i>";
  } else {
    // adds the user icon
    user.querySelector("a").innerHTML = '<i class="fas fa-user"></i>';
  }
}

/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);

const items = document.querySelectorAll(".item");

user.addEventListener("click", toggleUser, true);



/* Activate Submenu */
const toggleItem = (evt) => {
  if (evt.currentTarget.classList.contains("submenu-active")) {
    evt.currentTarget.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    evt.currentTarget.classList.add("submenu-active");
  } else {
    evt.currentTarget.classList.add("submenu-active");
  }
}

/* Event Listeners */
for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
    item.addEventListener("keypress", toggleItem, false);
  }
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);

  if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
}

/* Event listener */
document.addEventListener("click", closeSubmenu, false);