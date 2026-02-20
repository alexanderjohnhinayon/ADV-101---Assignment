const userList = document.getElementById("userList");
const loading = document.getElementById("loading");
const errorBox = document.getElementById("error");

async function fetchUsers() {
    try {
        loading.style.display = "block";
        errorBox.textContent = "";

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch data from server");
        }

        const users = await response.json();
        displayUsers(users);

    } catch (error) {
        errorBox.textContent = "Error: " + error.message;
    } finally {
        loading.style.display = "none";
    }
}

function displayUsers(users) {
    userList.innerHTML = "";

    users.forEach(user => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <div class="name">${user.name}</div>
            <div class="info"><strong>Email:</strong> ${user.email}</div>
            <div class="info"><strong>City:</strong> ${user.address.city}</div>
        `;

        userList.appendChild(card);
    });
}

fetchUsers();