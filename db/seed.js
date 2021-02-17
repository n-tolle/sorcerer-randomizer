const seedData = require('./characterData');

let seedOptions = function() {
  let options = [{type: 'characters', name: 'Ariapses'}, {type: 'characters', name: 'Tegu'}, {type: 'characters', name: 'Miselda'}, {type: 'characters', name: 'Zevrane'}, {type: 'characters', name: 'Virgiliu'}, {type: 'characters', name: 'Seth'}, {type: 'characters', name: 'Jaleesa'}, {type: 'characters', name: 'Raganhar'}, {type: 'characters', name: 'Thenoch'}, {type: 'characters', name: 'Wachiwi'}, {type: 'characters', name: 'Sigismund'}, {type: 'characters', name: 'Tatsu'}, {type: 'characters', name: 'Merlin'}, {type: 'characters', name: 'Nicodemus'}, {type: 'lineages', name: 'Animist'}, {type: 'lineages', name: 'Demonologist'}, {type: 'lineages', name: 'Bloodlord'}, {type: 'lineages', name: 'Necromancer'}, {type: 'lineages', name: 'Druid'}, {type: 'lineages', name: 'House of Petro'}, {type: 'lineages', name: 'Children of Alyisia'}, {type: 'lineages', name: 'Sword of Gabriel'}, {type: 'domains', name: 'Haunted Forest'}, {type: 'domains', name: 'Forgotten Temple'}, {type: 'domains', name: 'Outcast Sanctuary'}, {type: 'domains', name: 'Screaming Coast'}, {type: 'domains', name: 'Bloodsoaked Fjord'}, {type: 'domains', name: 'Forsaken Church'}, {type: 'domains', name: 'Lunatic Asylum'}, {type: 'domains', name: 'Royal Palace'}, {type: 'domains', name: 'Witch Mountain'}, {type: 'domains', name: 'Bewitched Woodland'}, {type: 'domains', name: 'Bloodcursed Ship'}, {type: 'domains', name: 'Forlorn Opera House'}, {type: 'boards', name: 'London ~ Whitechapel'}, {type: 'boards', name: 'London ~ Southwark'}, {type: 'boards', name: 'London ~ Old London'}, {type: 'boards', name: 'Underground ~ Hive'}, {type: 'boards', name: 'Luxor ~ Karnak Temple'}, {type: 'boards', name: 'Cairo ~ Old City'}, {type: 'boards', name: 'Giza ~ Necropolis'}];

  let completion = 0;
  for (let i = 0; i < options.length; i++) {
    seedData.determineExistence(options[i].name, (err, found) => {
      if (err) {
        console.log('Problem Determining Existence: ', err);
      } else {
        if (!found) {
          seedData.save({type: options[i].type, name: options[i].name, selected: false}, (err, characterOption) => {
            if (err) {
              console.log('Problem seeding character: ', err);
            } else {
              completion++;
              if (completion === options.length) {
                console.log('Seeding Complete');
                return;
              }
            }
          })
        } else {
          completion++;
          if (completion === options.length) {
            console.log('Seeding Complete');
            return;
          }
        }
      }
    })
  }
};

seedOptions();