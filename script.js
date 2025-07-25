let toastBox = document.getElementById("toastBox");
let successMsg = "Successfully Submitted!";
let errorMsg = "Please fix the error";
let invalidMsg = "Invalid Input, Check Again";

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);
}
