import { db } from "./firebase.js";
import {
    collection,
    getDocs,
    query,
    where
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

async function generateRandomPaper() {

    const className = document.getElementById("class").value;
    const subject = document.getElementById("subject").value;

    const q = query(
        collection(db, "questions"),
        where("class", "==", className),
        where("subject", "==", subject)
    );

    const snapshot = await getDocs(q);

    let questions = [];

    snapshot.forEach(doc => {
        questions.push({
            id: doc.id,
            ...doc.data()
        });
    });

    // Shuffle Questions
    questions.sort(() => Math.random() - 0.5);

    // Select First 20 Questions
    const selected = questions.slice(0, 20);

    const paper = document.getElementById("paper");

    paper.innerHTML = "";

    selected.forEach((q, index) => {

        paper.innerHTML += `
        <div class="card mb-3">
            <div class="card-body">
                <h5>${index + 1}. ${q.question}</h5>

                ${q.optionA ? `
                <p>A. ${q.optionA}</p>
                <p>B. ${q.optionB}</p>
                <p>C. ${q.optionC}</p>
                <p>D. ${q.optionD}</p>
                ` : ""}
            </div>
        </div>
        `;

    });

}

document
.getElementById("generateBtn")
.addEventListener("click", generateRandomPaper);
