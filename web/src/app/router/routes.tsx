import AppLayout from "@/app/layout/AppLayout";
import HomePage from "@/pages/home/HomePage";
import LibraryPage from "@/pages/library/LibraryPage";
import PlaylistsPage from "@/pages/playlists/PlaylistsPage";
import SettingsPage from "@/pages/settings/SettingsPage";

export const routes = [
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "library",
                element: <LibraryPage />,
            },
            {
                path: "playlists",
                element: <PlaylistsPage />,
            },
            {
                path: "settings",
                element: <SettingsPage />,
            },
        ],
    },
];