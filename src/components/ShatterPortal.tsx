"use client";

import React, { useState } from "react";
import gsap from "gsap";

const ShatterPortal = () => {
  const [isShattering, setIsShattering] = useState(false);

  const triggerShatter = () => {
    setIsShattering(true);
    
    const container = document.getElementById("shatter-container");
    if (!container) return;

    for (let i = 0; i < 40; i++) {
      const shard = document.createElement("div");
      shard.className = "absolute bg-[#7dd3fc] border border-white/20 opacity-80";
      shard.style.width = Math.random() * 150 + 50 + "px";
      shard.style.height = Math.random() * 150 + 50 + "px";
      shard.style.left = Math.random() * 100 + "%";
      shard.style.top = Math.random() * 100 + "%";
      shard.style.clipPath = "polygon(" + (Math.random()*100) + "% " + (Math.random()*100) + "%, " + (Math.random()*100) + "% " + (Math.random()*100) + "%, " + (Math.random()*100) + "% " + (Math.random()*100) + "%)";
      container.appendChild(shard);

      gsap.to(shard, {
        x: (Math.random() - 0.5) * 2000,
        y: (Math.random() - 0.5) * 2000,
        rotation: Math.random() * 720,
        opacity: 0,
        scale: 0,
        duration: 2,
        ease: "power4.out",
        onComplete: () => {
          if (i === 39) {
             window.location.href = "https://nova-castle.vercel.app";
          }
        }
      });
    }

    gsap.to(".shatter-flash", {
      opacity: 1,
      duration: 0.1,
      onComplete: () => {
        gsap.to(".shatter-flash", { opacity: 0, duration: 1 });
      }
    });
  };

  return (
    <>
      <div id="shatter-container" className="fixed inset-0 z-[20000] pointer-events-none overflow-hidden" />
      <div className="shatter-flash fixed inset-0 bg-white z-[20001] opacity-0 pointer-events-none" />
      
      <button 
        onClick={triggerShatter}
        disabled={isShattering}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 px-10 py-5 bg-black border-2 border-[#a855f7] text-[#a855f7] font-black uppercase tracking-[0.5em] text-[10px] rounded-full hover:bg-[#a855f7] hover:text-black transition-all shadow-[0_0_40px_rgba(168,85,247,0.3)] z-[10000] group"
      >
        <span className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse shadow-[0_0_10px_#a855f7]" />
          Establish Uplink
        </span>
      </button>
    </>
  );
};

export default ShatterPortal;
