interface HealthStatusCardProps {
  title: string;
  date: string;
  status: string;
  icon: string;
}

export default function HealthStatusCard({ title, date, status, icon }: HealthStatusCardProps) {
  const color = () => {
    switch (status) {
      case "good":
        return "bg-green-400";
      case "warning":
        return "bg-amber-400";
      case "critical":
        return "bg-red-400";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-4 ml-3 sm:ml-0 rounded-2xl px-4 py-3 bg-gray-50 shadow-sm hover:bg-gray-100 hover:shadow-md">
      <span className="mb-2 sm:mb-0 text-xl">{icon}</span>

      <div className="flex-1 w-full">
        <h4 className="text-md font-bold text-gray-800">{title}</h4>
        <span className="text-xs text-gray-500">{date}</span>
        <div className="h-6 rounded-full w-full mt-2">
          <div className="flex">
            <div className={`h-2 rounded-full ${color()}`} style={{ width: "80%" }}></div>
            <div className="h-2 rounded-r-full bg-gray-200" style={{ width: "20%" }}></div>
          </div>
        </div>
      </div>
    </div>

  );
}
