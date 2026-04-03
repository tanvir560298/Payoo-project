<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/daisyui@5"
      rel="stylesheet"
      type="text/css"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

    <link rel="stylesheet" href="./style/style.css" />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
      integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <title>Document</title>
  </head>
  <body class="add_money h-screen max-w-lg mx-auto bg-[#f4f5f7]">
    <div class="rounded-b-xl bg-white p-3">
      <nav
        class="flex justify-between items-center p-3 border-b-gray-400 border-b-2"
      >
        <div class="flex items-center gap-3">
          <img
            src="./payoo-resources/assets/logo.png"
            class="w-[50px] h-[50px]"
            alt=""
          />
          <div>
            <p class="font-bold">$<span id="currect_balance">0</span></p>
            <p class="text-gray-400">Available Balance</p>
          </div>
        </div>
        <div>
          <button id="logout_btn" class="btn btn-ghost">
            <i
              class="fa-solid fa-arrow-right-from-bracket rotate-180 text-black"
            ></i
            >Logout
          </button>
        </div>
      </nav>

      <main>
        <div class="px-4 py-6">
          <h2 class="text-2xl font-bold">
            Welcome to pay<span class="text-violet-500">oo</span>
          </h2>
          <p class="text-gray-400">
            Enjoy easy and convenient financial services with us. Cashout charge
            is low and
          </p>
        </div>

        <div class="cards grid grid-cols-3 gap-4 container mx-auto">
          <div
            id="add_money_btn"
            class="border-gray-300 border-2 p-3 flex items-center text-center justify-center flex-col gap-2 rounded-lg"
          >
            <img src="./payoo-resources/assets/opt-1.png" alt="" />
            <p>Add Money</p>
          </div>
          <div
            id="cash_out_btn"
            class="border-gray-300 border-2 p-3 flex items-center text-center justify-center flex-col gap-2 rounded-lg"
          >
            <img src="./payoo-resources/assets/opt-2.png" alt="" />
            <p>Cashout</p>
          </div>
          <div
            id="transfer_money_btn"
            class="border-gray-300 border-2 p-3 flex items-center text-center justify-center flex-col gap-2 rounded-lg"
          >
            <img src="./payoo-resources/assets/opt-3.png" alt="" />
            <p>Transfer Money</p>
          </div>

          <div
            id="get_bonus_btn_card"
            class="border-gray-300 border-2 p-3 flex items-center text-center justify-center flex-col gap-2 rounded-lg"
          >
            <img src="./payoo-resources/assets/opt-4.png" alt="" />
            <p>Get Bonus</p>
          </div>

          <div
            id="pay_bill_btn"
            class="border-gray-300 border-2 p-3 flex items-center text-center justify-center flex-col gap-2 rounded-lg"
          >
            <img src="./payoo-resources/assets/opt-5.png" alt="" />
            <p>Pay Bill</p>
          </div>

          <div
            id="transactions_btn"
            class="border-gray-300 border-2 p-3 flex items-center text-center justify-center flex-col gap-2 rounded-lg"
          >
            <img src="./payoo-resources/assets/opt-6.png" alt="" />
            <p>Transactions</p>
          </div>
        </div>
      </main>
    </div>

    <!-- form section start -->

    <!-- add money start -->
    <div id="add_money_section" class="mx-w-lg p-3">
      <h3 class="text-2xl font-bold my-2">Add Money</h3>
      <div>
        <form
          id="addMoneyForm"
          class="fieldset bg-base-200 border-base-300 rounded-box border p-4 bg-white"
        >
          <label class="text-md font-semibold" for="bank_select"
            >Select A Bank</label
          >
          <select
            id="bank_select"
            class="select w-full rounded-3xl border-none bg-[#f4f5f7] text-gray-500"
            required
          >
            <option disabled selected>Pick a Bank</option>
            <option>Islamic Bank</option>
            <option>Brac Bank</option>
            <option>Dbbl Bank</option>
            <option>Al rajhi bank</option>
          </select>

          <label class="text-md font-semibold" for=""
            >Bank Account Number</label
          >
          <input
            id="account_number"
            type="text"
            placeholder="Type here"
            class="input w-full rounded-3xl border-none bg-[#f4f5f7] text-gray-500"
            required
          />

          <label class="text-md font-semibold" for="add_amount"
            >Amount to Add</label
          >
          <input
            required
            id="add_amount"
            type="text"
            placeholder="Type here"
            class="input w-full rounded-3xl border-none bg-[#f4f5f7] text-gray-500"
          />

          <label class="text-md font-semibold" for="pin_code">Pin Number</label>
          <label
            class="input validator w-full rounded-3xl border-none bg-[#f4f5f7] text-gray-500"
          >
            <svg
              class="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                ></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>

            <input
              id="pin_code"
              type="password"
              required
              placeholder="Enter 4-digit PIN"
              pattern="[0-9]{4}"
              maxlength="4"
              minlength="4"
              inputmode="numeric"
              title="PIN must be exactly 4 digits"
            />
          </label>

          <p class="validator-hint hidden">PIN must be exactly 4 digits</p>

          <button
            id="addMoney"
            class="btn btn-primary text-white mt-4 rounded-2xl"
            type="submit"
          >
            Add Money
          </button>
        </form>
      </div>
    </div>

    <!-- add money end  -->

    <!-- cash out start -->
    <div id="cash_out_section" class="mx-w-lg p-3">
      <h3 class="text-2xl font-bold my-2">Cash Out</h3>
      <div>
        <form
          id="cashOutForm"
          class="fieldset bg-base-200 border-base-300 rounded-box border p-4 bg-white"
        >
          <!-- <label class="text-md font-semibold" for="bank_select">Select A Bank</label>
          <select id="bank_select" class="select w-full rounded-3xl border-none bg-[#f4f5f7] text-gray-500" required>
            <option disabled selected>Pick a Bank</option>
            <option>Islamic Bank</option>
            <option>Brac Bank</option>
            <option>Dbbl Bank</option>
            <option>Al rajhi bank</option>
          </select> -->

          <label class="text-md font-semibold" for="">Agent Number</label>
          <input
            id="agent_number"
            type="text"
            placeholder="Type here"
            class="input w-full rounded-3xl border-none bg-[#f4f5f7] text-gray-500"
            required
          />

          <label class="text-md font-semibold" for="add_amount">Amount</label>
          <input
            required
            id="remove_amount"
            type="text"
            placeholder="Type here"
            class="input w-full rounded-3xl border-none bg-[#f4f5f7] text-gray-500"
          />

          <label class="text-md font-semibold" for="pin_code">Pin Number</label>
          <label
            class="input validator w-full rounded-3xl border-none bg-[#f4f5f7] text-gray-500"
          >
            <svg
              class="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                ></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>

            <input
              id="cashout_pin"
              type="password"
              required
              placeholder="Enter 4-digit PIN"
              pattern="[0-9]{4}"
              maxlength="4"
              minlength="4"
              inputmode="numeric"
              title="PIN must be exactly 4 digits"
            />
          </label>

          <p class="validator-hint hidden">PIN must be exactly 4 digits</p>

          <button
            id="withdraw"
            class="btn btn-primary text-white mt-4 rounded-2xl"
            type="submit"
          >
            Withdraw Money
          </button>
        </form>
      </div>
    </div>
    <!-- cash out end -->
    <!-- transfer money start -->
    <div id="transfer_money_section" class="mx-w-lg p-3 hidden">
      <h3 class="text-2xl font-bold my-2">Transfer Money</h3>
      <div>
        <form
          id="transferMoneyForm"
          class="fieldset bg-base-200 border-base-300 rounded-box border p-4 bg-white"
        >
          <label class="text-md font-semibold" for="user_account_number"
            >User Account Number</label
          >
          <input
            id="user_account_number"
            type="text"
            placeholder="Enter 11 digit number"
            class="input w-full rounded-3xl border-none bg-[#f4f5f7] text-gray-500"
            required
          />

          <label class="text-md font-semibold" for="transfer_amount"
            >Amount</label
          >
          <input
            id="transfer_amount"
            type="text"
            placeholder="Enter amount to transfer"
            class="input w-full rounded-3xl border-none bg-[#f4f5f7] text-gray-500"
            required
          />

          <label class="text-md font-semibold" for="transfer_pin"
            >Pin Number</label
          >
          <label
            class="input validator w-full rounded-3xl border-none bg-[#f4f5f7] text-gray-500"
          >
            <svg
              class="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                ></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>

            <input
              id="transfer_pin"
              type="password"
              required
              placeholder="Enter 4 digit pin number"
              pattern="[0-9]{4}"
              maxlength="4"
              minlength="4"
              inputmode="numeric"
              title="PIN must be exactly 4 digits"
            />
          </label>

          <p class="validator-hint hidden">PIN must be exactly 4 digits</p>

          <button
            id="send_now_btn"
            class="btn btn-primary text-white mt-4 rounded-2xl"
            type="submit"
          >
            Send Now
          </button>
        </form>
      </div>
    </div>
    <!-- transfer money end -->
    <!-- get bonus start -->
    <div id="get_bonus_section" class="mx-w-lg p-3 hidden">
      <h3 class="text-2xl font-bold my-2">Get Bonus</h3>
      <div>
        <form
          id="getBonusForm"
          class="fieldset bg-base-200 border-base-300 rounded-box border p-4 bg-white"
        >
          <label class="text-md font-semibold" for="bonus_coupon"
            >Enter Bonus Coupon</label
          >
          <input
            id="bonus_coupon"
            type="text"
            placeholder="Enter your coupon"
            class="input w-full rounded-3xl border-none bg-[#f4f5f7] text-gray-500"
            required
          />

          <button
            id="get_bonus_btn"
            class="btn btn-primary text-white mt-4 rounded-2xl"
            type="submit"
          >
            Get Bonus
          </button>
        </form>
      </div>
    </div>
    <!-- get bonus end -->
    <!-- pay bill start -->
    <div id="pay_bill_section" class="mx-w-lg p-3 hidden">
      <h3 class="text-2xl font-bold my-2">Pay Bill</h3>
      <div>
        <form
          id="payBillForm"
          class="fieldset bg-base-200 border-base-300 rounded-box border p-4 bg-white"
        >
          <label class="text-md font-semibold" for="bill_type"
            >Select To Pay</label
          >
          <select
            id="bill_type"
            class="select w-full rounded-3xl border-none bg-[#f4f5f7] text-gray-500"
            required
          >
            <option value="" disabled selected>Select bank / bill type</option>
            <option>Electricity Bill</option>
            <option>Gas Bill</option>
            <option>Water Bill</option>
            <option>Internet Bill</option>
          </select>

          <label class="text-md font-semibold" for="biller_account_number"
            >Biller Account Number</label
          >
          <input
            id="biller_account_number"
            type="text"
            placeholder="Enter account number"
            class="input w-full rounded-3xl border-none bg-[#f4f5f7] text-gray-500"
            required
          />

          <label class="text-md font-semibold" for="pay_amount"
            >Amount to Pay</label
          >
          <input
            id="pay_amount"
            type="text"
            placeholder="Add Amount to pay"
            class="input w-full rounded-3xl border-none bg-[#f4f5f7] text-gray-500"
            required
          />

          <label class="text-md font-semibold" for="pay_bill_pin"
            >Pin Number</label
          >
          <label
            class="input validator w-full rounded-3xl border-none bg-[#f4f5f7] text-gray-500"
          >
            <svg
              class="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                ></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>

            <input
              id="pay_bill_pin"
              type="password"
              required
              placeholder="Enter 4 digit pin number"
              pattern="[0-9]{4}"
              maxlength="4"
              minlength="4"
              inputmode="numeric"
              title="PIN must be exactly 4 digits"
            />
          </label>

          <p class="validator-hint hidden">PIN must be exactly 4 digits</p>

          <button
            id="pay_now_btn"
            class="btn btn-primary text-white mt-4 rounded-2xl"
            type="submit"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
    <!-- pay bill end -->
    <!-- transactions start -->
    <div id="transactions_section" class="mx-w-lg p-3 hidden">
      <div class="p-3 my-2">
        <div class="flex justify-between items-center">
            <h3 class="text-2xl font-bold">Transaction History</h3>
        <button class="text-sm text-gray-400">View All</button>
        </div>
        <div id="transactions_history" class="mt-3 flex flex-col items-center gap-2">
        </div>
      </div>
    </div>
    <!-- transactions end -->
    <!-- form section end -->
    <script src="./js/main.js"></script>
  </body>
</html>
