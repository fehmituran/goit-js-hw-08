import {save, load, remove} from "./storage.js";
import _ from "lodash";

const form = document.querySelector(".feedback-form")
const LOCALSTORAGE_KEY = "feedback-form-state";


const getData = () => {
    const data = load(LOCALSTORAGE_KEY)
        form.elements.message.value = data.message || "";
        form.elements.email.value = data.email || "";  
}

getData();

const saveData = (event) => {
    event.preventDefault();
    const data = {email:  form.elements.email.value, message: form.elements.message.value};
    save(LOCALSTORAGE_KEY, data)
};

form.addEventListener("input", _.throttle(saveData, 500));

const submitData = (event) => {
    event.preventDefault();
    form.reset();
    console.log(load(LOCALSTORAGE_KEY));
    remove(LOCALSTORAGE_KEY);
}

form.addEventListener("submit", submitData);



