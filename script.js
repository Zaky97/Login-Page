// Sample user account data stored in JSON format
var userAccounts = [
  {
    username: "Zaky",
    password: "19052006",
  },
  {
    username: "Rayhan",
    password: "Wangsaf",
  },
  {
    username: "Syakir",
    password: "12345",
  },
];

function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check if username and password are not empty
  if (username === "" || password === "") {
    alert("Please enter both username and password.");
    return;
  }

  // Check if username and password match a user account
  var matchedUser = userAccounts.find(function (user) {
    return user.username === username && user.password === password;
  });

  if (matchedUser) {
    alert("Login successful!");
    window.open("https://zaky97.zapto.org", "_blank"); // Open in a new window
  } else {
    alert("Invalid username or password. Please try again.");
  }
}

// Add event listener to the form's submit event
var loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", validateForm);
