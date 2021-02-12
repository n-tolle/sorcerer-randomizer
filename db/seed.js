const seedData = require('./characterData');

let seedOptions = function() {
  let characters = ['Ariapses', 'Tegu', 'Miselda', 'Zevrane', 'Virgiliu', 'Seth', 'Jaleesa', 'Raganhar', 'Thenoch', 'Wachiwi', 'Sigismund', 'Tatsu', 'Merlin', 'Nicodemus'];
  let lineages = ['Animist', 'Demonologist', 'Bloodlord', 'Necromancer', 'Druid', 'House of Petro', 'Children of Alyisia', 'Sword of Gabriel'];
  let domains = ['Haunted Forest', 'Forgotten Temple', 'Outcast Sanctuary', 'Screaming Coast', 'Bloodsoaked Fjord', 'Forsaken Church', 'Lunatic Asylum', 'Royal Palace', 'Witch Mountain', 'Bewitched Woodland', 'Bloodcursed Ship', 'Forlorn Opera House'];
  let boards = ['London ~ Whitechapel', 'London ~ Southwark', 'London ~ Old London', 'Underground ~ Hive', 'Luxor ~ Karnak Temple', 'Cairo ~ Old City', 'Giza ~ Necropolis'];

  let characterCompletion = 0;
  for (let i = 0; i < characters.length; i++) {
    seedData.determineExistence(characters[i], (err, found) => {
      if (err) {
        console.log('Problem Determining Existence: ', err);
      } else {
        if (!found) {
          seedData.save({type: characters, name: characters[i], selected: false}, (err, characterOption) => {
            if (err) {
              console.log('Problem seeding character: ', err);
            } else {
              characterCompletion++;
              if (characterCompletion === characters.length) {
                console.log('Character Seeding Complete');
              }
            }
          })
        } else {
          characterCompletion++;
          if (characterCompletion === characters.length) {
            console.log('Character Seeding Complete');
          }
        }
      }
    })
  }
}

seedOptions();