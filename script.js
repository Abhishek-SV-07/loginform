document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent page reload

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();
    if (result.success) {
        console.log("Login successful!");
        window.location.href = "loggedin.html"; // Redirect to logged-in page

    } else {
        console.log("Login failed!");
        alert("Invalid credentials! Please try again.");
    }
});
