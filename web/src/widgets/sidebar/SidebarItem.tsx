import { NavLink } from "react-router-dom";
import type { SidebarItemModel } from "@/entities/navigation/model/sidebar-items";
import {Layouts} from "@/shared/styles/layouts.ts";
import {DesignSystem} from "@/shared/styles/design-system.ts";
import {cn} from "@/shared/lib/utils.ts";

interface Props {
    item: SidebarItemModel;
}

export default function SidebarItem({ item }: Props) {
    const Icon = item.icon;
    return (
        <NavLink
            to={item.path}
            className={({ isActive }) =>
                cn(
                    Layouts.row,
                    DesignSystem.spacing.gap.md,
                    "rounded-lg px-4 py-2 transition-colors",
                    isActive
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent",
                )
            }
        >
            <Icon className={DesignSystem.sidebar.icon} />

            <span>{item.title}</span>
        </NavLink>
    );
}