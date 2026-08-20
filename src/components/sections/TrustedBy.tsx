/* Official-style monochrome logos for the "Trusted by" strip */

function MetaLogo() {
  return (
    <svg viewBox="0 0 320 60" fill="currentColor" className="h-7 w-auto" aria-label="Meta">
      {/* Möbius infinity mark */}
      <path d="M44 30c0-8.5-5.4-16-12-16-4.1 0-7.8 2.6-11.4 7.8C17.2 26 14.5 30 11 30c-3.8 0-6-4-6-8s2.2-8 6-8c2.4 0 5 1.6 7.6 4.8l4.8-6.2C19.8 8.6 15.6 6 11 6 4.2 6 0 12.4 0 22c0 5 1.6 9 4.4 11.8 2.4 2.4 5.4 3.6 8.8 3.6 4.6 0 8.6-2.4 12.2-7.2 2.4-3.2 4.8-7 7.6-7 4 0 6.4 4.4 6.4 9.2 0 4.6-2 8-5.6 9.8-1 .4-2 .6-3.2.6-3.4 0-6.4-2-9.4-6L17 42.4c3.4 4.4 7.6 7 12.6 7 7.6 0 14.4-6.4 14.4-19.4z" />
      <path d="M44 30c0-8.4 4.2-14 10.2-14 4 0 6.6 1.8 9.4 5.8l4.6-6C64.6 11 60.2 8 54.2 8c-4.4 0-8.4 1.8-11.2 5-1-1.4-2-2.6-3-3.4V30c0 9.6-4.4 15.2-10 15.2-4 0-7.4-2.8-8.6-7.8l-6.2 3.8c2.4 7 7.8 11.4 14.8 11.4 4.2 0 8-1.8 10.8-4.8 1.4 1.6 3 3 4.2 3.8V30z" />
      {/* Meta wordmark */}
      <text x="82" y="45" fontSize="40" fontWeight="700" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif">Meta</text>
    </svg>
  );
}

function OpenAILogo() {
  return (
    <svg viewBox="0 0 340 60" fill="currentColor" className="h-7 w-auto" aria-label="OpenAI">
      {/* Asterisk bloom — 6 petal-like strokes radiating from center */}
      <g transform="translate(30,30)">
        <rect x="-3" y="-20" width="6" height="40" rx="3" transform="rotate(0)" />
        <rect x="-3" y="-20" width="6" height="40" rx="3" transform="rotate(60)" />
        <rect x="-3" y="-20" width="6" height="40" rx="3" transform="rotate(120)" />
      </g>
      {/* OpenAI wordmark */}
      <text x="72" y="45" fontSize="40" fontWeight="600" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif">OpenAI</text>
    </svg>
  );
}

function AnthropicLogo() {
  return (
    <svg viewBox="0 0 380 60" fill="currentColor" className="h-7 w-auto" aria-label="Anthropic">
      {/* Fan/rays spreading upward — simplified Anthropic mark */}
      <g transform="translate(30,52)">
        <rect x="-3" y="-44" width="6" height="44" rx="3" transform="rotate(-30)" />
        <rect x="-3" y="-44" width="6" height="44" rx="3" transform="rotate(-15)" />
        <rect x="-3" y="-44" width="6" height="44" rx="3" transform="rotate(0)" />
        <rect x="-3" y="-44" width="6" height="44" rx="3" transform="rotate(15)" />
        <rect x="-3" y="-44" width="6" height="44" rx="3" transform="rotate(30)" />
      </g>
      {/* Anthropic wordmark */}
      <text x="72" y="45" fontSize="36" fontWeight="600" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif">Anthropic</text>
    </svg>
  );
}

function GoogleLogo() {
  return (
    <svg viewBox="0 0 290 60" fill="currentColor" className="h-7 w-auto" aria-label="Google">
      {/* "G" letterform — arc + cross-bar */}
      <path d="M30 8C18.4 8 9 17.4 9 29s9.4 21 21 21c10.6 0 19.2-7.2 20.6-16.7H30v-7.6h21.4c.4 1.6.6 3.2.6 5C52 43 42.8 52 30 52 15.6 52 4 40.4 4 26 4 11.6 15.6 0 30 0c7 0 13.2 2.6 17.8 7L43 11.8C38 7.2 34.2 4.2 30 4.2z" />
      <text x="66" y="45" fontSize="40" fontWeight="600" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif">Google</text>
    </svg>
  );
}

function MistralLogo() {
  return (
    <svg viewBox="0 0 270 60" fill="currentColor" className="h-7 w-auto" aria-label="Mistral AI">
      {/* Stacked square blocks — Mistral's grid/block mark */}
      <rect x="4"  y="8"  width="18" height="18" rx="2" />
      <rect x="26" y="8"  width="18" height="18" rx="2" />
      <rect x="4"  y="30" width="18" height="18" rx="2" />
      <rect x="26" y="30" width="18" height="18" rx="2" />
      {/* Mistral wordmark */}
      <text x="56" y="45" fontSize="38" fontWeight="600" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif">mistral</text>
    </svg>
  );
}

function HuggingFaceLogo() {
  return (
    <svg viewBox="0 0 390 60" fill="currentColor" className="h-7 w-auto" aria-label="Hugging Face">
      {/* Simplified smiley face mark */}
      <circle cx="30" cy="30" r="24" fill="none" stroke="currentColor" strokeWidth="4.5" />
      {/* Eyes */}
      <circle cx="21" cy="24" r="3.5" />
      <circle cx="39" cy="24" r="3.5" />
      {/* Smile */}
      <path d="M18 36 Q30 46 42 36" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      {/* Hugging Face wordmark */}
      <text x="66" y="45" fontSize="34" fontWeight="600" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif">Hugging Face</text>
    </svg>
  );
}

const logos = [
  { name: "Meta",        Logo: MetaLogo },
  { name: "OpenAI",      Logo: OpenAILogo },
  { name: "Anthropic",   Logo: AnthropicLogo },
  { name: "Google",      Logo: GoogleLogo },
  { name: "Mistral AI",  Logo: MistralLogo },
  { name: "Hugging Face",Logo: HuggingFaceLogo },
];

export function TrustedBy() {
  return (
    <section className="bg-zinc-950 py-14">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <p className="mb-10 text-center text-xs tracking-widest text-zinc-600 uppercase">
          Trusted by forward-thinking businesses
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {logos.map(({ name, Logo }) => (
            <div
              key={name}
              className="text-zinc-500 transition-colors duration-200 hover:text-zinc-300"
            >
              <Logo />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
