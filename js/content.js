const nickname = document.getElementById("nickname");
const password = document.getElementById("password");
const id = document.getElementById("id");

const addbtn = document.getElementById("addbutton");

const database = firebase.database();

addbtn.addEventListener('click', (e) => {
  e.peventDefault();
  database.ref('/user/' +  id.value).set({
    nickname: nick.value,
    pass: password.value
    
  });
});
