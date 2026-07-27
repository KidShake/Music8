import { cn } from "@/shared/lib/utils";

import { DesignSystem } from "@/shared/styles/design-system";
import { Layouts } from "@/shared/styles/layouts";

import HeaderLeft from "./HeaderLeft";
import HeaderCenter from "./HeaderCenter";
import HeaderRight from "./HeaderRight";

export default function Header() {
    return (
        <header
            className={cn(
                Layouts.row,
                DesignSystem.header.height,
                "border-b border-border px-6",
            )}
        >
            <div
                className={cn(
                    Layouts.rowStart,
                    Layouts.grow,
                )}
            >
                <HeaderLeft />
            </div>

            <div
                className={cn(
                    Layouts.rowCenter,
                    Layouts.grow,
                )}
            >
                <HeaderCenter />
            </div>

            <div
                className={cn(
                    Layouts.rowEnd,
                    Layouts.grow,
                )}
            >
                <HeaderRight />
            </div>
        </header>
    );
}