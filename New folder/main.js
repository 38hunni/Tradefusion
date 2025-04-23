// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//   let top = window.scrollY;
//   let offset = sec.offsetTop;
//   let height = sec.offsetHeight;
//   let id = sec.getAttributes('class');

//   if (top >= offset && top < offset + height) {
//     navLinks.forEach(links => {
//       links.classList.remove('active');
//       document.querySelector('header nav a[href*=' + class + ']').classList.add('active');
//     });
//   };
// };




const allLinks = document.querySelectorAll("header nav a");

allLinks.forEach(link => {
  link.addEventlistener("click", even => {
    even.preventDefault();
    allLinks.forEach(i => i.classList.remove("active"));
    even.target.classList.add("active");
  });
});