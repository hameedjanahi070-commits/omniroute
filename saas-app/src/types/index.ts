export interface FoodItem {
  id?: string;
  name: string;
  cals: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface DailyLogs {
  breakfast: FoodItem[];
  lunch: FoodItem[];
  dinner: FoodItem[];
  snacks: FoodItem[];
}

export interface UserProfile {
  goalCalories: number;
  proteinGoal: number;
  carbsGoal: number;
  fatGoal: number;
  age: number;
  gender: 'male' | 'female';
  height: number;
  weight: number;
  activity: number;
}
