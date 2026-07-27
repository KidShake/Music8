import SidebarContent from "./SidebarContent";

import { cn } from "@/shared/lib/utils";

import { DesignSystem } from "@/shared/styles/design-system";
import { Layouts } from "@/shared/styles/layouts";

export default function Sidebar() {
    return (
        <aside
            className={cn(
                Layouts.column,
                "h-full",
                DesignSystem.sidebar.width,
                "border-r bg-card",
            )}
        >
            <SidebarContent />
        </aside>
    );
}