// const validPin = 1111;
// document.getElementById("addMoneyForm").addEventListener("submit", function (e) {
  
//   const form = this;
  
//   if (!form.checkValidity()) {
//     e.preventDefault(); 
//     form.reportValidity(); 
//     return;
//   }
  
  
//   function getValue(b){
//     const value = document.getElementById(b).value;
//     return value;
//   }

//   e.preventDefault();
  
//   const accountNumber = document.getElementById("account_number").value;
//   const pinCode = getValue("pin_code");
  
//   if(accountNumber.length <11)
//   {
//     alert("Account number must be 11 digits")
//     return;
//   }
//   if(pinCode != validPin)
//   {
//     alert("Pin code is 1111")
//     return;
//   }
  

//   const addAmount = Number(document.getElementById("add_amount").value);
//   let currectBalance = Number(document.getElementById("currect_balance").innerText);

//   currectBalance += addAmount;

//   document.getElementById("currect_balance").innerText = currectBalance;
// });

// function hideAllSections() {
//   document.getElementById("add_money_section").style.display = "none";
//   document.getElementById("cash_out_section").style.display = "none";
//   document.getElementById("transfer_money_section").style.display = "none";
//   document.getElementById("get_bonus_section").style.display = "none";
//   document.getElementById("pay_bill_section").style.display = "none";
//   document.getElementById("transactions_section").style.display = "none";
// }

// hideAllSections();
// document.getElementById("add_money_section").style.display = "block";

// document.getElementById("add_money_btn").addEventListener("click", function () {
//   hideAllSections();
//   document.getElementById("add_money_section").style.display = "block";
// });

// document.getElementById("cash_out_btn").addEventListener("click", function () {
//   hideAllSections();
//   document.getElementById("cash_out_section").style.display = "block";
// });

// document.getElementById("transfer_money_btn").addEventListener("click", function () {
//   hideAllSections();
//   document.getElementById("transfer_money_section").style.display = "block";
// });

// document.getElementById("get_bonus_btn_card").addEventListener("click", function () {
//   hideAllSections();
//   document.getElementById("get_bonus_section").style.display = "block";
// });

// document.getElementById("pay_bill_btn").addEventListener("click", function () {
//   hideAllSections();
//   document.getElementById("pay_bill_section").style.display = "block";
// });

// document.getElementById("transactions_btn").addEventListener("click", function () {
//   hideAllSections();
//   document.getElementById("transactions_section").style.display = "block";
// });



// document.getElementById("addMoney").addEventListener("click", function(e)
// {
//     e.preventDefault()
    
//     const added = document.getElementById("transactions_history");
//     added.innerHTML += 
//     `
//     <div class="flex w-full rounded-sm justify-between bg-white p-2 items-center">
//        <div class="flex items-center gap-2">
//          <figure class="flex items-center justify-center rounded-full bg-gray-300 w-[50px] h-[50px]">
//             <img src="./payoo-resources/assets/opt-1.png" class="z-20 object-contain" alt="">
//         </figure>
//         <div>
//             <h3>Electricity Bill</h3>
//             <p>Today 01:44 AM</p>
//         </div>
//        </div>
       
//        <div>
//         <i class="fa-solid fa-ellipsis-vertical "></i>
//        </div>
//     </div> 
//     `
    
// })


const validPin = 1111;

// -------------------------
// helper functions
// -------------------------
function getInputValue(id) {
  return document.getElementById(id).value;
}

function getInnerTextValue(id) {
  return Number(document.getElementById(id).innerText);
}

function setInnerTextValue(id, value) {
  document.getElementById(id).innerText = value;
}

function addTransaction(title, timeText, imagePath) {
  const added = document.getElementById("transactions_history");

  added.innerHTML += `
    <div class="flex w-full rounded-sm justify-between bg-white p-3 items-center">
      <div class="flex items-center gap-2">
        <figure class="flex items-center justify-center rounded-full bg-gray-300 w-[50px] h-[50px]">
          <img src="${imagePath}" class="object-contain w-6 h-6" alt="">
        </figure>
        <div>
          <h3 class="font-semibold">${title}</h3>
          <p class="text-sm text-gray-500">${timeText}</p>
        </div>
      </div>

      <div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
    </div>
  `;
}

function getCurrentTimeText() {
  const now = new Date();
  return now.toLocaleString();
}

// -------------------------
// add money
// -------------------------
document.getElementById("addMoneyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const accountNumber = getInputValue("account_number");
  const pinCode = getInputValue("pin_code");
  const addAmount = Number(getInputValue("add_amount"));

  if (accountNumber.length < 11) {
    alert("Account number must be 11 digits");
    return;
  }

  if (Number(pinCode) !== validPin) {
    alert("Pin code is incorrect");
    return;
  }

  let currectBalance = getInnerTextValue("currect_balance");
  currectBalance += addAmount;
  setInnerTextValue("currect_balance", currectBalance);

  addTransaction(
    `Add Money +$${addAmount}`,
    getCurrentTimeText(),
    "./payoo-resources/assets/opt-1.png"
  );

  form.reset();
});

// -------------------------
// cash out
// -------------------------
document.getElementById("cashOutForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const agentNumber = getInputValue("agent_number");
  const pinCode = getInputValue("cashout_pin");
  const removeAmount = Number(getInputValue("remove_amount"));

  if (agentNumber.length < 11) {
    alert("Agent number must be 11 digits");
    return;
  }

  if (Number(pinCode) !== validPin) {
    alert("Pin code is incorrect");
    return;
  }

  let currectBalance = getInnerTextValue("currect_balance");

  if (removeAmount > currectBalance) {
    alert("Insufficient balance");
    return;
  }

  currectBalance -= removeAmount;
  setInnerTextValue("currect_balance", currectBalance);

  addTransaction(
    `Cash Out -$${removeAmount}`,
    getCurrentTimeText(),
    "./payoo-resources/assets/opt-2.png"
  );

  form.reset();
});

// -------------------------
// transfer money
// -------------------------
document.getElementById("transferMoneyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const userAccountNumber = getInputValue("user_account_number");
  const pinCode = getInputValue("transfer_pin");
  const transferAmount = Number(getInputValue("transfer_amount"));

  if (userAccountNumber.length < 11) {
    alert("User account number must be 11 digits");
    return;
  }

  if (Number(pinCode) !== validPin) {
    alert("Pin code is incorrect");
    return;
  }

  let currectBalance = getInnerTextValue("currect_balance");

  if (transferAmount > currectBalance) {
    alert("Insufficient balance");
    return;
  }

  currectBalance -= transferAmount;
  setInnerTextValue("currect_balance", currectBalance);

  addTransaction(
    `Transfer Money -$${transferAmount}`,
    getCurrentTimeText(),
    "./payoo-resources/assets/opt-3.png"
  );

  form.reset();
});

// -------------------------
// pay bill
// -------------------------
document.getElementById("payBillForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const billType = getInputValue("bill_type");
  const pinCode = getInputValue("pay_bill_pin");
  const payAmount = Number(getInputValue("pay_amount"));

  if (Number(pinCode) !== validPin) {
    alert("Pin code is incorrect");
    return;
  }

  let currectBalance = getInnerTextValue("currect_balance");

  if (payAmount > currectBalance) {
    alert("Insufficient balance");
    return;
  }

  currectBalance -= payAmount;
  setInnerTextValue("currect_balance", currectBalance);

  addTransaction(
    `${billType} -$${payAmount}`,
    getCurrentTimeText(),
    "./payoo-resources/assets/opt-5.png"
  );

  form.reset();
});

// -------------------------
// get bonus
// -------------------------
document.getElementById("getBonusForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const coupon = getInputValue("bonus_coupon").trim();

  if (coupon === "") {
    alert("Enter a valid coupon");
    return;
  }

  let currectBalance = getInnerTextValue("currect_balance");
  currectBalance += 100;
  setInnerTextValue("currect_balance", currectBalance);

  addTransaction(
    `Bonus Added +$100`,
    getCurrentTimeText(),
    "./payoo-resources/assets/opt-4.png"
  );

  form.reset();
});

// -------------------------
// section toggle
// -------------------------
function hideAllSections() {
  document.getElementById("add_money_section").style.display = "none";
  document.getElementById("cash_out_section").style.display = "none";
  document.getElementById("transfer_money_section").style.display = "none";
  document.getElementById("get_bonus_section").style.display = "none";
  document.getElementById("pay_bill_section").style.display = "none";
  document.getElementById("transactions_section").style.display = "none";
}

hideAllSections();
document.getElementById("add_money_section").style.display = "block";

document.getElementById("add_money_btn").addEventListener("click", function () {
  hideAllSections();
  document.getElementById("add_money_section").style.display = "block";
});

document.getElementById("cash_out_btn").addEventListener("click", function () {
  hideAllSections();
  document.getElementById("cash_out_section").style.display = "block";
});

document.getElementById("transfer_money_btn").addEventListener("click", function () {
  hideAllSections();
  document.getElementById("transfer_money_section").style.display = "block";
});

document.getElementById("get_bonus_btn_card").addEventListener("click", function () {
  hideAllSections();
  document.getElementById("get_bonus_section").style.display = "block";
});

document.getElementById("pay_bill_btn").addEventListener("click", function () {
  hideAllSections();
  document.getElementById("pay_bill_section").style.display = "block";
});

document.getElementById("transactions_btn").addEventListener("click", function () {
  hideAllSections();
  document.getElementById("transactions_section").style.display = "block";
});


document.getElementById("logout_btn").addEventListener("click", function () {
  window.location.href = "index.html";
});