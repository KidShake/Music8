import { Outlet } from "react-router-dom";

import Header from "@/widgets/header/Header";
import Sidebar from "@/widgets/sidebar/Sidebar";
import Player from "@/widgets/player/Player";

export default function AppLayout() {
    return (
        <div className="flex h-screen flex-col bg-background text-foreground">
            < Header />

            <div className="flex flex-1">
                <Sidebar />
                <main className="flex flex-1 overflow-auto p-6">
                    <Outlet />
                </main>
            </div>

            <Player />
        </div>
    );
}