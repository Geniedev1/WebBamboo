import React, { useEffect } from 'react'
import { Header } from '../Component/Header'
import { Footer } from '../Component/Footer'

export const Blog = () => {
  useEffect(() => { window.scrollTo(0, 0) }, []);

  const handleToggleDark = () => {
    document.documentElement.classList.toggle('focus');
  };

  return (
    <>
      <Header />
      <main className="p-6 mt-80">
        <h1></h1>
        <div className="m-10 flex justify-between">
          <div className="h-16 w-16 rounded-full bg-blue-300"></div>
          <div className="h-16 w-16 rounded-full bg-blue-300"></div>
          <div className="h-16 w-16 rounded-full bg-blue-300"></div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-1">
          <div className="h-10 bg-fuchsia-700"></div>
          <div className="h-10 bg-fuchsia-700"></div>
          <div className="h-10 bg-fuchsia-700"></div>
        </div>

        <div className="md:hidden">
          <p>This biger 768</p>
        </div>
        <div className="max-md:hidden">
          <p>This smaller 768</p>
        </div>

        <button className="my-4 rounded-lg bg-amber-500 px-4 py-2 hover:bg-amber-600 focus:bg-amber-50 active:bg-blue-950">
          Click me
        </button>

        <ul className="my-2 flex flex-wrap space-y-0.5 max-md:justify-center md:justify-start">
          <li className="w-64 rounded-t-3xl p-2 first:bg-amber-600">Item</li>
          <li className="w-64 p-2 first:bg-amber-600 odd:bg-blue-300 even:bg-fuchsia-500">Item</li>
          <li className="w-64 p-2 first:bg-amber-600 odd:bg-blue-300 even:bg-fuchsia-500">Item</li>
          <li className="w-64 p-2 first:bg-amber-600 odd:bg-blue-300 even:bg-fuchsia-500">Item</li>
          <li className="w-64 rounded-b-3xl p-2 first:bg-amber-600 odd:bg-blue-300 even:bg-fuchsia-500 mb-0.5">Item</li>
        </ul>

        {/* CARD BOX + DARK TOGGLE */}
        <div className="m-4 shadow-xl rounded-2xl py-4 px-4 ring-1 ring-slate-900/5 focus:bg-black">
          <h3 className="text-base font-medium text-slate-900 dark:text-white tracking-tight">This is Text</h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">This is mean</p>
          <button
            onClick={handleToggleDark}
            className="mt-8 py-2 px-4 rounded-md font-medium bg-amber-500 hover:bg-amber-600"
          >
            Click To Dark
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};
