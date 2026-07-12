import { db } from "./firebase.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

async function loadPaper() {

    const container = document.getElementById("questionContainer");

    container.innerHTML = "";

    const snapshot = await getDocs(collection(db, "generatedPaper"));

    let i = 1;

    snapshot.forEach((doc) => {

        const q = doc.data();

        container.innerHTML += `

        <div class="mb-4">

            <h5>${i}. ${q.question}</h5>

            ${q.optionA ? `
            <p>A. ${q.optionA}</p>
            <p>B. ${q.optionB}</p>
            <p>C. ${q.optionC}</p>
            <p>D. ${q.optionD}</p>
            ` : ""}

        </div>

        `;

        i++;

    });

}

loadPaper();
