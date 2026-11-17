import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VYBEFORMIQ | Case Study & Technical Breakdown",
  description: "A browser audio visualizer combining local Web Audio analysis, Canvas 2D, Three.js, and saved visual presets.",
};

const modes = [
  ["Spectrum", "Frequency bars with peak caps and a reflected floor."],
  ["Orbit", "A circular spectrum and waveform with beat-driven particles."],
  ["Nebula", "A 3D particle cloud mapped to frequency bands."],
  ["Tunnel", "Geometric rings driven by audio level and beat."],
  ["Ambient", "Slow colour fields for a second monitor."],
];

export default function VybeformiqCaseStudy() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 md:px-12 font-space">
      <article className="max-w-5xl mx-auto space-y-16">
        <Link href="/#work" className="text-accent text-sm">← Back to portfolio</Link>
        <header className="space-y-6 border-b border-white/15 pb-12">
          <p className="text-accent uppercase tracking-widest text-sm">2026 / Interactive audio / Case study</p>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter break-words">VYBEFORMIQ</h1>
          <p className="text-2xl text-accent">Sound. Reimagined.</p>
          <p className="text-lg text-white/70 max-w-3xl leading-relaxed">An audio-reactive visualizer that turns music into frequency bars, circular waveforms, particles, and moving geometry. Audio analysis runs locally in the browser without uploading the sound.</p>
          <nav aria-label="Project links" className="flex flex-wrap gap-6 text-sm font-bold">
            <a href="https://vybeformiq.vercel.app/" target="_blank" rel="noreferrer" className="text-accent">Launch VYBEFORMIQ ↗</a>
            <a href="https://github.com/DTE-84/VYBEFORMIQ" target="_blank" rel="noreferrer">GitHub source ↗</a>
            <a href="#technical-breakdown">Technical breakdown ↓</a>
          </nav>
        </header>
        <section className="space-y-5">
          <h2 className="text-3xl font-bold">The experience</h2>
          <p className="text-white/70 leading-relaxed">The design brings source selection, playback, and visual controls into one studio. Listeners can share device audio, use a microphone, choose or drop audio files, or play bundled Creator Studio tracks. Shared tab or screen audio is intended for desktop Chrome and Edge and requires enabling audio in the browser sharing dialog.</p>
          <p className="text-white/70 leading-relaxed">Sensitivity, bass intensity, density, five palettes, and custom colours let listeners shape the stage. Named setups persist in the browser. Keys 1–5 switch modes, Space controls file playback, and F toggles fullscreen.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {modes.map(([name, description]) => (
              <div key={name} className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <h3 className="text-xl font-bold text-accent mb-2">{name}</h3>
                <p className="text-white/70">{description}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="technical-breakdown" className="space-y-8 scroll-mt-8">
          <h2 className="text-3xl font-bold">Technical breakdown</h2>
          <p className="text-accent">React 18 · TypeScript · Vite · Tailwind CSS 3 · Web Audio API · Canvas 2D · Three.js / React Three Fiber · Zustand</p>
          <div className="space-y-6 text-white/70 leading-relaxed">
            <div><h3 className="text-xl text-white font-bold mb-2">01 / One analysis engine, multiple sources</h3><p>The audio engine routes files through an HTMLAudioElement and captures microphone or shared audio through MediaStream sources. An AnalyserNode uses a 2048-point FFT to produce 64 logarithmically spaced bands, waveform samples, bass, mids, treble, and overall level. Beat detection compares bass energy against its recent average.</p></div>
            <div><h3 className="text-xl text-white font-bold mb-2">02 / A shared frame drives the visuals</h3><p>Canvas 2D modes and the Three.js scene consume the same audio frame. Nebula and Tunnel load the 3D scene lazily when selected. Synthetic idle motion keeps the stage active before playback. Frame buffers are reused rather than recreated for every analysis call.</p></div>
            <div><h3 className="text-xl text-white font-bold mb-2">03 / Persistent controls</h3><p>Zustand separates visual settings from playback state. Its persistence middleware stores palettes, mode, sensitivity, bass intensity, density, and named presets in localStorage.</p></div>
            <div><h3 className="text-xl text-white font-bold mb-2">04 / Source lifecycle and feedback</h3><p>Captured streams feed analysis without playing back through the speakers, avoiding microphone feedback. Source changes stop existing stream tracks; file selection revokes previous object URLs. Missing shared audio and blocked microphone access surface actionable messages.</p></div>
          </div>
        </section>
        <section className="space-y-4 border-t border-white/15 pt-10">
          <h2 className="text-3xl font-bold">Implementation reference</h2>
          <p className="text-white/70">This case study describes the implementation in the repository; it makes no measured performance or usage claims.</p>
          <ul className="space-y-3 text-accent">
            {[['README.md', 'Project overview'], ['client/audio/engine.ts', 'Audio engine'], ['client/components/studio/Stage.tsx', 'Visual stage'], ['client/store/settings.ts', 'Settings and saved presets']].map(([path, label]) => (
              <li key={path}><a href={`https://github.com/DTE-84/VYBEFORMIQ/blob/main/${path}`} target="_blank" rel="noreferrer">{label} ↗</a></li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
