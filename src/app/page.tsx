"use client"
import React, { useEffect, useState } from "react";

const defaultData = {
  theme: {
    background: "bg-violet-600",
    text: "text-white"
  },
  count: 0
};

const getData = () => {
  if (typeof window !== 'undefined') {
    const storedData = localStorage.getItem("data");
    return storedData ? JSON.parse(storedData) : defaultData;
  } else {
    return defaultData;
  }
}; 

const updateData = (newData: typeof defaultData) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem("data", JSON.stringify(newData));
  }
};

export default function Home() {
  const [data, setData] = useState(getData());

  useEffect(() => {
    setData(getData());
  }, []);

  const handleClick = () => {
    const newData = { ...data, count: data.count + 1 };
    updateData(newData);

    if (typeof window !== 'undefined' && 'vibrate' in window.navigator) {
      window.navigator.vibrate(10);
    }

    setData(newData);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-violet-600 text-white" onClick={handleClick}>
      <p className="text-5xl font-bold">{data.count}</p>
    </div>
  );
}
