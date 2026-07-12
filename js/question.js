import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Save Question
const form = document.getElementById("questionForm");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        try {

            await addDoc(collection(db, "questions"), {

                class: document.getElementById("class").value,
                subject: document.getElementById("subject").value,
                board: document.getElementById("board").value,
                chapter: document.getElementById("chapter").value,
                marks: document.getElementById("marks").value,
                difficulty: document.getElementById("difficulty").value,
                question: document.getElementById("question").value,
                optionA: document.getElementById("optionA").value,
                optionB: document.getElementById("optionB").value,
                optionC: document.getElementById("optionC").value,
                optionD: document.getElementById("optionD").value,
                answer: document.getElementById("answer").value,
                createdAt: new Date()

            });

            alert("Question Saved Successfully ✅");

            form.reset();

        } catch (error) {
            alert(error.message);
        }

    });
}

// Load Questions
async function loadQuestions() {

    const table = document.getElementById("questionTable");

    if (!table) return;

    const querySnapshot = await getDocs(collection(db, "questions"));

    table.innerHTML = "";

    querySnapshot.forEach((docSnap) => {

        const q = docSnap.data();

        table.innerHTML += `
        <tr>
            <td>${q.class}</td>
            <td>${q.subject}</td>
            <td>${q.chapter}</td>
            <td>${q.question}</td>
            <td>${q.marks}</td>
            <td>
                <button class="btn btn-danger btn-sm"
                onclick="deleteQuestion('${docSnap.id}')">
                Delete
                </button>
            </td>
        </tr>
        `;

    });

}

loadQuestions();

// Delete Question
window.deleteQuestion = async function(id){

    await deleteDoc(doc(db,"questions",id));

    alert("Deleted Successfully");

    loadQuestions();

}
