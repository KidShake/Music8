import { Volume2 } from "lucide-react";

import { Slider } from "@/shared/components/ui/slider";
import {cn} from "@/shared/lib/utils";
import {DesignSystem} from "@/shared/styles/design-system";
import {Layouts} from "@/shared/styles/layouts";

export default function PlayerRight() {
    return (
        <div className= {cn(
            Layouts.row,
            DesignSystem.spacing.gap.md,
            DesignSystem.player.volumeWidth,
        )}>
            <Volume2
                className={cn(
                    DesignSystem.player.icon,
                    "text-muted-foreground",
                )}
            />

            <Slider
                defaultValue={[75]}
                max={100}
                step={1}
            />
        </div>
    );
}