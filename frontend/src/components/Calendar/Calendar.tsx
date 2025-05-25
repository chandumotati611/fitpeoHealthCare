import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { calendarMockData } from "../../data/calendarMockData";
import AppointmentCard from "./AppointmentCard";

export default function Calendar() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = [25, 26, 27, 28, 29, 30, 31];

  return (
    <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">This Week</span>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>

        <div className="flex items-center space-x-4">
          <ChevronLeft className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-600" />
          <div className="text-base sm:text-lg font-semibold text-gray-800">October 2021</div>
          <ChevronRight className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-600" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="grid grid-cols-7 min-w-[560px] sm:min-w-0 gap-2 mb-4">
          {days.map((day, index) => (
            <div
              key={day}
              className={`text-center flex flex-col items-center rounded-md p-1 ${index === 1 ? "bg-blue-50" : ""
                }`}
            >
              <div className="text-xs sm:text-sm text-gray-500 mb-2">{day}</div>
              <div
                className={`text-sm font-medium flex-shrink-0 aspect-square w-8 flex items-center justify-center transition-colors "text-gray-800 hover:bg-gray-100"
                  }`}
              >
                {dates[index]}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="grid grid-cols-7 min-w-[560px] sm:min-w-0 gap-2 mb-6">
          {calendarMockData.timeSlots.map((slot, colIndex) => (
            <div
              key={colIndex}
              className={`text-center space-y-1 flex flex-col items-center rounded-md p-1 ${colIndex === 1 ? "bg-blue-50" : ""
                }`}
            >
              {slot.map((time, timeIndex) => (
                <div
                  key={timeIndex}
                  className={`text-xs sm:text-sm py-1 px-2 rounded flex items-center justify-center aspect-square w-8 flex-shrink-0 transition-colors ${time.available
                      ? time.highlight
                        ? "bg-blue-800 w-10 h-8 text-white"
                        : "text-gray-800 hover:bg-gray-50"
                      : "text-gray-400"
                    }`}
                >
                  {time.time}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {calendarMockData.appointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            title={appointment.title}
            time={appointment.time}
            doctor={appointment.doctor}
            icon={appointment.icon}
            color={appointment.color}
            id={appointment.id}
          />
        ))}
      </div>

    </div>
  );
}
