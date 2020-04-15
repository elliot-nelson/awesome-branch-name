'use strict';

function getBreakpoint() {
  // Today the best possible score is 75 points.
  //
  //   80% - cards with 69+ points
  //   15% - cards with 60+ points
  //    5% - cards with 50+ points
  //
  //

  let dice = Math.random();
  if (dice < 0.05) {
    return 50;
  } else if (dice < 0.2) {
    return 60;
  } else {
    return 69;
  }
}

function getRandomBranchName() {
  const names = require('./data/base-names');
  const breakpoint = getBreakpoint();
  let possible = names.filter(name => name.score >= breakpoint);
  return possible[Math.floor(Math.random() * possible.length)].name;
}

function insertKeyword(name, keyword) {
  let parts = name.split('-');

  for (let choice of ['the', 'a', 'an', 'as', 'of', 'in', 'is', 'for']) {
    if (parts.indexOf(choice) >= 0) {
      parts[parts.indexOf(choice)] = keyword;
      return parts.join('-');
    }
  }

  if (parts.length === 1) {
    parts.unshift(keyword);
    return parts.join('-');
  }

  if (parts.length === 2) {
    parts = [parts[0], keyword, parts[1]];
    return parts.join('-');
  }

  let minLength = Math.min(...parts.map(part => part.length));
  for (let i = parts.length - 1; i >= 0; i--) {
    if (parts[i].length === minLength) {
      parts[i] = keyword;
      return parts.join('-');
    }
  }
}

function awesomeBranchName(keyword) {
  let name = getRandomBranchName();
  if (keyword) {
    name = insertKeyword(name, keyword);
  }

  return name;
}

module.exports = awesomeBranchName;
