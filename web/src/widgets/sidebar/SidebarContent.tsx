import SidebarItem from "./SidebarItem";
import { cn } from "@/shared/lib/utils";

import { sidebarItems } from "@/entities/navigation/model/sidebar-items";

import { DesignSystem } from "@/shared/styles/design-system";
import { Layouts } from "@/shared/styles/layouts";

export default function SidebarContent() {
    return (
        <nav
            className={cn(
                Layouts.column,
                DesignSystem.spacing.gap.sm,
                DesignSystem.spacing.padding.md,
            )}
        >
            {sidebarItems.map((item) => (
                <SidebarItem
                    key={item.id}
                    item={item}
                />
            ))}
        </nav>
    );
}