
var clicks = 0;
document.getElementById('lol').onclick = function(){
        clicks = clicks + 1,
                input = document.getElementById('block'); // целевой тег <input>
        block.value = clicks;
        document.getElementById('vow').innerHTML = clicks;
}
var script = document.createElement('SCRIPT');
script.src="https://api.vk.com/method/users.get?access_token=25b2c9f38cbe4257eccb3861cd97af61ee8fea7015899a7070abce98f76971e048782291589d1141bd837&v=5.126&callback=callbackFunc";
document.getElementsByTagName("head")[0].appendChild(script);
function callbackFunc(result) {
        idc = result.response[0].id
}

script.src="https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js"
script.src="https://www.gstatic.com/firebasejs/8.2.2/firebase-auth.js"
script.src="https://www.gstatic.com/firebasejs/8.2.2/firebase-database.js"

      
var firebaseConfig = {
        apiKey: "AIzaSyCturT2bd0DyL6dnP67npvLhqktJ0ECL4Q",
        authDomain: "dvuti-7ede1.firebaseapp.com",
        databaseURL: "https://dvuti-7ede1-default-rtdb.firebaseio.com",
        projectId: "dvuti-7ede1",
        storageBucket: "dvuti-7ede1.appspot.com",
        messagingSenderId: "27719067783",
        appId: "1:27719067783:web:89fab657d78300bb577022",
        measurementId: "G-ZRHD3011G9"
};
firebase.initializeApp(firebaseConfig);

// сохранение
document.getElementById('save').onclick = function(){
        firebase.database().ref('profils/'+idc).set({
                click: clicks,
                id_chels: idc
        });
}
//получение данных
document.getElementById('rosave').onclick = function(){
        firebase.database().ref('profils/'+idc).on('value',function(snapshot){
                clicks= snapshot.val().click;
        });
}
