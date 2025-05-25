import AnatomySection from "./AnatomySection";
import HealthStatusCard from "./HealthStatusCard";
import { healthMockData } from "../../data/healthMockData.ts";
import Calendar from "../Calendar/Calendar.tsx";
import UpcomingSchedule from "../UpcomingSchedule/UpcomingSchedule.tsx";
import ActivityFeed from "../Activity/Activity.tsx";

interface HealthStatusCardProps {
  id: number;
  title: string;
  date: string;
  status: string;
  icon: string;
}

const Dashboard = () => {
  return (
    <>
      <h1 className="text-2xl font-bold ml-5 mb-3">Dashboard</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <AnatomySection />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-6 pr-4">
              {healthMockData.map((item: HealthStatusCardProps) => (
                <HealthStatusCard
                  key={item.id}
                  title={item.title}
                  date={item.date}
                  status={item.status}
                  icon={item.icon}
                />
              ))}
              <div className="mt-4 flex justify-end">
                <button className="text-gray-600 text-sm flex items-center">
                  Details &gt;
                </button>
              </div>
            </div>
          </div>
          <ActivityFeed />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <Calendar />
          <UpcomingSchedule />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
