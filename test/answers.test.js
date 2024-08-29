import { getResistenza, getMaxFrequente, getMaxFrequenti } from "../answers/answers.js";

describe('getResistenza', () => {
    test('should return 0 for single digit numbers', () => {
        expect(getResistenza(5)).toBe(0);
        expect(getResistenza(0)).toBe(0);
        expect(getResistenza(9)).toBe(0);
    });

    test('should return correct resistance for multiple digit numbers', () => {
        expect(getResistenza(25)).toBe(2);
        expect(getResistenza(39)).toBe(3); 
        expect(getResistenza(888916)).toBe(7); 
    });

    test('should handle numbers with zeros correctly', () => {
        expect(getResistenza(101)).toBe(1); 
        expect(getResistenza(200)).toBe(1); 
    });
});

describe('getMaxFrequente', () => {
    test('should return the most frequent number', () => {
        expect(getMaxFrequente([55, 42, 88, 42, 88, 42])).toBe('42');
        expect(getMaxFrequente([1, 52, 52, 1, 56, 1, 54, 54, 1, 54])).toBe('1');
    });

    test('should return the first most frequent number in case of a tie', () => {
        expect(getMaxFrequente([52, 52, 52, 56, 54, 54, 54])).toBe('52');
        expect(getMaxFrequente([1, 1, 2, 2, 3, 3])).toBe('1'); 
    });

    test('should handle arrays with a single element', () => {
        expect(getMaxFrequente([100])).toBe('100');
    });

    test('should handle arrays with all unique elements', () => {
        expect(getMaxFrequente([1, 2, 3, 4, 5])).toBe('1');
    });
});

describe('getMaxFrequenti', () => {
    test('should return the top k most frequent numbers', () => {
        expect(getMaxFrequenti([1, 52, 52, 52, 1, 56, 1, 54, 54, 1, 54], 1)).toEqual(['1']);
        expect(getMaxFrequenti([1, 52, 52, 52, 1, 56, 1, 54, 54, 1, 54], 2)).toEqual(['1', '52']);
        expect(getMaxFrequenti([1, 52, 52, 52, 1, 56, 1, 54, 54, 1, 54], 3)).toEqual(['1', '52', '54']);
    });

    test('should handle cases where k is larger than the number of unique elements', () => {
        expect(getMaxFrequenti([1, 2, 2, 3, 3, 3], 5)).toEqual(['3', '2', '1']);
    });

    test('should return an empty array if k is 0', () => {
        expect(getMaxFrequenti([1, 2, 3], 0)).toEqual([]);
    });

    test('should return an empty array if input array is empty', () => {
        expect(getMaxFrequenti([], 1)).toEqual([]);
    });

    test('should handle ties correctly by order of appearance', () => {
        expect(getMaxFrequenti([1, 1, 2, 2, 3, 3], 2)).toEqual(['1', '2']);
    });
});