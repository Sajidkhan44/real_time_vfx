import React from 'react'

export default function SectionWrapper( { children, className = "" } ) {
  return (
    <div className={`px-6 md:px-16 py-[120px] font-sans bg-transparent ${className}`}>
      <div className="max-w-7xl mx-auto space-y-12">{children}</div>
    </div>
  );
}
