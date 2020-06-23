import { MathController } from './math.controller';

describe('MathController', () => {
    let mathController: MathController;

    beforeEach(() => {
        mathController = new MathController();
    });

    describe('sum', () => {
        it('should return sum of items', () => {
            expect(mathController.test()).toBe(15);
        });
    });
});
