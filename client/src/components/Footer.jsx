'use client'
import React, { useState, useEffect } from 'react';

export default function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());
  return (
    <div className="flex justify-center items-center h-16 bg-zinc-950 text-zinc-500 text-xs">
      <p>© {year} Liao Zhu</p>
    </div>
  );
}