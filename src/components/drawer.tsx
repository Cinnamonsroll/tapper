import { Drawer } from "vaul";

export function DrawerSettings({
    data,
    setData
}: {
    data: any,
    setData: any
}) {
    const colors: { [key: string]: string } = {
        slate: "bg-slate-600",
        gray: "bg-gray-600",
        zinc: "bg-zinc-600",
        red: "bg-red-600",
        orange: "bg-orange-600",
        amber: "bg-amber-600",
        yellow: "bg-yellow-600",
        lime: "bg-lime-600",
        green: "bg-green-600",
        emerald: "bg-emerald-600",
        teal: "bg-teal-600",
        cyan: "bg-cyan-600",
        sky: "bg-sky-600",
        blue: "bg-blue-600",
        indigo: "bg-indigo-600",
        violet: "bg-violet-600",
        purple: "bg-purple-600",
        fuchsia: "bg-fuchsia-600",
        pink: "bg-pink-600",
        rose: "bg-rose-600",
    };
    const drawerColors = {
        slate: "bg-slate-300",
        gray: "bg-gray-300",
        zinc: "bg-zinc-300",
        red: "bg-red-300",
        orange: "bg-orange-300",
        amber: "bg-amber-300",
        yellow: "bg-yellow-300",
        lime: "bg-lime-300",
        green: "bg-green-300",
        emerald: "bg-emerald-300",
        teal: "bg-teal-300",
        cyan: "bg-cyan-300",
        sky: "bg-sky-300",
        blue: "bg-blue-300",
        indigo: "bg-indigo-300",
        violet: "bg-violet-300",
        purple: "bg-purple-300",
        fuchsia: "bg-fuchsia-300",
        pink: "bg-pink-300",
        rose: "bg-rose-300",
    };
    return (
        <>
            <Drawer.Overlay
                data-testid="overlay"
                className="fixed inset-0 bg-black/30"
            />
            <Drawer.Content
                data-testid="content"
                className={`bg-opacity-50 ${(drawerColors as any)[data.theme.background]} flex fixed p-6 rounded-t-[10px] flex-col h-[50%] bottom-0 left-0 right-0`}
            >
                <div className={"w-full h-full flex rounded-full gap-8 flex-col"}>
                    <div className={"rounded-full bg-zinc-300 mx-auto w-12 h-1.5"} />
                    <div className="w-full h-full flex flex-col">
                        <div className="flex justify-center w-full">
                            <Drawer.Title className="text-lg font-bold mb-4 text-white">
                                Settings.
                            </Drawer.Title>
                        </div>
                        <div className="flex p-2 flex-col">
                            <div className="w-full flex gap-2 items-center">
                                <p className="text-white font-bold">Text Color</p>
                                <div className="w-3/4 bg-white bg-opacity-70 h-px rounded-full"></div>
                            </div>
                            <div className="flex gap-3 p-2">
                                <div
                                    className={`bg-white p-3 rounded-full border-2 transition-colors ${data.theme.text === "white" ? "border-green-500" : "border-transparent"
                                        }`}
                                    onClick={() => {
                                        setData({
                                            ...data,
                                            theme: {
                                                ...data.theme,
                                                text: "white",
                                            },
                                        });
                                    }}
                                ></div>
                                <div
                                    className={`bg-black p-3 rounded-full border-2 transition-colors ${data.theme.text === "black" ? "border-green-500" : "border-transparent"
                                        }`}
                                    onClick={() => {
                                        setData({
                                            ...data,
                                            theme: {
                                                ...data.theme,
                                                text: "black",
                                            },
                                        });
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className="flex p-2 flex-col">
                            <div className="w-full flex gap-2 items-center">
                                <p className="text-white font-bold">Background Color</p>
                                <div className="w-3/4 bg-white bg-opacity-70 h-px rounded-full"></div>
                            </div>
                            <div className="gap-3 p-2 grid grid-cols-6 w-full">
                                {Object.keys(colors).map((color: string, index: number) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`${colors[color]} w-7 h-7 rounded-full border-2 transition-colors ${data.theme.background === color ? "border-green-500" : "border-transparent"
                                                }`}
                                            onClick={() => {
                                                setData({
                                                    ...data,
                                                    theme: {
                                                        ...data.theme,
                                                        background: color,
                                                    },
                                                });
                                            }}
                                        ></div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Drawer.Content>
        </>
    );
}
