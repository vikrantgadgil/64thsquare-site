export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-6">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} 64thSquare LLC. All rights reserved.
          </p>
          <a
            href="mailto:contact@64thsquare.com"
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            contact@64thsquare.com
          </a>
        </div>
      </div>
    </footer>
  );
}
