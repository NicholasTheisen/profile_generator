const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {
  name: '',
  activity: '',
  music: '',
  meal: '',
  food: '',
  sport: '',
  superpower: ''
};

const askQuestion = (question, property) => {
  rl.question(question, (answer) => {
    profile[property] = answer;
    rl.prompt();
  });
};

rl.prompt();

rl.on('line', (line) => {
  switch (Object.keys(profile).length) {
    case 1:
      askQuestion("What's your name? ", 'name');
      break;
    case 2:
      askQuestion("What's an activity you like doing? ", 'activity');
      break;
    case 3:
      askQuestion("What do you listen to while doing that? ", 'music');
      break;
    case 4:
      askQuestion("Which meal is your favourite? ", 'meal');
      break;
    case 5:
      askQuestion("What's your favourite thing to eat for that meal? ", 'food');
      break;
    case 6:
      askQuestion("Which sport is your absolute favourite? ", 'sport');
      break;
    case 7:
      askQuestion("What is your superpower? ", 'superpower');
      break;
    default:
      generateProfile();
      break;
  }
});

const generateProfile = () => {
  console.log(
    `Name: ${profile.name}\n` +
    `Activity: ${profile.activity}\n` +
    `Music: ${profile.music}\n` +
    `Meal: ${profile.meal}\n` +
    `Favorite Food: ${profile.food}\n` +
    `Favorite Sport: ${profile.sport}\n` +
    `Superpower: ${profile.superpower}`
  );

  rl.close();
};