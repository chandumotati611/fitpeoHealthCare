export interface HealthItem {
  id: number;
  title: string;
  date: string;
  status: string;
  icon: string;
}

export const healthMockData: HealthItem[] = [
  {
    id: 1,
    title: "Lungs",
    date: "Date: 26 Oct 2021",
    status: "critical",
    icon: "🫁",
  },
  {
    id: 2,
    title: "Teeth",
    date: "Date: 26 Oct 2021",
    status: "good",
    icon: "🦷",
  },
  {
    id: 3,
    title: "Bone",
    date: "Date: 26 Oct 2021",
    status: "warning",
    icon: "🦴",
  },
];
