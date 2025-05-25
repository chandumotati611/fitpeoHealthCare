"use client"

import { Search, Bell, Plus } from "lucide-react"

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white w-[100%]">
      <div className="flex items-center space-x-2 w-full max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black h-4 w-4" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 h-10 w-full bg-gray-50 border border-gray-200 rounded-md text-black-400" 
          />
        </div>

        <div className="h-10 w-10 mr-4 text-blue-800 bg-gray-50 border border-gray-200 flex items-center justify-center rounded-md">
          <Bell className="h-5 w-5" />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="h-9 w-9 rounded-md bg-cyan-500 flex items-center justify-center">
            <img src="./assets/user.png" alt="Avatar" className="w-9"/>
        </div>

        <button className="rounded-md bg-indigo-600 h-9 w-9 flex items-center justify-center text-white hover:bg-indigo-700">
          <Plus className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
