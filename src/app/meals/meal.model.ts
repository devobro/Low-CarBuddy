
export class Meal {
	public mealName: string;
	public fat: number;
	public carbs: number;
	public protein: number;
	public date: number

	constructor(mealName: string, fat: number, carbs: number, protein: number, date: number) {
		this.mealName = mealName;
		this.fat = fat;
		this.carbs = carbs;
		this.protein = protein;
		this.date = date;
	}
}