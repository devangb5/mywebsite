





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
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// Select the TOC header and list
const tocHeader = document.querySelector('.toc h2');
const tocList = document.querySelector('.toc ul');

// Check if both elements exist before adding the event listener
if (tocHeader && tocList) {
    tocHeader.addEventListener('click', function() {
        // Toggle display property
        tocList.style.display = tocList.style.display === 'block' ? 'none' : 'block';
    });
}
