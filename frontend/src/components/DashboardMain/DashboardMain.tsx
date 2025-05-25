import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';

const DashboardMain = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-screen sm:flex-row">
      <div className="w-full md:w-64 bg-gray-100">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1 overflow-auto">
        <Header />
        <div className="flex-1 overflow-auto">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
