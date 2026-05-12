export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 md:flex-row md:justify-between">
        {/* Brand Section */}
        <div className="max-w-sm">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            TeamTaskManagement
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Simplify collaboration, track progress in real time, and keep your
            team aligned with an intuitive task management experience.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a
              href="#"
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Twitter
            </a>
            <a
              href="#"
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              GitHub
            </a>
            <a
              href="#"
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Product
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a href="#features" className="transition hover:text-slate-900">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition hover:text-slate-900">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#dashboard" className="transition hover:text-slate-900">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a href="#about" className="transition hover:text-slate-900">
                  About
                </a>
              </li>
              <li>
                <a href="#careers" className="transition hover:text-slate-900">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-slate-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Support
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a href="#help" className="transition hover:text-slate-900">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#privacy" className="transition hover:text-slate-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="transition hover:text-slate-900">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 bg-slate-50 px-6 py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-slate-500 md:flex-row">
          <p>© 2026 TeamTask. All rights reserved.</p>
          <p>Built for productive and collaborative teams.</p>
        </div>
      </div>
    </footer>
  )
}
