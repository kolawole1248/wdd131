// Toggle mobile navigation
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Dynamic Coffee Menu
const coffeeMenu = [
    { name: "Espresso", price: "$3.50", image: "image/images (2).jfif" },
    { name: "Latte", price: "$4.00", image: "image/images (3).jfif" },
    { name: "Cappuccino", price: "$4.50", image: "image/360_F_194828703_vuNjz8Otb66VfI4rQyg9tBUPuGAugsUR.jpg" },
    { name: "Cold Brew", price: "$4.00", image: "image/images (4).jfif" }
];

const menuContainer = document.querySelector(".grid");

coffeeMenu.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
    `;
    menuContainer.appendChild(card);
});

// Handle form submission
const form = document.getElementById("contact-form");
const confirmation = document.getElementById("form-confirmation");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Store in localStorage
    localStorage.setItem("contactName", name);
    localStorage.setItem("contactEmail", email);
    localStorage.setItem("contactMessage", message);

    // Display confirmation
    confirmation.textContent = "Thank you for your message!";
    form.reset();
});

// Conditional Branching Example
const user = { name: "Guest", status: "new" };

if (user.status === "new") {
    console.log(`Welcome, ${user.name}! Enjoy a 10% discount on your first order.`);
} else {
    console.log(`Welcome back, ${user.name}!`);
}