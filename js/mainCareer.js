let fetchedData = [];
let dataList=[];
async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/users/");
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }
    const data = await response.json();
    //console.log(data);
    const users = [];
    data.users.forEach((element) => {
      users.push(element);
      //console.log(users);
    });
    let randomId = [];
    const container = document.querySelector(".career-container");
    for (let i = 0; i <= 9; i++) {
      randomId[i] = Math.floor(Math.random() * 29 + 1);
      const box = document.createElement("div");
      box.classList.add("fetch-box");
      const fullName = document.createElement("h3");
      fullName.setAttribute('id', 'fullNameId');
      const email = document.createElement("p");
      email.setAttribute('id', 'emailId');
      const phone = document.createElement("p");
      phone.setAttribute('id', 'phoneId');
      const age = document.createElement("p");
      age.setAttribute('id', 'ageId');
      const button = document.createElement("button");
      button.classList.add("edit-button");

      fullName.textContent = `${users[randomId[i]].firstName} ${
        users[randomId[i]].lastName
      }`;
      age.textContent = `${users[randomId[i]].age}`;
      email.textContent = `${users[randomId[i]].email}`;
      phone.textContent = `${users[randomId[i]].phone}`;
      button.textContent = "Edit";
      fetchedData[i] = data.users[randomId[i]];
      box.appendChild(fullName);
      box.appendChild(age);
      box.appendChild(email);
      box.appendChild(phone);
      box.appendChild(button);
      container.appendChild(box);
      button.onclick = function(){
        let parentDiv = button.parentNode
        let fullName = parentDiv.querySelector('.fullName').innerText
        let email = parentDiv.querySelector('.email').innerText
        let phone = parentDiv.querySelector('.phone').innerText
        let age = parseInt(parentDiv.querySelector('.age').innerText);
        dataList = { fullName, email, phone, age };
        
      }
      document
        .querySelector(".career-container")
        .addEventListener("click", function (event) {
          if (event.target && event.target.classList.contains("edit-button")) {
            window.location.href = "applynow.html";
            editDetails(fetchedData)
          }
        });
    }
  } catch (error) {
    console.error("error:", error);
  }
}


// document.addEventListener("DOMContentLoaded", function() {
  fetchData();
// });


function editDetails(data) {
  localStorage.setItem('currentData', json.stringify(data));
  window.location.href = 'applynow.html';
}

export { fetchedData, dataList};


