(function() {
  'use strict';

  angular
    .module('app.waiting')
    .controller('Waiting', Waiting);

    Waiting.$inject = ['gameState'];

    function Waiting(gameState) {
      var vm = this;
      //mainContent object - state: text, image
      vm.mainContent = {
        waitingForPlayers: {
          text: "Where are your friends? You've gotta have at least 3!",
          image: "http://cdn.meme.am/instances/500x/60894524.jpg" 
        },
        readyToPlay: {
          text: "Ready to play?",
          image: ""
        },
        waitingForPrompt:  {
          text: "Judge: Choose the prompt!",
          image: ""
        }

      }

    vm.currentDisplay = vm.mainContent[gameState.value];

    }

})();