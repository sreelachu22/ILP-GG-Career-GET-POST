async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/users/");
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    const users = [];
    data.branches.forEach((element) => {
      users.push(element);
      console.log(users);
    });
    let randomId = [];
    const container = document.querySelector(".career-container");
    for (let i = 0; i <= 9; i++) {
      randomId[i] = Math.floor(Math.random() * 29 + 1);
      const box = document.createElement("div");
      box.classList.add("fetch-box");
      const fullName = document.createElement("h3");
      const email = document.createElement("p");
      const phone = document.createElement("p");
      const age = document.createElement("p");
      const button = document.createElement("button");
      button.classList.add("edit-button");
      fullName.textContent = `${users[randomId[i]].firstName} ${
        users[randomId[i]].lastName
      }`;
      age.textContent = `${users[randomId[i]].age}`;
      email.textContent = `${users[randomId[i]].email}`;
      phone.textContent = `${users[randomId[i]].phone}`;
      button.textContent = "Edit";
      button.classList.add("edit");
      button.addEventListener("click", function () {
        editDetails(users[randomId[i]]);
      });
      box.appendChild(fullName);
      box.appendChild(age);
      box.appendChild(email);
      box.appendChild(phone);
      box.appendChild(button);
      container.appendChild(box);
      // document
      //   .querySelector(".career-container")
      //   .addEventListener("click", function (event) {
      //     if (event.target && event.target.classList.contains("edit-button")) {
      //       window.location.href = "applynow.html";
      //     }
      //   });
    }
  } catch (error) {
    console.error("error:", error);
  }
}
fetchData();

function editDetails(data) {
  localStorage.setItem('currentData', JSON.stringify(data));
  window.location.href = 'applynow.html';
}
