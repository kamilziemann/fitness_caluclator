export type ActivityLevel =
	| "sedentary"
	| "lightly active"
	| "moderately active"
	| "very active"
	| "extremely active"
	| "none";

export type Gender = "male" | "female";

export type Purpose = "weight maintenance" | "losing weight" | "arrival on the mass";

export interface FormProps {
	weight: string;
	height: string;
	age: string;
	activityLevel: ActivityLevel;
	gender: Gender;
	purpose: Purpose;
}
