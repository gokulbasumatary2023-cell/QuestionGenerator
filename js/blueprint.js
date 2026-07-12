import { db } from "./firebase.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const saveBtn = document.getElementById("saveBlueprint");

saveBtn.addEventListener("click", async () => {

  try {

    await addDoc(collection(db, "blueprints"), {

      class: document.getElementById("class").value,
      subject: document.getElementById("subject").value,
      exam: document.getElementById("exam").value,
      board: document.getElementById("board").value,
      totalMarks: Number(document.getElementById("marks").value),
      time: document.getElementById("time").value,

      mcq: Number(document.getElementById("mcq").value),
      fill: Number(document.getElementById("fill").value),
      trueFalse: Number(document.getElementById("tf").value),
      shortAnswer: Number(document.getElementById("short").value),
      longAnswer: Number(document.getElementById("long").value),

      easy: Number(document.getElementById("easy").value),
      medium: Number(document.getElementById("medium").value),
      hard: Number(document.getElementById("hard").value),

      createdAt: new Date()

    });

    alert("✅ Blueprint Saved Successfully");

  } catch (error) {

    alert(error.message);

  }

});
