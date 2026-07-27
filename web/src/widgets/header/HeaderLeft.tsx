import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/shared/components/ui/avatar";

import avatar from "@/assets/images/i.webp";

import { cn } from "@/shared/lib/utils";

import { DesignSystem } from "@/shared/styles/design-system";
import { Layouts } from "@/shared/styles/layouts";
import { Typography } from "@/shared/styles/typography";

export default function HeaderLeft() {
    return (
        <div
            className={cn(
                Layouts.row,
                DesignSystem.spacing.gap.md,
            )}
        >
            <Avatar>
                <AvatarImage
                    src={avatar}
                    alt="User avatar"
                />

                <AvatarFallback>
                    New
                </AvatarFallback>
            </Avatar>

            <div className={Layouts.column}>
                <span className={Typography.header.userName}>
                    KidShake
                </span>

                <span className={Typography.header.userRole}>
                    Music Listener
                </span>
            </div>
        </div>
    );
}