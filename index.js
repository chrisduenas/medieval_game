let rl = require('readline-sync'),
MAX = 20, MIN = 0, value = 10, key;
// weapon assignments
// let dragon = 'questions'
let weapon = [
    {
      'name': 'spear',
      'symbol': '🔱'
    },
    {
      'name': 'knife',
      'symbol': '🔪'
    },
    {
     'name': 'dagger',
     'symbol':'🗡️'
    },
    {
     'name': 'crossbow',
     'symbol': '🏹'
   }];
//Math Game Questions
function randomize() {
 randomQ = (Math.floor(Math.random() * 5 + 5));
 randomR = (Math.floor(Math.random() * 5));
 randomS = (Math.floor(Math.random() * 5));
};

// Game Initializes
      console.log("\n\nWelcome to Camelot!");
      let traveler = rl.question('\n\nWhat is your name, traveler?'); // question 1
      console.log("\n\n\nGreetings " + traveler + " ! ");

    let quest = rl.question('\nAre you ready for a quest?', { // question 2
        trueValue: ['y', 'yes', 'yeah', 'yep', 'sure',],
        falseValue: ['n', 'no', 'nope', 'nah', 'never']
      });

      if (quest === true) {
        console.log( "\nThat's the spirit!" );
      } else {
        console.log("\nBrace Yourself!");
      }

      let dragon = rl.question("\n\nHave you ever fought a dragon?", {
          trueValue: ['y', 'yes', 'yeah', 'yep', 'sure',],
          falseValue: ['n', 'no', 'nope', 'nah', 'never']
        });

          if (dragon === true) {
            console.log( "\n\nChallenge accepted" );
          } else if (dragon === false) {
            console.log( "\n\nThis might be challenging!" );
          }

      // Game continues in a loop
      let keepPlaying = 'y';
        while(keepPlaying === 'y') {
          randomize();
          console.log("Please select a weapon:")
  let weaponArray = ['🔱','🔪','🗡️','🏹'];
  let index = rl.keyInSelect(weaponArray, 'Which shall you choose?');
  let myWeapon = weapon[index];
          console.log('\n\nYou now wield a ' + myWeapon['name'] + '!');



  console.log('\n\n' + 'Quick! Use the keys to enter the solution ' + '   (' + `${randomQ}` +  ' + '  + `${randomR}` + ' - ' + `${randomS}` + ')'); // move this to you vs dragon
  console.log('\n\n' + (new Array(20)).join(' ') +
    '[You] VS [Dragon]  \n\n' + 'Left = Z \n' + 'Right = X \n' + '\n' + 'Space = Enter' + '\n');
  while (true) {
    console.log('\x1B[1A\x1B[K|' +
      (new Array(value + 1)).join('-') + myWeapon["symbol"] +
      (new Array(MAX - value + 1)).join('-') + '🐉 ' + value);
    key = rl.keyIn('',
      {hideEchoBack: true, mask:'', limit: 'zx '});
    if (key === 'z') { if (value > MIN) { value--; } }
    else if (key === 'x') { if (value < MAX) { value++; } }
    else { break; }
  }



      if (value === (randomQ + randomR - randomS)) {
        console.log('\nYou Won!');

      } else {
        console.log('\nYou Died!');
      }

keepPlaying = rl.question('\n\nKeep playing? y/n');
}
