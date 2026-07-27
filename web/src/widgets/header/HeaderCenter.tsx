import { Search } from "lucide-react";

import { Input } from "@/shared/components/ui/input";
import { cn } from "@/shared/lib/utils";

import { DesignSystem } from "@/shared/styles/design-system";
import { Layouts } from "@/shared/styles/layouts";

export default function HeaderCenter() {
    return (
        <div
            className={cn(
                "relative",
                Layouts.fill,
                DesignSystem.header.searchWidth,
            )}
        >
            <Search
                className={cn(
                    "absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground",
                    DesignSystem.header.icon,
                )}
            />

            <Input
                placeholder="Search music..."
                className="pl-9"
            />
        </div>
    );
}