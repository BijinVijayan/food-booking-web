import { CheckCircle2, QrCode, Calendar, Clock, Briefcase } from "lucide-react";

const ACTIVITIES = [
    { title: "Order #123 Delivered", time: "2 mins ago", icon: CheckCircle2, color: "bg-green-100 text-green-600" },
    { title: "Table 4 QR Scanned", time: "5 mins ago", icon: QrCode, color: "bg-orange-100 text-orange-600" },
    { title: "New Reservation: Table 8", time: "15 mins ago", icon: Calendar, color: "bg-blue-100 text-blue-600" },
    { title: "Order #125 Pending", time: "22 mins ago", icon: Clock, color: "bg-yellow-100 text-yellow-600" },
    { title: "Shift Started: Chef Ramsey", time: "1 hour ago", icon: Briefcase, color: "bg-purple-100 text-purple-600" },
];

export default function RecentActivity() {
    return (
        <div className="p-8 bg-white border border-zinc-100 rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.02)] h-[420px]">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-zinc-900">Recent Activity</h3>
                <button className="text-xs font-bold text-orange-500 hover:text-orange-600">VIEW ALL</button>
            </div>

            <div className="space-y-6 relative">
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-zinc-100 z-0"></div>

                {ACTIVITIES.map((item, i) => (
                    <div key={i} className="flex gap-4 relative z-10">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-4 border-white ${item.color}`}>
                            <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-zinc-900">{item.title}</p>
                            <p className="text-xs text-zinc-400">{item.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}