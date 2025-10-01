import { BookCopy, Bug, Circle, CircleCheckBig, FileText, LayoutGrid, Megaphone } from "lucide-react";

export default function SummaryCard() {
    const data = [
        { title: 'Course Topic', value: 120,icon:<BookCopy/> },
        { title: 'Bugs', value: 75 ,icon:<Bug/>},
        { title: 'Feature Request', value: 45 ,icon:<FileText/>},
        { title: 'Others', value: 90 ,icon:<LayoutGrid/> },
        { title: 'Announcements', value: 90,icon:<Megaphone/> },
        { title: 'Resolved', value: 90,icon:<CircleCheckBig/> },
    ];
  return (
    <div className="card px-5 py-3">
        {data.map((item, index) => (
            <div key={index} className={` flex items-center justify-between border-b border-neutral-300/50 py-3 ${index === data.length -1 ? 'border-0':''}`}>
                <div className=" flex items-center gap-3">
                    <div className=" bg-neutral-100 p-3 rounded-full">
                        {item.icon ? item.icon : <Circle className=" h-6 w-6 text-gray-500"/>}
                    </div>
                    <h2 className=" font-semibold">{item.title}</h2>
                </div>
                <div>
                    <h2 className=" font-bold text-xl">{item.value}</h2>
                </div>
            </div>
        ))} 
    </div>
  )
}