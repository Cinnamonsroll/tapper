"use client";
import { DrawerSettings } from "@/components/drawer";

import React, { useEffect, useState } from "react";
import { Drawer } from "vaul";

const defaultData = {
  theme: {
    background: "purple",
    text: "white",
  },
  count: 0,
};

const getData = () => {
  if (typeof window !== "undefined") {
    const storedData = localStorage.getItem("data");
    return storedData ? JSON.parse(storedData) : defaultData;
  } else {
    return defaultData;
  }
};

const updateData = (newData: typeof defaultData) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("data", JSON.stringify(newData));
  }
};

export default function Home() {
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

  const [data, setData] = useState(getData());

  useEffect(() => {
    setData(getData());
  }, []);

  const handleClick = (event: any) => {
    const { clientX, clientY } = event;

    const rippleElement = document.elementFromPoint(clientX, clientY);
    const isRippleClicked =
      rippleElement && rippleElement.classList.contains("ripple");

    if (!isRippleClicked) {
      const ripple = document.createElement("div");
      ripple.classList.add("ripple", "p-10", "pointer-events-none");
      ripple.style.left = `${clientX}px`;
      ripple.style.top = `${clientY}px`;
      document.body.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);

      const newData = { ...data, count: data.count + 1 };
      updateData(newData);

      if (typeof window !== "undefined" && "vibrate" in window.navigator) {
        window.navigator.vibrate(30);
      }

      setData(newData);
    }
  };

  return (
    <div
      className={`w-full h-screen flex items-center justify-center ${
        colors[data.theme.background]
      }`}
      style={{
        color: data.theme.text,
      }}
    >
      <Drawer.Root>
        <div
          className="w-full h-full flex items-center justify-center"
          onClick={handleClick}
        >
          <p className="text-5xl font-bold">{data.count}</p>
          <div className="absolute bottom-0 flex items-center justify-center p-3">
            <Drawer.Trigger>
              <div className="p-2 rounded-lg flex items-center justify-center backdrop-blur-md bg-white/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
            </Drawer.Trigger>
          </div>
        </div>
        <Drawer.Portal>
          <DrawerSettings data={data} setData={setData} />
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
