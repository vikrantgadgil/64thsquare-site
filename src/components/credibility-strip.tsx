export function CredibilityStrip() {
  const credentials = [
    "CISSP",
    "CISM",
    "PMP",
    "ITIL Foundation",
    "CIO / CISO Experience",
  ];

  return (
    <section className="border-y border-border/40 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:py-10">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
          {/* Main text */}
          <p className="max-w-2xl text-center text-sm leading-relaxed text-slate sm:text-left sm:text-base">
            <span className="font-semibold text-navy">
              Led by Vikrant &ldquo;Vik&rdquo; Gadgil
            </span>
            &nbsp;&mdash;&nbsp;former CIO/CISO and senior technology advisor
            with 30+ years across enterprise transformation, cybersecurity, ERP,
            governance, AI, and complex program execution.
          </p>

          {/* Credential chips */}
          <div className="flex shrink-0 flex-wrap justify-center gap-2 sm:justify-start">
            {credentials.map((cred) => (
              <span
                key={cred}
                className="inline-block rounded-full border border-teal/20 bg-teal/[0.04] px-3 py-1 text-[11px] font-medium text-teal sm:text-xs"
              >
                {cred}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
