window.onload = function() {
    let data = JSON.parse(localStorage.getItem('currentData'));
  
    if (data) {
      document.getElementById('fullName').value = `${data.firstName} ${data.lastName}`;
      document.getElementById('email').value = data.email;
      document.getElementById('phone').value = data.phone;
      document.getElementById('age').value = data.age;
      document.getElementById('fullName-display').value = `${data.firstName} ${data.lastName}`;
      document.getElementById('email-display').value = data.email;
      document.getElementById('phone-display').value = data.phone;
      document.getElementById('age-display').value = data.age;
    }
  }
  
  function saveChanges() {
    let updatedData = {
      firstName: document.getElementById('fullName').value.split(' ')[0],
      lastName: document.getElementById('fullName').value.split(' ')[1],
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      age: parseInt(document.getElementById('age').value)
    };
  
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      body: JSON.stringify(updatedData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      window.location.href = 'firstPage.html';
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  