import { useMemo } from 'react';
import { Fleet } from './Fleet';

export function App() {
  return (
    <main className="app">
      <header>
        <h1>🤖 Robot Console</h1>
        <Subtitle />
      </header>
      <Fleet />
    </main>
  );
}

// A tiny derived/presentational child to show composition.
function Subtitle() {
  // useMemo: compute the greeting once (it never changes here).
  const tagline = useMemo(() => 'Live status for your fleet', []);
  return <p className="subtitle">{tagline}</p>;
}
