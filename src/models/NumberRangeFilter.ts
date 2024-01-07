import { IsInt, Min, ArrayNotEmpty, IsArray, IsIn } from 'class-validator';
import {isPrime, isPalindrome} from '../utils/numberUtils'

export type Feature = "palindrome" | "prime";

interface FeatureCheckFunction {
    (num: number): boolean;
}

export class NumberRangeFilter {

    @IsInt()
    @Min(1)
    private readonly minNumber: number;

    @IsInt()
    @Min(1)
    private readonly maxNumber: number;

    @IsArray()
    @ArrayNotEmpty()
    @IsIn(["palindrome", "prime"], { each: true })
    private readonly feature: Feature[];

    constructor(minNumber: number, maxNumber: number, feature: Feature[]) {
        this.minNumber = minNumber;
        this.maxNumber = maxNumber;
        this.feature = feature;
    }

    private featureChecks: Record<Feature, FeatureCheckFunction> = {
        palindrome: isPalindrome,
        prime: isPrime
    };

    public filterNumbers(): number[] {
        const result: number[] = [];

        for (let num = this.minNumber; num <= this.maxNumber; num++) {
            if (this.isNumberValid(num)) {
                result.push(num);
            }
        }

        return result;
    }

    private isNumberValid(num: number): boolean {
        return this.feature.every(feature => this.featureChecks[feature](num));
    }

}
