import { GlowButton } from "./glow-button"

export default function GlowButtonDemo() {
  return (
    <div className="flex flex-col items-center gap-4 p-12 bg-[#0A0B0D]">
      {/* Default Style */}
      <GlowButton>
        Explore Strategies Now
      </GlowButton>

      {/* Custom Glow Color */}
      <GlowButton glowColor="rgba(147, 51, 234, 0.3)">
        Connect Wallet
      </GlowButton>

      {/* Without Arrow */}
      <GlowButton showArrow={false}>
        View Details
      </GlowButton>

      {/* Disabled State */}
      <GlowButton disabled>
        Processing...
      </GlowButton>
    </div>
  )
}

