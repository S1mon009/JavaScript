import $ from "jquery";

$(window).on("load", function () {
  let condition = ["", ""],
    score = [0, 0],
    winningCondition = [
      ["rock", "scissors"],
      ["paper", "rock"],
      ["scissors", "paper"],
    ],
    choice = ["rock", "paper", "scissors"];

  function updateChoiceIcon(choose) {
    if (choose === "rock") {
      return "fa-hand-back-fist";
    } else if (choose === "paper") {
      return "fa-hand";
    } else if (choose === "scissors") {
      return "fa-hand-scissors";
    } else if (choose === "") {
      return "";
    }
  }
  function updateData() {
    generateChoice();
    checkWinner();
    updateScore();
  }
  function generateChoice() {
    condition[1] = choice[Math.floor(Math.random() * (3 - 0) + 0)];
  }
  function checkWinner() {
    for (const winningConditionItem of winningCondition) {
      if (condition[0] === condition[1]) {
        break;
      }
      if (
        winningConditionItem[0] === condition[0] &&
        winningConditionItem[1] === condition[1]
      ) {
        score[0]++;
        break;
      }
      if (
        winningConditionItem[0] === condition[1] &&
        winningConditionItem[1] === condition[0]
      ) {
        score[1]++;
        break;
      }
    }
    if (score[0] === 3) {
      $(".popup").show();
      $(".popup-text").text("User won!");
    } else if (score[1] === 3) {
      $(".popup").show();
      $(".popup-text").text("Computer won!");
    }
  }
  function updateScore() {
    $(".user-choice").html(
      `<i class="fa-solid ${updateChoiceIcon(condition[0])}"></i>`
    );
    $(".computer-choice").html(
      `<i class="fa-solid ${updateChoiceIcon(condition[1])}"></i>`
    );
    $(".score").text(`${score[0]} - ${score[1]}`);
  }

  $('[data-rock="rock"]').on("click", function () {
    condition[0] = this.dataset.rock;
    updateData();
  });
  $('[data-paper="paper"]').on("click", function () {
    condition[0] = this.dataset.paper;
    updateData();
  });
  $('[data-scissors="scissors"]').on("click", function () {
    condition[0] = this.dataset.scissors;
    updateData();
  });
  $(".restart-btn").on("click", function () {
    score = [0, 0];
    condition = ["", ""];
    $(".user-choice").html(``);
    $(".computer-choice").html(``);
    $(".score").text(`${score[0]} - ${score[1]}`);
    $(".popup").hide();
  });
});
