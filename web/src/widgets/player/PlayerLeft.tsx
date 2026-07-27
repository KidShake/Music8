import { cn } from "@/shared/lib/utils";
import { DesignSystem } from "@/shared/styles/design-system";
import { Typography } from "@/shared/styles/typography";
import { Layouts } from "@/shared/styles/layouts";

export default function PlayerLeft() {
    return (
        <div
            className={cn(
                Layouts.row,
                DesignSystem.spacing.gap.md,
            )}
        >
            <div
                className={cn(
                    Layouts.rowCenter,
                    DesignSystem.player.coverSize,
                    DesignSystem.player.coverRadius,
                    DesignSystem.player.coverContainer,
                )}
            >
                ♪
            </div>

            <div className={Layouts.column}>
                <span className={Typography.player.trackTitle}>
                    No track selected
                </span>

                <span className={Typography.player.artistTitle}>
                    Unknown artist
                </span>
            </div>
        </div>
    );
}