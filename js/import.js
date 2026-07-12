import { db } from "./firebase.js";

import {
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

document.getElementById("importBtn").addEventListener("click", async ()=>{

const file=document.getElementById("excelFile").files[0];

if(!file){
alert("Select Excel File");
return;
}

const reader=new FileReader();

reader.onload=async(e)=>{

const data=new Uint8Array(e.target.result);

const workbook=XLSX.read(data,{type:"array"});

const sheet=workbook.Sheets[workbook.SheetNames[0]];

const json=XLSX.utils.sheet_to_json(sheet);

for(const row of json){

await addDoc(collection(db,"questions"),{

class:row.Class,
subject:row.Subject,
board:row.Board,
chapter:row.Chapter,
questionType:row.QuestionType,
difficulty:row.Difficulty,
marks:row.Marks,
question:row.Question,
optionA:row.OptionA,
optionB:row.OptionB,
optionC:row.OptionC,
optionD:row.OptionD,
answer:row.Answer

});

}

document.getElementById("status").innerHTML=
"<div class='alert alert-success'>Questions Imported Successfully ✅</div>";

};

reader.readAsArrayBuffer(file);

});
