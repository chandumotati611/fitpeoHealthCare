import {
  LayoutDashboard,
  GalleryVerticalEnd,
  CalendarDays,
  ClipboardList,
  ChartPie,
  MessageSquare,
  Phone,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [navItems, setNavItems] = useState([
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: GalleryVerticalEnd, label: "History", active: false },
    { icon: CalendarDays, label: "Calendar", active: false },
    { icon: ClipboardList, label: "Appointments", active: false },
    { icon: ChartPie, label: "Statistics", active: false },
  ]);

  const [toolsItems, setToolsItems] = useState([
    { icon: MessageSquare, label: "Chat", active: false },
    { icon: Phone, label: "Support", active: false },
  ]);

  const [settings, setSettings] = useState({
    icon: Settings,
    label: "Settings",
    active: false,
  });

  const handleClick = (label: string) => {
    setNavItems(items =>
      items.map(item => ({ ...item, active: item.label === label }))
    );
    setToolsItems(items =>
      items.map(item => ({ ...item, active: item.label === label }))
    );
    setSettings(prev => ({
      ...prev,
      active: prev.label === label,
    }));
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden p-4 flex space-x-1.5 items-center bg-gray-50">
        <button onClick={() => setIsOpen(true)}>
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
        <h1 className="text-lg font-semibold">
          <span className="text-cyan-600">Health</span>
          <span className="text-gray-800">care.</span>
        </h1>
      </div>

      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          w-60 bg-gray-50 h-screen
          transform md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-200
          md:relative md:inset-auto md:translate-x-0
          flex flex-col justify-between
        `}
      >
        <div className="md:hidden flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        <div>
          <div className="px-6 py-4 md:block">
            <h1 className="text-xl font-semibold">
              <span className="text-cyan-600">Health</span>
              <span className="text-gray-800">care.</span>
            </h1>
          </div>

          <div className="px-4 py-2">
            <p className="text-xs text-gray-400 font-medium mb-2 md:block">
              General
            </p>
            <nav className="space-y-1">
              {navItems.map(item => (
                <a
                  key={item.label}
                  href="#"
                  onClick={() => {
                    handleClick(item.label);
                    setIsOpen(false);
                  }}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm ${
                    item.active
                      ? "text-black font-bold bg-white"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="md:inline">{item.label}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="px-4 py-2 mt-4">
            <p className="text-xs text-gray-400 font-medium mb-2 md:block">
              Tools
            </p>
            <nav className="space-y-1">
              {toolsItems.map(item => (
                <a
                  key={item.label}
                  href="#"
                  onClick={() => {
                    handleClick(item.label);
                    setIsOpen(false);
                  }}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm ${
                    item.active
                      ? "text-black font-bold bg-white"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="md:inline">{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="px-4 py-4">
          <a
            href="#"
            onClick={() => {
              handleClick(settings.label);
              setIsOpen(false);
            }}
            className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm ${
              settings.active
                ? "text-black font-bold bg-white"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            <settings.icon className="h-5 w-5" />
            <span className="md:inline">{settings.label}</span>
          </a>
        </div>
      </aside>
    </>
  );
}
