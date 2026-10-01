'use client';
import Navbar from './Navbar';import Sidebar from './Sidebar';import {Toaster} from 'react-hot-toast';
export default function AppShell({children}:{children:React.ReactNode}){return <div className="min-h-screen bg-slate-950 text-gray-100"><Navbar/><div className="flex h-screen pt-16"><Sidebar/><main className="flex-1 overflow-auto">{children}</main></div><Toaster position="bottom-right"/></div>}
