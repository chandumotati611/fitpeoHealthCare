import {appointmentMockData} from "../../data/appointmentMockData.ts";
import SimpleAppointmentCard from "../SimpleAppointmentCard/SimpleAppointmentCard.tsx";

export default function UpcomingSchedule() {
  return (
    <div className="bg-white rounded-xl p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">The Upcoming Schedule</h2>

      <div className="mb-6">
        <h3 className="text-sm text-gray-500 mb-3">On Thursday</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {appointmentMockData.slice(0, 2).map((appointment) => (
            <SimpleAppointmentCard
              key={appointment.id}
              title={appointment.title}
              time={appointment.time}
              icon={appointment.icon}
              color={appointment.color}
            />
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-sm text-gray-500 mb-3">On Saturday</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {appointmentMockData.slice(2, 4).map((appointment) => (
            <SimpleAppointmentCard
              key={appointment.id}
              title={appointment.title}
              time={appointment.time}
              icon={appointment.icon}
              color={appointment.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
