# ページ構成

```shell
app
├── favicon.ico
├── globals.css
├── layout.tsx
├── login
│   └── page.tsx           // ログイン
├── page.tsx               // トップ
└── week-plans
    ├── [weekId]
    │   └── page.tsx       // 各曜日のレシピ
    └── page.tsx           // 週一覧
```

## 概要

編集は`week-plans/[weekId]/page.tsx`にて編集モードを各曜日ごとに設ける．
