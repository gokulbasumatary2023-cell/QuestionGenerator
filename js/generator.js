import { db } from "./firebase.js";
import {
  collection,
  getDocs,
  query,
  where
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const generateBtn = document.getElementById("generateBtn");

if (generateBtn) {
  generateBtn.addEventListener("click", generatePaper);
}

async function generatePaper() {

  const className = document.getElementById("class").value;
  const subject = document.getElementById("subject").value;
  const difficulty = document.getElementById("difficulty").value;

  const q = query(
    collection(db, "questions"),
    where("class", "==", className),
    where("subject", "==", subject)
  );

  const snapshot = await getDocs(q);
console.log("Questions Found:", snapshot.size);
alert("Questions Found: " + snapshot.size);

  let html = "";

  let number = 1;

  snapshot.forEach((doc) => {

    const data = doc.data();

    if (
      difficulty === "Mixed" ||
      data.difficulty === difficulty
    ) {

      html += `
        <div class="mb-4">
            <h5>${number}. ${data.question}</h5>

            <p>A. ${data.optionA}</p>
            <p>B. ${data.optionB}</p>
            <p>C. ${data.optionC}</p>
            <p>D. ${data.optionD}</p>

            <hr>
        </div>
      `;

      number++;

    }

  });

  document.getElementById("paper").innerHTML = html;

}
