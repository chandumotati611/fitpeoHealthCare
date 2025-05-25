export default function ActivityFeed() {
  const activityData = [
    { day: "Mon", values: [20, 35, 10, 45] },
    { day: "Tue", values: [40, 25, 30, 50] },
    { day: "Wed", values: [15, 40, 20, 35] },
    { day: "Thu", values: [30, 25, 40, 45] },
    { day: "Fri", values: [20, 35, 15, 30] },
    { day: "Sat", values: [45, 20, 30, 50] },
    { day: "Sun", values: [25, 15, 10, 20] },
  ];
  

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800">Activity</h2>
        <span className="text-sm text-gray-500">3 appointments this week</span>
      </div>

      <div className="h-40 sm:h-48 flex items-end space-x-3 sm:space-x-6 overflow-x-auto scrollbar-hide">
        {activityData.map((item, index) => (
          <div key={index} className="flex-1 min-w-[32px] sm:min-w-0 flex flex-col items-center">
            <div className="w-full flex items-center justify-center space-x-[2px] sm:space-x-1 h-32 sm:h-40">
              {item.values.map((value, valueIndex) => (
                <div
                  key={valueIndex}
                  className={`${
                    value > 40
                      ? "bg-blue-500"
                      : value >= 20
                      ? "bg-cyan-500"
                      : "bg-gray-300"
                  } w-[5px] rounded-sm`}
                  
                  style={{ height: `${value}%` }}
                />
              ))}
            </div>
            <div className="text-[10px] mt-[-15px] sm:text-xs text-gray-500">{item.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
}