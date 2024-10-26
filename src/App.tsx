import React from 'react';
import { Test } from '@/components/Test';
import Home from "@/pages/home"



function App() {
  return (
    <div className="bg-black w-full h-[800px]">
      <Test />
      <Home />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
