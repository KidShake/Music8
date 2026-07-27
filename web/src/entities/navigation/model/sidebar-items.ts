import type {LucideIcon} from "lucide-react";
import { Home, Library, ListMusic, Settings } from "lucide-react";


export interface SidebarItemModel {
    id: string;
    title: string;
    path: string;
    icon: LucideIcon;
}

export const sidebarItems: SidebarItemModel[] = [
    {
        id: "home",
        title: "Home",
        path: "/",
        icon: Home,
    },
    {
        id: "library",
        title: "Library",
        path: "/library",
        icon: Library,
    },

    {
        id: "playlists",
        title: "Playlists",
        path: "/playlists",
        icon: ListMusic,
    },

    {
        id: "settings",
        title: "Settings",
        path: "/settings",
        icon: Settings,
    }

];