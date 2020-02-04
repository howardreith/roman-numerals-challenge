const convertArabicToRoman = require('./workspace');
const expect = require('chai').expect;
const numerals = require('./numerals');

describe('convertArabicToRoman should', () => {
    for (let i = 0; i < 1000; i++) {
        it(`return ${numerals[i]} for ${i+1}`, () => {
            expect(convertArabicToRoman(i+1), `Failed at number ${i+1}`).to.eq(numerals[i])
        })
    }
});