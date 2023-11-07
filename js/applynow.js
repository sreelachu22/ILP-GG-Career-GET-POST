
import {dataList} from './mainCareer.js';
console.log(fetchedData ,"hashas")
edit(fetchedData)
function edit(fetchedData) {
  console.log(data)
  if (fetchedData) {
        document.getElementById('input-fullName').innerHTML = `${fetchedData.firstName} ${fetchedData.lastName}`;
        document.getElementById('input-email').value = fetchedData.email;
        document.getElementById('input-phone').value = fetchedData.phone;
        document.getElementById('input-age').value = fetchedData.age;
        document.getElementById('fullName-display').value = `${fetchedData.firstName} ${fetchedData.lastName}`;
        document.getElementById('email-display').value = fetchedData.email;
        document.getElementById('phone-display').value = fetchedData.phone;
        document.getElementById('age-display').value = fetchedData.age;
    }
    localStorage.removeItem('currentData');
}
  const url = 'https://dummyjson.com/products/add';
  let updatedData = {
          firstName: document.getElementById('fullNameId').value.split(' ')[0],
          email: document.getElementById('emailId').value,
          phone: document.getElementById('phoneId').value,
          age: parseInt(document.getElementById('ageId').value)
        };
  async function postData(url,updatedData){
    try{
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-Type':'application/json',
            },
            body:JSON.stringify(fetchedData),
        });
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        console.log(responseData);
    }catch(error){
        console.log('There was a problem with the fetch operation:',error);
    }
}


