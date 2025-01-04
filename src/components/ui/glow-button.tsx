"use client"

import { cn } from "@/lib/utils"
import { ArrowRight } from 'lucide-react'
import { ButtonHTMLAttributes, forwardRef } from "react"

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  showArrow?: boolean
  glowColor?: string
}

const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, children, showArrow = true, glowColor = "rgba(255, 99, 132, 0.3)", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative group inline-flex items-center justify-center px-6 py-3 rounded-lg",
          "bg-white/10 backdrop-blur-sm",
          "text-white font-medium text-sm",
          "transition-all duration-200",
          "hover:bg-white/15",
          "focus:outline-none focus:ring-2 focus:ring-rose-500/50",
          "disabled:opacity-50 disabled:pointer-events-none",
          className
        )}
        {...props}
      >
        {/* Glow Effect */}
        <div
          className="absolute inset-0 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(650px circle at center, ${glowColor}, transparent 40%)`,
          }}
        />
        
        {/* Content */}
        <span className="relative flex items-center gap-2">
          {children}
          {showArrow && (
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          )}
        </span>
      </button>
    )
  }
)
GlowButton.displayName = "GlowButton"

export { GlowButton }

