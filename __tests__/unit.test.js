// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
describe('TestIsPhoneNumber', () => {
    test("Invalid phone number 1", () => {
        expect(functions.isPhoneNumber("(123)-4566-7890")).toBe(true);
    })

    test("Invalid phone number 2", () => {
        expect(functions.isPhoneNumber("1234567")).toBe(false);
    })

    test("Valid phone number 1", () => {
        expect(functions.isPhoneNumber("(123)-456-7890")).toBe(true);
    })
    
    test("Valid phone number 2", () => {
        expect(functions.isPhoneNumber("(858)-210-2201")).toBe(true);
    })
});

describe('TestIsEmail', () => {
    test("Invalid email 1", () => {
        expect(functions.isEmail("aaaaa.com")).toBe(false);
    })
    
    test("Invalid email 2", () => {
        expect(functions.isEmail("@aaa@.com")).toBe(false);
    })

    test("Valid email 1", () => {
        expect(functions.isEmail("jiy@gmail.com")).toBe(true);
    })
    
    test("Valid email 2", () => {
        expect(functions.isEmail("jiy014@ucsd.edu")).toBe(true);
    })
});

describe('TestIsStrongPassword', () => {
    test("Invalid password 1", () => {
        expect(functions.isStrongPassword("a")).toBe(false);
    })
    
    test("Invalid password 2", () => {
        expect(functions.isStrongPassword("0123")).toBe(false);
    })
    
    test("Valid password 1", () => {
        expect(functions.isStrongPassword("PassWoRd")).toBe(true);
    })
    
    test("Valid password 2", () => {
        expect(functions.isStrongPassword("aAabBb_cCc")).toBe(true);
    })
});

describe('TestIsDate', () => {
    test("Invalid date 1", () => {
        expect(functions.isDate("1/2/34")).toBe(false);
    })
    
    test("Invalid date 2", () => {
        expect(functions.isDate(null)).toBe(false);
    })

    test("Valid date 1", () => {
        expect(functions.isDate("1/2/2022")).toBe(true);
    })
    
    test("Valid date 2", () => {
        expect(functions.isDate("01/02/2022")).toBe(true);
    })
});

describe('TestIsHexColor', () => {
    test("Invalid color 1", () => {
        expect(functions.isHexColor("null")).toBe(false);
    })
    
    test("Invalid color 2", () => {
        expect(functions.isHexColor("#lllll")).toBe(false);
    })

    test("Valid color 1", () => {
        expect(functions.isHexColor("#000000")).toBe(true);
    })
    
    test("Valid color 2", () => {
        expect(functions.isHexColor("#ffffff")).toBe(true);
    })
});