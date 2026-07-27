import PlayerLeft from "./PlayerLeft";
import PlayerCenter from "./PlayerCenter";
import PlayerRight from "./PlayerRight";
import {DesignSystem} from "@/shared/styles/design-system.ts";
import {cn} from "@/shared/lib/utils.ts";

export default function Player() {
    return (
        <footer
            className={cn(
                "flex items-center border-t border-border bg-background px-6",
                DesignSystem.player.height
            )}
        >
            <div className="flex flex-1 justify-start">
                <PlayerLeft />
            </div>

            <div className="flex flex-1 justify-center">
                <PlayerCenter />
            </div>

            <div className="flex flex-1 justify-end">
                <PlayerRight />
            </div>
        </footer>
    );
}