document.getElementById("blog-btn").addEventListener("click", function () {
  console.log("blog btn clicked");
  window.location.href = "../blog.html";
});

//
function toggleActiveButton(activeBtn, inactiveBtn) {
  activeBtn.classList.add("btn-active");
  inactiveBtn.classList.remove("btn-active");
}

//
// Current Balance Element
let currentBalance = document.getElementById("balance");

// Function to handle donation for each card
function handleDonation(cardId, donationAmountId, cardBalanceId) {
  const donateButton = document.getElementById(cardId);
  donateButton.addEventListener("click", function () {
    console.log(`${cardId} clicked`);

    // Get the donation amount entered
    const donationAmount = document.getElementById(donationAmountId).value;

    // Get the current card balance for this card
    const cardBalance = document.getElementById(cardBalanceId).innerText;

    // Convert both values to numbers
    const donationNumber = parseFloat(donationAmount);
    const cardBalanceNumber = parseFloat(cardBalance);
    const currentBalanceNumber = parseFloat(currentBalance.innerText);

    // Check if the donation is valid (positive and not more than current balance)
    if (donationNumber > 0 && donationNumber <= currentBalanceNumber) {
      // Update the card's balance
      const newCardBalance = donationNumber + cardBalanceNumber;
      document.getElementById(cardBalanceId).innerText = newCardBalance;

      // Update the user's overall balance
      const newOverallBalance = currentBalanceNumber - donationNumber;
      currentBalance.innerText = newOverallBalance;

      alert(
        `You donated ${donationNumber} BDT. New card balance: ${newCardBalance} BDT. New overall balance: ${newOverallBalance} BDT.`
      );
    } else {
      alert("Invalid donation amount or insufficient balance.");
    }
  });
}

// Handling donations for each card individually
handleDonation("donate1", "donationAmount1", "card1Balance");
handleDonation("donate2", "donationAmount2", "card2Balance");
handleDonation("donate3", "donationAmount3", "card3Balance");

//
