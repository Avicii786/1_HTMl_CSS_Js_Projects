// Get DOM elements
const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const filterBtn = document.getElementById("filter");
const sortBtn = document.getElementById("sort");
const sumBtn = document.getElementById("sum");

//  initalize user data array
let data = [];

// -----------------Fetch Random user from randomuser.me-----------
async function getRandomUser() {
  // wait for the results from API
  const res = await fetch("https://randomuser.me/api");
  // wait for response to convert into json
  const data = await res.json();
  //   Get the user Data
  const user = data.results[0];
  //   create the New user
  const newUser = {
    name: `${user.name.title} ${user.name.first} ${user.name.last}`,
    balance: Math.floor(Math.random() * 1000000),
  };
  //   add the new user to the data array
  addData(newUser);
}

// ------------Function to add user data to data array-------------------
function addData(newUser) {
  // add the new user into data array
  data.push(newUser);

  // update the dom to display user in the data array
  updateDOM();
}

// ----------Function to double money of all users-----------------------
function doubleMoney() {
  data = data.map((user) => {
    return { ...user, balance: user.balance * 2 };
  });
  updateDOM();
}

// --------------Function to filter Millioners---------------------------
function filterUser() {
  data = data.filter((user) => user.balance >= 1000000);
  // updata dom
  updateDOM(data);
}

// ------------- Function to sort users balance-------------------------
function sortByBalance() {
  // sort user data balance using the wealth
  data = data.sort((a, b) => a.balance - b.balance);
  updateDOM();
}

// ------Function to sum all the users balance into total balance------
function totalBalance() {
  updateDOM();
  const balance = data.reduce((acc, user) => (acc += user.balance), 0);
  const balanceElement = document.createElement("div");
  balanceElement.innerHTML = `<h3>Total Balance: <strong>${formatNumberToDollar(
    balance
  )}</strong></h3>`;
  main.appendChild(balanceElement);
}

// -----------Function to format random numeber as money----------------
function formatNumberToDollar(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

// ----------- Update the UI with data from the user data array----------
function updateDOM(userData = data) {
  // Clear previous data
  main.innerHTML = "<h2><strong>User</strong> Wealth</h2>";
  //   Loop through user data and render in the UI
  userData.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");
    // Add inner HTMl to the user div
    userDiv.innerHTML = `<strong>${user.name}</strong> 
                            ${formatNumberToDollar(user.balance)}`;
    // Add the new element to Dom
    main.appendChild(userDiv);
  });
}

// --------------------------------------
// Event Listeners
// ------------------------------
// Add User Event
addUserBtn.addEventListener("click", getRandomUser);
// Double btn Event
doubleBtn.addEventListener("click", doubleMoney);
// Filter Millioner event
filterBtn.addEventListener("click", filterUser);
// Sort by Wealth Event
sortBtn.addEventListener("click", sortByBalance);
// Sum of all users
sumBtn.addEventListener("click", totalBalance);

getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();
