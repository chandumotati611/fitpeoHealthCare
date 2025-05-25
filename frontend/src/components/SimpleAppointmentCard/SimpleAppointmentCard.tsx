interface appointment {
  title: string;
  time: string;
  icon: string;
  color: string;
}

export default function SimpleAppointmentCard({ title, time, icon}: appointment) {
  return (
    <div className="bg-gray-100 rounded-3xl p-4">
      <div className="flex justify-between items-center w-full mb-1">
        <h4 className="font-medium text-gray-800 text-sm">{title}</h4>
        <div className="text-2xl">{icon}</div>
      </div>
      <p className="text-xs text-gray-500">{time}</p>
    </div>
  );
}
