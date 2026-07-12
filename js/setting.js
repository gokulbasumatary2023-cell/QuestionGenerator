import { db } from "./firebase.js";
import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const form = document.getElementById("settingsForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    await setDoc(doc(db, "settings", "school"), {

        schoolName: schoolName.value,
        schoolAddress: schoolAddress.value,
        phone: phone.value,
        email: email.value,
        website: website.value,
        principal: principal.value,
        examHeader: examHeader.value

    });

    alert("Settings Saved Successfully ✅");

});
