export interface Appointment {
  id: number;
  title: string;
  time: string;
  doctor: string;
  icon: string;
  color: string;
}

export default function AppointmentCard({
  id,
  title,
  time,
  doctor,
  icon,
  color,
}: Appointment) {
  return (
    <div
      className={`${color} ${
        id === 1
          ? "sm:basis-[60%] text-white"
          : "sm:basis-[38%] text-black"
      } basis-full rounded-3xl p-4`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-sm sm:text-base mb-1">{title}</h3>
          <p className="text-xs mb-2">{time}</p>
          <p className="text-xs text-opacity-80">Dr. {doctor}</p>
        </div>
        <div className="text-lg sm:text-xl">{icon}</div>
      </div>
    </div>
  );
}
