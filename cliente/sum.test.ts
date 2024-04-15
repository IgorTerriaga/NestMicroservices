import sum from "./sum";

describe('Math', () => {
    it('Should be able to sum A and B', () => {
        expect(sum(2,3)).toBe(5);
    });
    // it('Should be fail', () => {
    //     expect(sum(2,3)).toBe(6);
    // });
});