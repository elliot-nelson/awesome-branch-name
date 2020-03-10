'use strict';

const animal = [
  'kitten',
  'shark',
  'crab',
  'dragon',
  'kraken',
  'cobra',
  'iguana',
  'goose',
  'badger',
  'lemming',
  'lizard',
  'manatee',
  'narwhal',
  'penguin',
  'hedgehog',
  'hippo',
  'turtle',
  'woodchuck',
  'walrus',
  'tuna',
  'elephant',
  'chimera',
  'godzilla',
  'tanuki',
  'jackalope',
  'monkey'
];

const career = [
  'ninja',
  'pirate',
  'ghost',
  'zombie',
  'robot',
  'wizard',
  'scholar',
  'jedi'
];

const suffix = [
  'rainbow',
  'laser',
  'cannon',
  'torpedo',
  'thunder',
  'lightning',
  'festival',
  'party',
  'cave',
  'balloon',
  'power',
  'gift',
  'splat',
  'wedding',
  'garbage',
  'crystal',
  'machine',
  'enclave',
  'banquet',
  'spree',
  'feast',
  'battle',
  'blast',
  'explosion'
];

const prefix = [
  'zany',
  'clever',
  'fancy',
  'wacky',
  'absurd',
  'logical',
  'wise',
  'old',
  'shiny',
  'monster',
  'super',
  'chonky',
  'mountain',
  'valley',
  'water',
  'fire',
  'earth',
  'metal',
  'trumpet',
  'piano',
  'keyboard',
  'artificial',
  'original',
  'gleeful',
  'oblong'
];

function random(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function awesomeBranchName(subject) {
  let options = [
    [random(prefix), subject || random(animal), random(suffix)],
    [random(prefix), subject || random(animal), random(suffix)],
    [subject || random(prefix), random(animal), random(suffix)],
    [subject || random(animal), random(suffix), random(suffix)],
    [random(animal), subject || random(suffix), random(career)],
    [subject || random(prefix), random(career), random(suffix)],
    [random(suffix), subject || random(suffix), random(suffix)],
    [random(prefix), subject || random(suffix), random(suffix)]
  ].filter(option => {
    return new Set(option).size === option.length;
  });

  return random(options).join('-');
}

module.exports = awesomeBranchName;
