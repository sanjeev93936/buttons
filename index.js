const homeContent = `<h1>Welcome to the Home Section</h1>
<p>This is the home section of the layout. Here, you can find information about the main purpose of the website or application.</p>`;

const aboutContent = `<h1>About Us</h1>
<p>This section provides information about the company or organization behind the website or application.</p>`;

const contactContent = `<h1>Contact Us</h1>
<p>Use this section to get in touch with the company or organization. You can find contact information such as phone numbers, email addresses, and physical addresses.</p>`;

document.getElementById("home-section").addEventListener("click", function() {
  document.getElementById("content").innerHTML = homeContent;
});

document.getElementById("about-section").addEventListener("click", function() {
  document.getElementById("content").innerHTML = aboutContent;
});

document.getElementById("contact-section").addEventListener("click", function() {
  document.getElementById("content").innerHTML = contactContent;
});
