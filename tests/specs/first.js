'use strict'
const assert = require('assert')
describe('First Test Group', () => {
  it('gets the title of MDN toppage', () => {
    const title = browser.url('https://developer.mozilla.org/en-US/');
    browser.maximizeWindow();
    const titlegood = browser.getTitle();
    expect(titlegood).toEqual("MDN Web Docs");
  })
})
