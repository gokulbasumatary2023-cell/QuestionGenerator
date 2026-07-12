import { db } from "./firebase.js";

import {
collection,
addDoc,
getDocs,
deleteDoc,
doc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const form=document.getElementById("userForm");

form.addEventListener("submit",async(e)=>{

e.preventDefault();

await addDoc(collection(db,"users"),{

name:name.value,
email:email.value,
role:role.value

});

alert("User Added Successfully");

loadUsers();

});

async function loadUsers(){

const table=document.getElementById("userTable");

table.innerHTML="";

const snapshot=await getDocs(collection(db,"users"));

snapshot.forEach(user=>{

const data=user.data();

table.innerHTML+=`

<tr>

<td>${data.name}</td>

<td>${data.email}</td>

<td>${data.role}</td>

<td>

<button
class="btn btn-danger btn-sm"
onclick="deleteUser('${user.id}')">

Delete

</button>

</td>

</tr>

`;

});

}

window.deleteUser=async(id)=>{

await deleteDoc(doc(db,"users",id));

loadUsers();

}

loadUsers();
