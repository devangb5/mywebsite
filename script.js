





// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

document.addEventListener("DOMContentLoaded", function() {
  const tocHeader = document.querySelector('.toc h2');
  const tocList = document.querySelector('.toc ul');

  if (tocHeader && tocList) {
      tocHeader.addEventListener('click', function() {
          const isExpanded = tocList.style.display === 'block';
          tocList.style.display = isExpanded ? 'none' : 'block'; // Toggle display
          tocHeader.setAttribute('aria-expanded', !isExpanded); // Update ARIA attribute
      });
  }
});
