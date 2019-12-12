'use strict'
const assert = require('assert')

describe('Second Test Group', () => {
  it('gets the title of GitHub toppage', () => {
    browser.url('https://github.com/');
    browser.maximizeWindow();
    const titlegood = browser.getTitle();
    expect(titlegood).toEqual("The world\’s leading software development platform · GitHub");
  })
})
