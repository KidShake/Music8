export const DesignSystem = {

    player: {
        // Layout
        height: "h-20",
        centerWidth: "max-w-xl",

        // Cover
        coverSize: "h-12 w-12",
        coverRadius: "rounded-md",
        coverContainer: "bg-muted",

        // Buttons
        buttonSize: "h-10 w-10",
        buttonRadius: "rounded-full",

        //Icons
        icon: "h-4 w-4",
        playIcon: "h-5 w-5 fill-current",

        // Volume
        volumeWidth: "w-28",

    },

    //Spacing
    spacing: {
        gap: {
            xs: "gap-1",
            sm: "gap-2",
            md: "gap-3",
            lg: "gap-4",
            xl: "gap-6",
        },

        padding: {
            xs: "p-1",
            sm: "p-2",
            md: "p-3",
            lg: "p-4",
        },
    },

    header: {
        height: "h-16",
        searchWidth: "max-w-xl",
        icon: "h-4 w-4",
    },

    sidebar: {
        width: "w-64",
        icon: "h-5 w-5",
    },
} as const;