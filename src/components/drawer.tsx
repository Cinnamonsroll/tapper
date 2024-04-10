import { Drawer } from "vaul";

export function DrawerSettings({ }) {
    return <><Drawer.Overlay data-testid="overlay" className="fixed inset-0 bg-black/40" />
        <Drawer.Content
            data-testid="content"
            className={"bg-zinc-100 flex fixed p-6 rounded-t-[10px] flex-col h-[50%] bottom-0 left-0 right-0"}
        >
            <div
                className={"w-full h-full flex rounded-full gap-8 flex-col"}
            >
                <div
                    className={"rounded-full bg-zinc-300 mx-auto w-12 h-1.5"}
                />
                <div className="grid place-content-center w-full h-full">
                    <div className="max-w-md mx-auto">
                        <Drawer.Title className="font-medium mb-4">Unstyled drawer for React.</Drawer.Title>
                        <p className="text-zinc-600 mb-2">
                            This component can be used as a replacement for a Dialog on mobile and tablet devices.
                        </p>
                        <p className="text-zinc-600 mb-8">
                            It uses{' '}
                            <a href="https://www.radix-ui.com/docs/primitives/components/dialog" className="underline" target="_blank">
                                Radix&apos;s Dialog primitive
                            </a>{' '}
                            under the hood and is inspired by{' '}
                            <a href="https://twitter.com/devongovett/status/1674470185783402496" className="underline" target="_blank">
                                this tweet.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </Drawer.Content></>
}