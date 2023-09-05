// document.addEventListener('DOMContentLoaded', function() {
//     var playButton = document.getElementById('button02');
//     var selectedCards = document.querySelectorAll('.card002');
//     var cardContainer = document.getElementById('cardContainer');
//     var automatedCard = document.getElementById('automatedCard');
//     var messageElement = document.getElementById('manu');
//     var selectedCard = null;
  
//     playButton.addEventListener('click', function() {
//       if (!selectedCard) {
//         messageElement.textContent = 'Please select any card';
//       } else {
//         cardContainer.classList.add('animated');
  
//         setTimeout(function() {
//           cardContainer.classList.remove('animated');
//           automatedCard.classList.remove('hidden');
  
//           var randomIndex = Math.floor(Math.random() * 10);
//           var selectedCardImgSrc = selectedCard.getAttribute('src');
//           var randomCardImgSrc = document.getElementById('card' + randomIndex).querySelector('img').getAttribute('src');
  
//           automatedCard.innerHTML = '<img src="' + randomCardImgSrc + '">';
  
//           if (selectedCardImgSrc === randomCardImgSrc) {
//             messageElement.textContent = 'Congratulations! You won';
//             messageElement.style.color = "green";
//           } else {
//             messageElement.textContent = 'Sorry, you lose';
//             messageElement.style.color = "red";
//           }
  
//           selectedCard = null; // Clear the selected card after result
//         }, 3000);
//         setTimeout(function(){
//             $('#exampleModal01').modal('show');
//         },2800)

       
//       }
//     },5000);
  
//     selectedCards.forEach(function(card) {
//       card.addEventListener('click', function() {
//         if (this === selectedCard) {
//           return; // Do nothing if the same image is clicked again
//         }
  
//         selectedCards.forEach(function(card) {
//           card.classList.remove('selected');
//         });
  
//         this.classList.add('selected');
//         selectedCard = this;
//         automatedCard.innerHTML = ''; // Clear previous generated image
//         messageElement.textContent = ''; // Clear previous result message
//       });
//     });
//   });
  


  

// document.addEventListener('DOMContentLoaded', function () {
//     var playButton = document.getElementById('button02');
//     var selectedCards = document.querySelectorAll('.card002');
//     var cardContainer = document.getElementById('cardContainer');
//     var automatedCard = document.getElementById('automatedCard');
//     var messageElement = document.getElementById('manu');
//     var selectedCard = null;
//     var timerElement = document.getElementById('timer02');
//     var inputField = document.querySelector('.form01');
//     var closeBtn = document.querySelector('.close.close02'); // Close button
  
//     var timer = 20; // Initial timer value in seconds
//     var timerInterval;
  
//     // Start the timer immediately upon opening the game
//     startTimer();
  
//     function startTimer() {
//       timerInterval = setInterval(function () {
//         if (timer === 0) {
//           clearInterval(timerInterval); // Stop the timer at 0 seconds
//           showAutomatedCard();
//         } else {
//           timer--;
//           timerElement.textContent = timer;
//           if (timer === 10) {
//             // Disable input and image selection when timer reaches 10 seconds
//             inputField.disabled = true;
//             selectedCards.forEach(function (card) {
//               card.style.opacity = '0.5';
//               card.removeEventListener('click', selectCard);
//             });
//           }
//         }
//       }, 1000);
//     }
  
//     function showAutomatedCard() {
//       cardContainer.classList.add('animated');
  
//       setTimeout(function () {
//         cardContainer.classList.remove('animated');
//         automatedCard.classList.remove('hidden');
  
//         var randomIndex = Math.floor(Math.random() * 10);
//         var selectedCardImgSrc = selectedCard.getAttribute('src');
//         var randomCardImgSrc = document
//           .getElementById('card' + randomIndex)
//           .querySelector('img')
//           .getAttribute('src');
  
//         automatedCard.innerHTML = '<img src="' + randomCardImgSrc + '">';
  
//         if (selectedCardImgSrc === randomCardImgSrc) {
//           messageElement.textContent = 'Congratulations! You won';
//           messageElement.style.color = 'green';
//         } else {
//           messageElement.textContent = 'Sorry, you lose';
//           messageElement.style.color = 'red';
//         }
  
//         selectedCard = null; // Clear the selected card after result
//         // Start the timer for the next cycle
//         startTimer();
//       }, 3000);
//       setTimeout(function () {
//         $('#exampleModal01').modal('show');
//       }, 2800);
//     }
  
//     function selectCard() {
//       if (this === selectedCard) {
//         return; // Do nothing if the same image is clicked again
//       }
  
//       selectedCards.forEach(function (card) {
//         card.classList.remove('selected');
//       });
  
//       this.classList.add('selected');
//       selectedCard = this;
//       automatedCard.innerHTML = ''; // Clear previous generated image
//       messageElement.textContent = ''; // Clear previous result message
//     }
  
//     // Add an event listener to the close button to reset the game when clicked
//     closeBtn.addEventListener('click', function () {
//       resetGame();
//     });
  
//     function resetGame() {
//       clearInterval(timerInterval);
//       timer = 20;
//       timerElement.textContent = timer;
//       inputField.disabled = false;
//       selectedCards.forEach(function (card) {
//         card.style.opacity = '1';
//         card.addEventListener('click', selectCard);
//       });
//       selectedCard = null;
//       automatedCard.innerHTML = '';
//       messageElement.textContent = '';
//       // Start the timer immediately for the next cycle
//       startTimer();
//     }
  
//     selectedCards.forEach(function (card) {
//       card.addEventListener('click', selectCard);
//     });
//   });
  
  
  
document.addEventListener('DOMContentLoaded', function () {
    var playButton = document.getElementById('button02');
    var selectedCards = document.querySelectorAll('.card002');
    var cardContainer = document.getElementById('cardContainer');
    var automatedCard = document.getElementById('automatedCard');
    var messageElement = document.getElementById('manu');
    var selectedCard = null;
    var timerElement = document.getElementById('timer02');
    var timerElement01 = document.getElementById('timer01');
    var inputField = document.querySelector('.form01');
    var closeBtn = document.querySelector('.close.close02'); // Close button
  
    var timer = 150; // Initial timer value in seconds
    var timerInterval;
  
    // Start the timer immediately upon opening the game
    startTimer();
  
    function startTimer() {
      timerInterval = setInterval(function () {
        if (timer === 0) {
          clearInterval(timerInterval); // Stop the timer at 0 seconds
          showAutomatedCard();
        } else {
          timer--;
          timerElement.textContent = timer;
          if (timer === 10) {
            // Disable input and image selection when timer reaches 10 seconds
            inputField.disabled = true;
            timerElement01.style.color = 'red';
            timerElement.style.color = 'red';
            selectedCards.forEach(function (card) {
              card.style.opacity = '0.5';
              card.removeEventListener('click', selectCard);
            });
          }
        }
      }, 1000);
    }
  
    function showAutomatedCard() {
      cardContainer.classList.add('animated');
  
      setTimeout(function () {
        cardContainer.classList.remove('animated');
        automatedCard.classList.remove('hidden');
  
        var randomIndex = Math.floor(Math.random() * 10);
        var selectedCardImgSrc = selectedCard.getAttribute('src');
        var randomCardImgSrc = document
          .getElementById('card' + randomIndex)
          .querySelector('img')
          .getAttribute('src');
  
        automatedCard.innerHTML = '<img src="' + randomCardImgSrc + '">';
  
        if (selectedCardImgSrc === randomCardImgSrc) {
          messageElement.textContent = 'Congratulations! You won';
          messageElement.style.color = 'green';
        } 
        else {
          messageElement.textContent = 'Sorry, you lose';
          messageElement.style.color = 'red';
        }
  
        selectedCard = null; // Clear the selected card after result
        // Start the timer for the next cycle
        startTimer();
  
        // Show the modal after displaying the automated card
        setTimeout(function () {
          $('#exampleModal01').modal('show');
        }, 800);
      }, 500);
    }
  
    function selectCard() {
      if (this === selectedCard) {
        return; // Do nothing if the same image is clicked again
      }
  
      selectedCards.forEach(function (card) {
        card.classList.remove('selected');
      });
  
      this.classList.add('selected');
      selectedCard = this;
      automatedCard.innerHTML = ''; // Clear previous generated image
      messageElement.textContent = ''; // Clear previous result message
    }
  
    // Add an event listener to the close button to reset the game when clicked
    closeBtn.addEventListener('click', function () {
      resetGame();
      selectedCards.forEach(function (card) {
        card.classList.remove('selected');
      });
      timerElement01.style.color = '';
      timerElement.style.color = '';
    });
  
    function resetGame() {
      clearInterval(timerInterval);
      timer = 150;
      timerElement.textContent = timer;
      inputField.disabled = false;
      selectedCards.forEach(function (card) {
        card.style.opacity = '1';
        card.addEventListener('click', selectCard);
      });
      selectedCard = null;
      automatedCard.innerHTML = '';
      messageElement.textContent = '';
      // Start the timer immediately for the next cycle
      startTimer();
    }
  
    selectedCards.forEach(function (card) {
      card.addEventListener('click', selectCard);
    });
  });
  