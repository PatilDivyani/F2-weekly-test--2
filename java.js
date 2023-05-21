const users = [
    { id: 1, name: "John", age: 18, profession: "Developer" }, 
    { id: 2, name: "Jack", age: 20, profession: "Developer" }, 
    { id: 3, name: "Karen", age: 19, profession: "Admin" },
];
let select = document.getElementsByTagName("select")[0];
//let select = document.getElementById("dropdown")[0];
let container = document.getElementById("container");

function filterData(profession) {
    // let usersListsOf  = users.filter((user) => {
    //     return user.profession===profession;
    // });

    if(profession === ""){
        return users ;
    }
    let usersList = users.filter((user) => {
        return user.profession === profession ;// true
    });

    return usersList ;
}

function appendUsers(usersList) {
// usersList = [{id: 1, name: "", age: 10, profession: ""} , {} , {} , ...]
    /*
        <div class="user">
            <div>1</div>
            <div>Name: John</div>
            <div>Profession: Developer</div>
            <div>Age: 22</div>
        </div>
    */

        for(let i = 0; i<usersList.length; i++){
            let userData = document.createElement("div");
            userData.className = "user";

            let idElement = document.createElement("div");
            idElement.innerText = usersList[i].id;

            let nameElement = document.createElement("div");
            nameElement.innerText = `Name: ${usersList[i].name}`;

            let professionElement = document.createElement("div");
            professionElement.innerText = `Profession: ${usersList[i].profession}`;

            let ageElement = document.createElement("div");
            ageElement.innerText = `Age: ${usersList[i].age}`;

            userData.append(idElement);
            userData.append(nameElement);
            userData.append(professionElement);
            userData.append(ageElement);

            container.append(userData);
        }
}

function filterUsers(){
    let selectedValue = select.value;
   
        let filterUsers = filterData(selectedValue);
        container.innerText = '';
        appendUsers(filterUsers);
        
       // selectedValue = "" | "developer" | "admin"
    // selectedValue = "developer"
    // filterData("developer");

    // else{
    //     alert("Select a profession");
    //     return;
    // }
}

function addUser() {
    let nameInput = document.getElementById("addname").value.trim();
    let professionInput = document.getElementById("addprofession").value.trim();
    let ageInput = document.getElementById("addage").value.trim();

    if(nameInput==="" && professionInput==="" && ageInput===""){
        alert("All fields are required");
        return;
    }
    else{
        let newUserData = {
                            id: users[users.length-1].id + 1,
                            name: nameInput,
                            age: ageInput,
                            profession: professionInput
                            };
        users.push(newUserData);                
        filterUsers();
    }
}