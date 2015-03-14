describe("ArrayHelfer", function () {
    var zahlen = [];

    beforeEach(function () {
        zahlen = [4, 8, 47, 27, 56, 4, 5];
    });

    describe("#max()", function () {
        it("soll die höchste Zahl in einem Array zurückgeben", function () {
            expect(ArrayHelfer.max(zahlen)).toEqual(56);
        });
    });

    describe("#min()", function () {
        it("soll die niedrigste Zahl in einem Array zurückgeben", function () {
            expect(ArrayHelfer.min(zahlen)).toEqual(4);
        });
    });
});
