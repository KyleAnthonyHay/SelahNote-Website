"use client";

import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-xl">
      <div className="max-w-[1120px] mx-auto px-6 flex items-center justify-between h-[60px]">
        <div className="flex items-center gap-1.5 cursor-pointer">
          <WillowLogo />
          <span className="text-[17px] font-semibold text-[#2d2b55] tracking-[-0.01em]">
            Willow
          </span>
        </div>

        <div className="flex items-center gap-0">
          <NavItem label="Individuals" hasDropdown />
          <NavItem label="Teams" />
          <NavItem label="Wall of Love" />
          <NavItem label="Pricing" />
          <NavItem label="Resources" hasDropdown />
        </div>

        <button className="flex items-center gap-2 bg-[#1a1a2e] hover:bg-[#2a2a3e] text-white text-[13px] font-medium rounded-lg px-4 py-[9px] transition-colors cursor-pointer">
          <AppleIcon />
          Download for Mac
        </button>
      </div>
    </nav>
  );
}

function NavItem({ label, hasDropdown }: { label: string; hasDropdown?: boolean }) {
  return (
    <button className="flex items-center gap-0.5 text-[14px] text-[#555] hover:text-[#1a1a2e] px-3.5 py-2 rounded-lg transition-colors font-medium cursor-pointer">
      {label}
      {hasDropdown && <ChevronDown className="w-3.5 h-3.5 ml-0.5 text-[#999]" strokeWidth={2.5} />}
    </button>
  );
}

function WillowLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 3C16 3 11.5 9 11.5 15C11.5 17.8 12.8 20.2 14.5 22C11.2 20.5 8.5 17.2 7.5 13.5C7.5 13.5 5 18.5 8 23.5C10.2 27 13.8 29 16 29.5C18.2 29 21.8 27 24 23.5C27 18.5 24.5 13.5 24.5 13.5C23.5 17.2 20.8 20.5 17.5 22C19.2 20.2 20.5 17.8 20.5 15C20.5 9 16 3 16 3Z"
        fill="#4b4acf"
      />
      <path
        d="M16 9C16 9 14 12.5 14 16C14 18 14.8 19.5 16 20.8C17.2 19.5 18 18 18 16C18 12.5 16 9 16 9Z"
        fill="#7c7cf5"
        opacity="0.5"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.182 8.894c-.02-1.825 1.49-2.702 1.558-2.744-.848-1.24-2.168-1.41-2.638-1.43-1.123-.114-2.193.662-2.764.662-.57 0-1.452-.645-2.386-.628-1.228.018-2.36.714-2.993 1.813-1.275 2.213-.327 5.493.917 7.292.608.88 1.332 1.868 2.284 1.833.916-.037 1.263-.593 2.371-.593 1.109 0 1.418.593 2.382.575.986-.017 1.607-.897 2.211-1.78.697-1.021.983-2.01 1-2.061-.022-.01-1.92-.737-1.942-2.939zM9.355 3.603C9.856 2.994 10.197 2.162 10.107 1.5c-.718.029-1.588.478-2.103 1.082-.462.534-.866 1.387-.758 2.205.8.062 1.618-.407 2.109-1.184z" />
    </svg>
  );
}
