import { SearchCheck } from "lucide-react"

export default function AnatomySection() {
  return (
    <div className="bg-white rounded-xl p-4 relative">
      <div className="bg-gray-50 rounded-xl mt-[-15px]">

        <div className="absolute top-3 right-6">
          <SearchCheck className="h-5 w-5 text-gray-400" />
        </div>

        <div className="flex items-center justify-center relative h-[400px]">
          <div className="relative">
            <img src="./assets/humanAnatomyImage.png" alt="Human anatomy" className="h-[300px] object-contain" />

            <div className="absolute top-[60px] left-[110px]">
              <div className="bg-blue-800 text-white text-xs px-3 py-2 rounded-xl whitespace-nowrap">
                <span>❤️ Healthy Heart</span>
              </div>

            </div>

            <div className="absolute top-[200px] left-[-60px]">
              <div className="bg-cyan-500 text-black text-xs px-3 py-2 rounded-xl">
                <span>🦵 Healthy Leg</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      
    </div>
  )
}