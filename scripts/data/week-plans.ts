type Meal = {
  type: "meat" | "fish" | "fried" | "noodle" | "bowl";
  name: string;
};

type WeekPlan = {
  week_start: Date;
  week_plan: {
    mon: Meal;
    tue: Meal;
    wed: Meal;
    thu: Meal;
    fri: Meal;
    sat: Meal;
    sun: Meal;
  };
  created_at: Date;
  updated_at: Date;
};

export const weekPlans: WeekPlan[] = [
  {
    week_start: new Date("2026-01-26T00:00:00+09:00"),
    week_plan: {
      mon: { type: "fish", name: "鮭のホイル焼き" },
      tue: { type: "meat", name: "鶏の照り焼き" },
      wed: { type: "noodle", name: "醤油ラーメン" },
      thu: { type: "bowl", name: "親子丼" },
      fri: { type: "fried", name: "唐揚げ" },
      sat: { type: "meat", name: "ハンバーグ" },
      sun: { type: "fish", name: "サバの味噌煮" },
    },
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    week_start: new Date("2026-02-02T00:00:00+09:00"),
    week_plan: {
      mon: { type: "fish", name: "アジの南蛮漬け" },
      tue: { type: "meat", name: "豚の生姜焼き" },
      wed: { type: "noodle", name: "焼きそば" },
      thu: { type: "bowl", name: "牛丼" },
      fri: { type: "fried", name: "エビフライ" },
      sat: { type: "meat", name: "ロールキャベツ" },
      sun: { type: "fish", name: "ブリの照り焼き" },
    },
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    week_start: new Date("2026-02-09T00:00:00+09:00"),
    week_plan: {
      mon: { type: "fish", name: "タラのムニエル" },
      tue: { type: "meat", name: "チキンカレー" },
      wed: { type: "noodle", name: "うどん" },
      thu: { type: "bowl", name: "そぼろ丼" },
      fri: { type: "fried", name: "とんかつ" },
      sat: { type: "meat", name: "焼肉" },
      sun: { type: "fish", name: "サンマの塩焼き" },
    },
    created_at: new Date(),
    updated_at: new Date(),
  },
];
