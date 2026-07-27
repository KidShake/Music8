import {
    Play,
    SkipBack,
    SkipForward,
} from "lucide-react";

import { Button } from "@/shared/components/ui/button";
import { Slider } from "@/shared/components/ui/slider";
import { cn } from "@/shared/lib/utils";

import { DesignSystem } from "@/shared/styles/design-system";
import { Layouts } from "@/shared/styles/layouts";
import { Typography } from "@/shared/styles/typography";

export default function PlayerCenter() {
    return (
        <div
            className={cn(
                Layouts.columnCenter,
                Layouts.fill,
                DesignSystem.player.centerWidth,
                DesignSystem.spacing.gap.sm,
            )}
        >
            <div
                className={cn(
                    Layouts.row,
                    DesignSystem.spacing.gap.sm,
                )}
            >
                <Button
                    variant="ghost"
                    size="icon"
                >
                    <SkipBack className={DesignSystem.player.icon} />
                </Button>

                <Button
                    size="icon"
                    className={cn(
                        DesignSystem.player.buttonSize,
                        DesignSystem.player.buttonRadius

                    )}
                >
                    <Play className={DesignSystem.player.playIcon} />
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                >
                    <SkipForward className={DesignSystem.player.icon} />
                </Button>
            </div>

            <div
                className={cn(
                    Layouts.row,
                    Layouts.fill,
                    DesignSystem.spacing.gap.md,
                )}
            >
                <span className={Typography.player.trackTime}>
                    0:00
                </span>

                <Slider
                    className={Layouts.grow}
                    value={[0]}
                    max={100}
                    step={1}
                />

            </div>
        </div>
    );
}