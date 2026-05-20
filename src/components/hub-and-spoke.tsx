"use client";

const spokeLabels = [
  "Senior leadership gap",
  "Program recovery",
  "Cybersecurity clarity",
  "Cloud modernization",
  "Operating model redesign",
  "Compliance readiness",
  "M&A diligence",
  "Independent assessment",
];

export function HubAndSpoke() {
  return (
    <>
      {/* ── Desktop hub-and-spoke ── */}
      <div className="relative hidden lg:block">
        <svg
          viewBox="0 0 400 400"
          className="h-full w-full"
          aria-hidden="true"
        >
          {/* Connector lines from center to each spoke */}
          {spokeLabels.map((_, i) => {
            const angle = (i * 360) / spokeLabels.length - 90;
            const rad = (angle * Math.PI) / 180;
            const x2 = 200 + 140 * Math.cos(rad);
            const y2 = 200 + 140 * Math.sin(rad);
            return (
              <line
                key={i}
                x1={200}
                y1={200}
                x2={x2}
                y2={y2}
                stroke="#8B9DA8"
                strokeWidth="1"
                strokeOpacity="0.5"
              />
            );
          })}

          {/* Center hub */}
          <circle cx={200} cy={200} r={48} fill="#003D5C" />
          <text
            x={200}
            y={194}
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="14"
            fontWeight="700"
            fontFamily="system-ui, sans-serif"
          >
            64thSquare
          </text>
          <text
            x={200}
            y={212}
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="9"
            fontWeight="400"
            fontFamily="system-ui, sans-serif"
            opacity="0.8"
          >
            Technology Advisory
          </text>

          {/* Outer spoke nodes */}
          {spokeLabels.map((label, i) => {
            const angle = (i * 360) / spokeLabels.length - 90;
            const rad = (angle * Math.PI) / 180;
            const cx = 200 + 140 * Math.cos(rad);
            const cy = 200 + 140 * Math.sin(rad);
            const isTop = cy < 180;
            const isBottom = cy > 220;
            const isLeft = cx < 180;
            const isRight = cx > 220;

            let anchor: "start" | "middle" | "end" = "middle";
            let dx = 0;
            let dy = 0;

            if (isLeft) {
              anchor = "end";
              dx = -14;
            } else if (isRight) {
              anchor = "start";
              dx = 14;
            } else {
              anchor = "middle";
            }

            if (isTop) {
              dy = -10;
            } else if (isBottom) {
              dy = 16;
            }

            return (
              <g key={i}>
                <rect
                  x={cx - 6}
                  y={cy - 6}
                  width={12}
                  height={12}
                  rx={3}
                  fill="#FFFFFF"
                  stroke="#20B2AA"
                  strokeWidth="1.5"
                />
                <text
                  x={cx + dx}
                  y={cy + dy}
                  textAnchor={anchor}
                  fill="#1D252C"
                  fontSize="11"
                  fontWeight="500"
                  fontFamily="system-ui, sans-serif"
                >
                  {label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* ── Mobile / tablet simplified list ── */}
      <div className="lg:hidden">
        <div className="grid gap-3 sm:grid-cols-2">
          {spokeLabels.map((label) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-lg border border-border/60 bg-white p-4"
            >
              <div className="h-2.5 w-2.5 shrink-0 rounded-sm bg-teal" />
              <span className="text-sm font-medium text-navy">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
