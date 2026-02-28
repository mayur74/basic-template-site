const projects = [
  {
    title: 'Nebula Commerce',
    description: 'A full-stack storefront with secure checkout and live analytics.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js']
  },
  {
    title: 'Pulse Dashboard',
    description: 'Realtime KPI board with role-based auth and team collaboration.',
    stack: ['Tailwind', 'Socket.IO', 'JWT', 'Mongoose']
  },
  {
    title: 'Portfolio CMS',
    description: 'Manage portfolio sections with markdown support and image uploads.',
    stack: ['Cloudinary', 'REST API', 'React Query', 'Vite']
  }
];

export default function App() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <section className="w-full max-w-5xl rounded-3xl border border-slate-700/70 bg-slate-900/70 p-8 shadow-soft backdrop-blur-xl md:p-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <article className="space-y-6">
            <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
              MERN Stack Developer
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              Hi, I’m <span className="text-cyan-300">Alex</span>. I craft aesthetic, dark-mode web experiences.
            </h1>
            <p className="max-w-xl text-slate-300 md:text-lg">
              I build scalable apps with MongoDB, Express, React, and Node.js—focused on clean UX, smooth micro-interactions, and high performance.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="rounded-xl bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-cyan-200" href="#projects">
                View Projects
              </a>
              <a className="rounded-xl border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-slate-400" href="mailto:alex@portfolio.dev">
                Contact Me
              </a>
            </div>
          </article>

          <aside className="space-y-4 rounded-2xl border border-slate-700 bg-slate-950/80 p-6">
            <h2 className="text-lg font-semibold text-white">Core Skills</h2>
            <ul className="grid grid-cols-2 gap-2 text-sm text-slate-300">
              {['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind', 'TypeScript'].map((skill) => (
                <li key={skill} className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-center">
                  {skill}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div id="projects" className="mt-10 grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="rounded-2xl border border-slate-700 bg-slate-950/90 p-5 transition hover:-translate-y-1 hover:border-cyan-300/60">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-md bg-slate-800 px-2 py-1 text-xs text-cyan-200">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
