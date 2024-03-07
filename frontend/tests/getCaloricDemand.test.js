const { DogCharacteristics, CaloricDemand, getCaloricDemand } = require('../script/caloriesCalculator.js');

test('should return for small dog', () => {
    let smallDog = new DogCharacteristics(0, 7, true, 5, 3, false);

    let result = getCaloricDemand(smallDog);

    expect(result.lowerLimit).toBe(687);
    expect(result.higherLimit).toBe(717);
});
