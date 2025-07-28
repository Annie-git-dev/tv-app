import { useState } from "react";
import { menuItems } from "../constants/constants";
import { footerItems } from "../constants/constants";
import useSidebarStore from "../store/useSidebarStore";

export default function Sidebar() {
    const { isOpen, setSidebarOpen } = useSidebarStore();
    const [activeId, setActiveId] = useState('home');

    return (
        <aside
            onMouseEnter={() => setSidebarOpen(true)}
            onMouseLeave={() => setSidebarOpen(false)}
            className={`fixed top-0 left-0 h-screen z-50 p-2 space-y-2 space-x-2 flex flex-col transition-all duration-300
                ${isOpen ? 'w-64 bg-black/80' : 'w-20 bg-black/0'} 
                hover:bg-black/80 backdrop-blur-sm`}
        >
            {menuItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`flex items-center h-12 space-x-2 p-4 mx-2 hover:bg-white/10 transition 
                        ${isOpen ? 'rounded-lg justify-start w-full' : 'rounded-full justify-center'} 
                        ${activeId === item.id ? 'bg-gray-800 font-bold' : ''}`}
                    title={item.label}
                >
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                        <img src={item.icon} alt={item.label} className="w-6 h-6 object-contain" />
                    </div>
                    {isOpen && <span className="text-white whitespace-nowrap">{item.label}</span>}
                </button>
            ))}

            {isOpen && (
                <div className="absolute bottom-4 w-full p-4">
                    {footerItems.map(item => (
                        <div key={item.id} className="mb-2 tracking-[.25em] text-gray-500 font-bold text-lg cursor-pointer">{item.label}</div>
                    ))}
                </div>
            )}
        </aside>
    )
}
