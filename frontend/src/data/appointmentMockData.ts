interface appointment{
  id:number,
  day:string,
  title:string,
  time:string,
  icon:string,
  color:string,
}
export const appointmentMockData:appointment[] = [
  {
    id: 1,
    day: "Thursday",
    title: "Health checkup complete",
    time: "11:00 AM",
    icon: "🩺",
    color: "blue",
  },
  {
    id: 2,
    day: "Thursday",
    title: "Ophthalmologist",
    time: "14:00 PM",
    icon: "👁",
    color: "blue",
  },
  {
    id: 3,
    day: "Saturday",
    title: "Cardiologist",
    time: "12:00 AM",
     icon: "❤",
    color: "red",
  },
  {
    id: 4,
    day: "Saturday",
    title: "Neurologist",
    time: "16:00 PM",
    icon: "🧠",
    color: "blue",
  },
]