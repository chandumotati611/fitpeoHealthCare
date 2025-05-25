export interface TimeSlot {
  time: string;
  available: boolean;
  highlight: boolean;
}

export interface Appointment {
  id: number;
  title: string;
  time: string;
  doctor: string;
  icon: string;
  color: string;
}

export interface CalendarMockData {
  timeSlots: TimeSlot[][];
  appointments: Appointment[];
}

export const calendarMockData: CalendarMockData = {
  timeSlots: [
    [
      { time: "10:00", available: true, highlight: false },
      { time: "11:00", available: true, highlight: false },
      { time: "12:00", available: true, highlight: false },
    ],
    [
      { time: "08:00", available: true, highlight: false },
      { time: "09:00", available: true, highlight: true },
      { time: "10:00", available: true, highlight: false },
    ],
    [
      { time: "12:00", available: true, highlight: false },
      { time: "—", available: false, highlight: false },
      { time: "13:00", available: true, highlight: false },
    ],
    [
      { time: "10:00", available: true, highlight: false },
      { time: "11:00", available: true, highlight: false },
      { time: "—", available: false, highlight: false },
    ],
    [
      { time: "—", available: false, highlight: false },
      { time: "14:00", available: true, highlight: false },
      { time: "16:00", available: true, highlight: false },
    ],
    [
      { time: "12:00", available: true, highlight: false },
      { time: "14:00", available: true, highlight: false },
      { time: "15:00", available: true, highlight: false },
    ],
    [
      { time: "09:00", available: true, highlight: false },
      { time: "10:00", available: true, highlight: false },
      { time: "11:00", available: true, highlight: false },
    ],
  ],
  appointments: [
    {
      id: 1,
      title: "Dentist",
      time: "09:00-11:00",
      doctor: "Cameron Williamson",
      icon: "🦷",
      color: "bg-blue-800",
    },
    {
      id: 2,
      title: "Physiotherapy Appointment",
      time: "11:00-12:00",
      doctor: "Kevin Dones",
      icon: "💪",
      color: "bg-gray-200",
    },
  ],
};
