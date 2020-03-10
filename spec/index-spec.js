'use strict';

const awesomeBranchName = require('..');

describe('awesome-branch-name', function () {
  it('generates a random string', function () {
    expect(awesomeBranchName()).toBeInstanceOf(String);
  });
});
