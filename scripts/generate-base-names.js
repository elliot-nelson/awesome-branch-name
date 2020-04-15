#!/usr/bin/env node

// Using the MtG list of all card names, produce a list of possible awesome base names,
// scored by how pleasing the name is to see and hear.

'use strict';

const fs = require('fs');
const syllable = require('syllable');

function getCardNames() {
  return Object.keys(require('../allcards.json'));
}

function getBranchName(cardName) {
  return cardName
    .split(' ')
    .map(part => part.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''))
    .filter(part => part.length)
    .join('-');
}

function generateScore(name) {
  let points = 50;

  // Reward names that are four syllables long, with partial credit for names
  // somewhere in the 2-6 syllable range.
  const syllableOffset = Math.abs(syllable(name) - 4);
  const syllablePoints = [25, 20, 10];
  points += syllablePoints[syllableOffset] || 0;

  // Names with 4 consecutive consonants get a penalty, with a much smaller
  // penalty for names with 3 consecutive consonants. This prioritizes
  // simpler sounding words - "avenging" is prioritized over "abstract".
  const segments = name.split(/[aeiouy-]/);
  points -= segments.filter(segment => segment.length >= 4).length * 5;
  points -= segments.filter(segment => segment.length === 3).length * 2;

  return points;
}

function generateBaseNames() {
  let names = getCardNames().map(name => getBranchName(name));
  let withScores = names.map(name => ({ name, score: generateScore(name) }));

  console.log(`Loaded ${names.length} possible names, based on card names.`);

  fs.writeFileSync('data/base-names.json', JSON.stringify(withScores));
}

generateBaseNames();
