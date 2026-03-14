import React from 'react';
import { LayoutDashboard, LineChart, Users, Settings, HelpCircle } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 relative z-10 animate-float pb-20">
      {/* Container: Glassmorphism */}
      <div className="bg-[#1e1e24]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row overflow-hidden lg:h-[600px]">
        
        {/* Sidebar */}
        <div className="w-full lg:w-20 border-b lg:border-b-0 lg:border-r border-white/10 flex lg:flex-col items-center justify-between lg:justify-start lg:py-8 py-4 px-6 lg:px-0 gap-8 bg-black/10">
          <button className="text-white/60 hover:text-white transition-colors bg-white/5 p-2 rounded-xl border border-white/10 shadow-sm">
            <LayoutDashboard size={24} />
          </button>
          <button className="text-white/40 hover:text-white transition-colors">
            <LineChart size={24} />
          </button>
          <button className="text-white/40 hover:text-white transition-colors">
            <Users size={24} />
          </button>
          <button className="text-white/40 hover:text-white transition-colors">
            <Settings size={24} />
          </button>
          <div className="hidden lg:block flex-1" />
          <button className="text-white/40 hover:text-white transition-colors">
            <HelpCircle size={24} />
          </button>
        </div>

        {/* Main Grid: 3-Column Layout */}
        <div className="flex-1 p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-4 gap-6 overflow-y-auto">
          
          {/* Column 1: Metric Cards */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            {/* Metric 1 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col justify-between h-[160px] shadow-sm">
              <div>
                <p className="text-white/60 font-inter text-sm font-medium mb-1">Total Bookings</p>
                <h3 className="text-white font-manrope text-3xl font-semibold">1,248</h3>
              </div>
              <div className="w-full h-10 flex items-end border-l border-b border-white/10">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 20">
                  <defs>
                    <linearGradient id="miniChart1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7b39fc" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#7b39fc" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M2,20 L2,16 Q25,18 45,14 Q75,8 98,4 L98,20 Z" fill="url(#miniChart1)" />
                  <path d="M2,16 Q25,18 45,14 Q75,8 98,4" fill="none" stroke="#7b39fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col justify-between h-[160px] shadow-sm">
              <div>
                <p className="text-white/60 font-inter text-sm font-medium mb-1">Active Stays</p>
                <h3 className="text-white font-manrope text-3xl font-semibold">342</h3>
              </div>
              <div className="w-full h-10 flex items-end border-l border-b border-white/10">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 20">
                  <defs>
                    <linearGradient id="miniChart2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M2,20 L2,12 Q25,18 50,10 Q70,4 80,12 Q90,18 98,6 L98,20 Z" fill="url(#miniChart2)" />
                  <path d="M2,12 Q25,18 50,10 Q70,4 80,12 Q90,18 98,6" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col justify-between h-[160px] shadow-sm">
              <div>
                <p className="text-white/60 font-inter text-sm font-medium mb-1">Revenue</p>
                <h3 className="text-white font-manrope text-3xl font-semibold">$84.5k</h3>
              </div>
              <div className="w-full h-10 flex items-end border-l border-b border-white/10">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 20">
                  <defs>
                    <linearGradient id="miniChart3" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M2,20 L2,16 Q30,12 50,10 Q70,8 80,14 Q90,18 98,4 L98,20 Z" fill="url(#miniChart3)" />
                  <path d="M2,16 Q30,12 50,10 Q70,8 80,14 Q90,18 98,4" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Column 2: Central Chart */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col lg:col-span-2 shadow-sm min-h-[400px]">
            <div className="flex items-center justify-between mb-8 relative z-10">
              <h3 className="text-white font-inter font-semibold text-lg">Booking Trends</h3>
              <select className="bg-transparent border border-white/20 text-white text-sm rounded-lg px-3 py-1.5 outline-none font-inter appearance-none cursor-pointer hover:bg-white/5 transition-colors">
                <option className="text-black">Last Week</option>
                <option className="text-black">Last Month</option>
                <option className="text-black">This Year</option>
              </select>
            </div>
            
            <div className="flex-1 relative w-full mt-auto pt-4 pl-8 pb-8">
              {/* Y-Axis mock */}
              <div className="absolute left-0 top-4 bottom-8 flex flex-col justify-between text-white/40 text-xs py-0 pointer-events-none">
                <span className="-translate-y-2">100</span>
                <span className="-translate-y-1.5">75</span>
                <span className="-translate-y-1">50</span>
                <span className="-translate-y-0.5">25</span>
                <span>0</span>
              </div>
              
              <div className="relative w-full h-full border-l border-b border-white/10">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 250">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7b39fc" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#7b39fc" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Grid Lines */}
                  {[0, 62.5, 125, 187.5].map((y, i) => (
                    <line key={i} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" vectorEffect="non-scaling-stroke" strokeDasharray="4 4" />
                  ))}

                  <path 
                    d="M0,200 C40,200 60,120 100,140 C140,160 160,60 200,80 C240,100 260,180 300,150 C340,120 360,50 400,30 L400,250 L0,250 Z" 
                    fill="url(#chartGradient)" 
                  />
                  <path 
                    d="M0,200 C40,200 60,120 100,140 C140,160 160,60 200,80 C240,100 260,180 300,150 C340,120 360,50 400,30" 
                    fill="none" 
                    stroke="#7b39fc" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              
              {/* X-Axis mock */}
              <div className="absolute bottom-0 left-8 right-0 flex justify-between text-white/40 text-xs pointer-events-none pt-3">
                <span className="-translate-x-3">Mon</span>
                <span className="-translate-x-1.5">Tue</span>
                <span className="-translate-x-1">Wed</span>
                <span>Thu</span>
                <span className="translate-x-1">Fri</span>
                <span className="translate-x-1.5">Sat</span>
                <span className="translate-x-3">Sun</span>
              </div>
            </div>
          </div>

          {/* Column 3: Recent Activity */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 lg:col-span-1 shadow-sm flex flex-col">
            <h3 className="text-white font-inter font-semibold text-lg mb-6">Recent Activity</h3>
            
            <div className="flex flex-col gap-6 flex-1">
              {/* Activity Item 1 */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-primary flex items-center justify-center flex-shrink-0 text-white font-manrope font-semibold text-xs shadow-sm shadow-purple-500/20">
                  SJ
                </div>
                <div>
                  <p className="text-white text-[13px] font-medium leading-snug mb-1">
                    Sarah Jenkins <span className="text-white/60 font-normal">booked a suite in Paris</span>
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-white/40">2h ago</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Confirmed</span>
                  </div>
                </div>
              </div>

              {/* Activity Item 2 */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 text-white font-manrope font-semibold text-xs shadow-sm shadow-blue-500/20">
                  MC
                </div>
                <div>
                  <p className="text-white text-[13px] font-medium leading-snug mb-1">
                    Marcus Chen <span className="text-white/60 font-normal">requested a date change</span>
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-white/40">4h ago</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">Review</span>
                  </div>
                </div>
              </div>

              {/* Activity Item 3 */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0 text-white font-manrope font-semibold text-xs shadow-sm shadow-pink-500/20">
                  ER
                </div>
                <div>
                  <p className="text-white text-[13px] font-medium leading-snug mb-1">
                    Elena Rodriguez <span className="text-white/60 font-normal">started booking process</span>
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-white/40">5h ago</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">In Progress</span>
                  </div>
                </div>
              </div>

              {/* Activity Item 4 */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-stone-500 to-stone-400 flex items-center justify-center flex-shrink-0 text-white font-manrope font-semibold text-xs shadow-sm shadow-stone-500/20">
                  DK
                </div>
                <div>
                  <p className="text-white text-[13px] font-medium leading-snug mb-1">
                    David Kim <span className="text-white/60 font-normal">completed profile setup</span>
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-white/40">1d ago</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Completed</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
