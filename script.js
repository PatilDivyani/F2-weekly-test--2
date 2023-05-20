
let arr = [
  {id:1, name:"john", age:"18", profession:"developer"},
  {id:2, name:"jack", age:"20", profession:"developer"},
  {id:3, name:"karen", age:"19", profession:"admin"}
]

let filterbtn = document.getElementById("filterbtn");
const selection = document.getElementById("dropdown");
let container = document.getElementsByClassName("container");


// filter 
function Arrange(){

  //if no option is selected display alert
  const selectedOption = selection.value;
  if(selectedOption === ''){
    alert("Select a profession");
    return
  }

  //sort acc to profession and return filtered array
  let displayarr = arr.filter( (ele) => {
    return selectedOption===ele.profession;
  });

  // display arr
 displayElement(displayarr);
  
};

function displayElement(employees) {
  container.innerHTML = ''; // Clear existing employee data

  employees.forEach(function(employee) {
    let employeeData = document.createElement('div');
    employeeData.classList.add('employee-data');

    // Loop through key-value pairs and create a paragraph for each
    Object.entries(employee).forEach(function([key, value]) {
      const employeeInfo = document.createElement('p');
      employeeInfo.innerHTML = `
      <span>id: ${user.id}   </span>
      <span>Name: ${user.name}  </span>
      <span>Profession: ${user.profession}  </span>
      <span>Age: ${user.age}  </span>
      
    `;
      employeeData.appendChild(employeeInfo);
    });

    container.appendChild(employeeData);
  });
}

//add user
  const nameInput = document.getElementById('addname');
  const ageInput = document.getElementById('addage');
  const addProfessionSelect = document.getElementById('addProfession');
  const addButton = document.getElementById('addButton');
  function addUser() {
    const name = nameInput.value;
    const age = ageInput.value;
    const profession = addProfessionSelect.value;
    
    if (name === '' || age === '' || profession === '') {
      alert('Please fill in all fields before adding a user.');
      return;
    }
    
    const newUser = {
      id: arr.length + 1,
      name: name,
      age: age,
      profession: profession
    };
    
    arr.push(newUser);
    displayElement(arr);
    
    // Clear input fields
    nameInput.value = '';
    ageInput.value = '';
    addProfessionSelect.value = '';
  }
  


