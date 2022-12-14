// 1 задача
const mailInput = document.querySelector(".mailInput");
const  mailChack= document.querySelector(".mailCheck");
const  mailResult= document.querySelector(".mailResult");

console.log(mailResult,mailChack,mailInput);

const regExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

mailChack.addEventListener("click", () => {
    if (regExp.test(mailInput.value)) {
        mailResult.innerText = "ok";
        mailResult.style.color = "green";
    } else {
        mailResult.innerText = "not ok";
        mailResult.style.color = "red";
    }
});