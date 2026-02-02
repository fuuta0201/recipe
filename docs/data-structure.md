# データ構造

## user collection

```typescript
type User = {
  id: string;
  name: string;
  created_at: Date; // Timestamp
};
```

## week_plan subcollection

useコレクションのサブコレクションとして保存する

```typescript
type Meal = {
  type: "meat" | "fish" | "fried" | "noodle" | "bowl";
  name: string;
};

type WeekPlan = {
  id: string; // 例: "2026-02-02" (週開始日のYYYY-MM-DD)
  week_start: Date; // Timestamp: 週の開始日
  week_plan: {
    mon: Meal;
    tue: Meal;
    wed: Meal;
    thu: Meal;
    fri: Meal;
    sat: Meal;
    sun: Meal;
  };
  created_at: Date; // Timestamp
  updated_at: Date; // Timestamp
};
```
