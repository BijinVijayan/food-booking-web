import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatsCardProps {
    label: string;
    value: string;
    trend: string;
    trendUp: boolean;
    subtext: string;
    icon: any;
}

export default function StatsCard({ label, value, trend, trendUp, subtext, icon: Icon }: StatsCardProps) {
    return (
        <div className="p-4 md:p-6 bg-white border border-zinc-100 rounded-2xl md:rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.02)] hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-3 md:mb-4">
                <div>
                    {/* Smaller text on mobile */}
                    <p className="text-zinc-500 text-xs md:text-sm font-medium mb-1">{label}</p>

                    {/* Responsive Heading Size */}
                    <h3 className="text-xl md:text-3xl font-bold text-zinc-900">{value}</h3>
                </div>

                {/* Smaller Icon Box on mobile */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className={cn(
                    "flex items-center gap-1 font-bold px-1.5 py-0.5 md:px-2 md:py-0.5 rounded-full text-[10px] md:text-xs",
                    trendUp ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                )}>
                    {trendUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {trend}
                </span>
                <span className="text-zinc-400 text-[10px] md:text-xs truncate">{subtext}</span>
            </div>
        </div>
    );
}