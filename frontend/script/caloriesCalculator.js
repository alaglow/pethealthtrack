const metabolicPower = 0.75;
const energy = 70;
const fewCalories = 15;

export function getCaloricDemand(dogCharacteristics) {
    let metabolicWeight = dogCharacteristics.weight ** metabolicPower;
    let energyDemand = metabolicWeight * energy;

    let factor = getFactor(dogCharacteristics);

    let finalNumber = Math.floor(energyDemand * factor);
    let lowerLimit = finalNumber - fewCalories;
    let higherLimit = finalNumber + fewCalories;

    console.log(lowerLimit);
    console.log(higherLimit);
    return new CaloricDemand(lowerLimit, higherLimit);
}

class CaloricDemand {
    constructor(lowerLimit, higherLimit) {
        this.lowerLimit = lowerLimit;
        this.higherLimit = higherLimit;
    }
}

export class DogCharacteristics {
    constructor(year, month, isFat, weight, activityLevel, isCastrated) {
        this.year = year;
        this.month = month;
        this.weight = weight;
        this.isFat = isFat;
        this.activityLevel = activityLevel;
        this.isCastrated = isCastrated;
    }
}

function getFactor(dogCharacteristics) {
    if (dogCharacteristics.year < 1) {
        if (dogCharacteristics.month < 7) {
            console.log('mniej niz 7 mies');
            return 2;
        } else {
            console.log('wievej niz 7 mies');
            return 3;
        }
    }

    if (dogCharacteristics.obesity) {
        console.log('grubasek');
        return 1.4;
    }

    if (dogCharacteristics.activity === 4) {
        console.log('aktywny');
        return 3;
    } else if (dogCharacteristics.activity === 5) {
        console.log(' bardzo aktywny');
        return 4;
    } else if (dogCharacteristics.activity > 5) {
        console.log('tubro aktywny ');
        return 5;
    }

    if (!dogCharacteristics.castration) {
        console.log('niekasrt');
        return 1.8;
    } else {
        console.log('kastr');
        return 1.6;
    }
}

// module.exports = { DogCharacteristics, CaloricDemand, getCaloricDemand };