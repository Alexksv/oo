
let navbar = document.getElementById('navbar').classList
let active_class = "navbar_scrolled"


window.addEventListener('scroll', e => {
  if(pageYOffset > 250) navbar.add(active_class)
  else navbar.remove(active_class)
})