type User = {
  id: string;
  name: string;
  created_at: Date;
};

export const users: User[] = [
  {
    id: "futasato",
    name: "Futa Sato",
    created_at: new Date(),
  },
  {
    id: "tarotanaka",
    name: "Taro Tanaka",
    created_at: new Date(),
  },
  {
    id: "hanakotakahashi",
    name: "Hanako Takahashi",
    created_at: new Date(),
  },
];
