"use client";

import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronDown } from "lucide-react";

const data = [
    { name: 'Mon', value: 2400 },
    { name: 'Tue', value: 1398 },
    { name: 'Wed', value: 9800 },
    { name: 'Thu', value: 3908 },
    { name: 'Fri', value: 4800 },
    { name: 'Sat', value: 3800 },
    { name: 'Sun', value: 4300 },
];

export default function RevenueChart() {
    return (
        <div className="p-4 md:p-8 bg-white border border-zinc-100 rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.02)] h-[500px] md:h-[420px]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 gap-4">
                <div>
                    <h3 className="text-lg font-bold text-zinc-900">Revenue Analytics</h3>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-xl md:text-2xl font-bold text-zinc-900">AED 45,200</span>
                        <span className="bg-green-50 text-green-600 text-xs font-bold px-2 py-1 rounded-full">+15.2%</span>
                    </div>
                </div>
                <div className="relative inline-block">
                    <select
                        className="bg-zinc-50 border border-zinc-100 appearance-none
                           text-xs rounded-lg px-3 py-2 pr-8 outline-none
                           focus:border-zinc-100 cursor-pointer" >
                        <option>This Week</option>
                        <option>Last Week</option>
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2
                   -translate-y-1/2 text-zinc-500 font-light">
                       <ChevronDown width={14} height={14}/>
                      </span>
                </div>
            </div>

            {/* FIX 2: Added outline-none to remove the click border */}
            <ResponsiveContainer width="100%" height="70%" className="outline-none focus:outline-none">
                <LineChart
                    data={data}
                    margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                    className={"focus:outline-none focus:border-transparent outline-none"}
                >
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#a1a1aa', fontSize: 12 }}
                        dy={10}
                        padding={{ left: 15, right: 15 }}
                    />
                    <Tooltip
                        cursor={{ stroke: '#f97316' }}
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#f97316"
                        strokeWidth={4}
                        dot={{ fill: '#f97316', r: 4 }}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}