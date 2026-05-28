"use client";
import { cn } from "@/lib/utils";
import React from "react";

/**
 * AuroraWrapper - A global aurora background wrapper for full-page effect
 * Optimized for dark portfolios with purple/pink color palette
 */
export const AuroraWrapper = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn("relative min-h-screen", className)}
      style={{ background: "#161513" }}
      {...props}
    >
      {/* Fixed Aurora Background Layer - ABOVE the dark background */}
      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        style={{ zIndex: 1 }}
      >
        <div
          className="animate-aurora absolute -inset-[10px] opacity-50 blur-[10px] will-change-transform"
          style={{
            backgroundImage: `
              repeating-linear-gradient(100deg, #161513 0%, #161513 7%, transparent 10%, transparent 12%, #161513 16%),
              repeating-linear-gradient(100deg, #9e94e9 10%, #a5b4fc 15%, #c084fc 20%, #e06d7a 25%, #9e94e9 30%)
            `,
            backgroundSize: "300% 200%",
            backgroundPosition: "50% 50%",
          }}
        />
        {/* Secondary aurora layer for depth */}
        <div
          className="animate-aurora absolute -inset-[10px] opacity-30 blur-[20px] will-change-transform"
          style={{
            backgroundImage: `
              repeating-linear-gradient(100deg, #9e94e9 10%, #c084fc 15%, #e06d7a 20%, #a5b4fc 25%, #9e94e9 30%)
            `,
            backgroundSize: "200% 100%",
            backgroundPosition: "50% 50%",
            animationDelay: "-15s",
            animationDuration: "600s",
          }}
        />
      </div>

      {/* Content Layer - scrollable, above aurora */}
      <div className="relative" style={{ zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
};
