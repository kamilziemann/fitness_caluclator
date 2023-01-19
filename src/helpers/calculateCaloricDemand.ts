import { ActivityLevel, FormProps, Gender } from '@/types';

const activityMultiplier = {
    'none': 1,
    'sedentary': 1.2,
    'lightly active': 1.375,
    'moderately active': 1.55,
    'very active': 1.725,
    'extremely active': 1.9
}

const purposeMultiplier = {
    'losing weight': -300,
    'weight maintenance': 0,
    'arrival on the mass': 300
}

const calculateCaloricDemand = ({
    weight, height, age, activityLevel, gender, purpose
}: FormProps): number => {
    let BMR: number;

    if (gender === 'male') {
        BMR = 66 + (13.7 * +weight) + (5 * +height) - (6.8 * +age);
    } else {
        BMR = 655 + (9.6 * +weight) + (1.8 * +height) - (4.7 * +age);
    }



    return Math.round(BMR * activityMultiplier[activityLevel] + purposeMultiplier[purpose]);
}

export default calculateCaloricDemand;