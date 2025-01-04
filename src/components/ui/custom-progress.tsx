import * as React from "react"
import { cn } from "@/lib/utils"

export interface CustomProgressProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max: number
}

const CustomProgress = React.forwardRef<HTMLDivElement, CustomProgressProps>(
  ({ className, value, max, ...props }, ref) => {
    const percentage = (value / max) * 100

    return (
      <div
        ref={ref}
        className={cn(
          "relative h-4 w-full overflow-hidden rounded-full bg-gray-900",
          className
        )}
        {...props}
      >
        <div
          className="h-full w-full flex-1 bg-gradient-to-r from-rose-500 to-purple-600 transition-all duration-300 ease-in-out"
          style={{ transform: `translateX(-${100 - percentage}%)` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-semibold text-white drop-shadow-md">
            {percentage.toFixed(0)}%
          </span>
        </div>
      </div>
    )
  }
)
CustomProgress.displayName = "CustomProgress"

export { CustomProgress }

