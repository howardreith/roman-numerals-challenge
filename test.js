const convertArabicToRoman = require('./workspace');
const expect = require('chai').expect;

describe('convertArabicToRoman should', () => {
    it('return I for 1', () => {
        expect(convertArabicToRoman(1)).to.eq('I')
    });

    it('return II for 2', () => {
        expect(convertArabicToRoman(2)).to.eq('II')
    });

    it('return III for 3', () => {
        expect(convertArabicToRoman(3)).to.eq('III')
    });

    it('return IV for 4', () => {
        expect(convertArabicToRoman(4)).to.eq('IV')
    });

    it('return V for 5', () => {
        expect(convertArabicToRoman(5)).to.eq('V')
    });

    it('return VI for 6', () => {
        expect(convertArabicToRoman(6)).to.eq('VI')
    });

    it('return VII for 7', () => {
        expect(convertArabicToRoman(7)).to.eq('VII')
    });

    it('return VIII for 8', () => {
        expect(convertArabicToRoman(8)).to.eq('VIII')
    });

    it('return IX for 9', () => {
        expect(convertArabicToRoman(9)).to.eq('IX')
    });

    it('return X for 10', () => {
        expect(convertArabicToRoman(10)).to.eq('X')
    });

    it('return XI for 11', () => {
        expect(convertArabicToRoman(11)).to.eq('XI')
    });

    it('return XIV for 14', () => {
        expect(convertArabicToRoman(14)).to.eq('XIV')
    });

    it('return XV for 15', () => {
        expect(convertArabicToRoman(15)).to.eq('XV')
    });

    it('return XVI for 16', () => {
        expect(convertArabicToRoman(16)).to.eq('XVI')
    });

    it('return XIX for 19', () => {
        expect(convertArabicToRoman(19)).to.eq('XIX')
    });

    it('return XX for 20', () => {
        expect(convertArabicToRoman(20)).to.eq('XX')
    });

    it('return XXV for 25', () => {
        expect(convertArabicToRoman(25)).to.eq('XXV')
    });

    it('return XXIX for 29', () => {
        expect(convertArabicToRoman(29)).to.eq('XXIX')
    });

    it('return XXX for 30', () => {
        expect(convertArabicToRoman(30)).to.eq('XXX')
    });

    it('return XL for 40', () => {
        expect(convertArabicToRoman(40)).to.eq('XL')
    });

    it('return XLI for 41', () => {
        expect(convertArabicToRoman(41)).to.eq('XLI')
    });

    it('return XLVIII for 48', () => {
        expect(convertArabicToRoman(48)).to.eq('XLVIII')
    });

    it('return XLIX for 49', () => {
        expect(convertArabicToRoman(49)).to.eq('XLIX')
    });

    it('return L for 50', () => {
        expect(convertArabicToRoman(50)).to.eq('L')
    });

    it('return LI for 51', () => {
        expect(convertArabicToRoman(51)).to.eq('LI')
    });

    it('return LX for 60', () => {
        expect(convertArabicToRoman(60)).to.eq('LX')
    });

    it('return XC for 90', () => {
        expect(convertArabicToRoman(90)).to.eq('XC')
    });

    it('return XCIX for 99', () => {
        expect(convertArabicToRoman(99)).to.eq('XCIX')
    });

    it('return C for 100', () => {
        expect(convertArabicToRoman(100)).to.eq('C')
    });

    it('return CI for 101', () => {
        expect(convertArabicToRoman(101)).to.eq('CI')
    });

    it('return CXI for 111', () => {
        expect(convertArabicToRoman(111)).to.eq('CXI')
    });

    it('return CL for 150', () => {
        expect(convertArabicToRoman(150)).to.eq('CL')
    });

    it('return CLV for 155', () => {
        expect(convertArabicToRoman(155)).to.eq('CLV')
    });

    it('return CXCIX for 199', () => {
        expect(convertArabicToRoman(199)).to.eq('CXCIX')
    });

    it('return CC for 200', () => {
        expect(convertArabicToRoman(200)).to.eq('CC')
    });

    it('return CD for 400', () => {
        expect(convertArabicToRoman(400)).to.eq('CD')
    });

    it('return CDXLIX for 449', () => {
        expect(convertArabicToRoman(449)).to.eq('CDXLIX')
    });

    it('return D for 500', () => {
        expect(convertArabicToRoman(500)).to.eq('D')
    });

    it('return CM for 900', () => {
        expect(convertArabicToRoman(900)).to.eq('CM')
    });

    it('return CMXCIX for 999', () => {
        expect(convertArabicToRoman(999)).to.eq('CMXCIX')
    });

    it('return M for 1000', () => {
        expect(convertArabicToRoman(1000)).to.eq('M')
    })
});