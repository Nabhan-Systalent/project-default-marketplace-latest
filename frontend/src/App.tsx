import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// App shell synthesised by the AEGIS integration pass [SYS-270].
// Routes and navigation are driven by the design IA block (SYS-268).
// Do not edit manually — re-run the integration pass to regenerate.

const Page0 = lazy(() => import('./pages/story-5/index'));
const Page1 = lazy(() => import('./pages/story-6/index'));
const Page2 = lazy(() => import('./pages/story-7/index'));

const NAV_STYLE: React.CSSProperties = {
  display: 'flex',
  gap: '1rem',
  padding: '0.75rem 1.5rem',
  borderBottom: '1px solid #e5e7eb',
  background: '#fff',
};
const LINK_STYLE: React.CSSProperties = { color: '#374151', textDecoration: 'none' };
const ACTIVE_STYLE: React.CSSProperties = { ...LINK_STYLE, fontWeight: 600 };

export default function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: 'system-ui, sans-serif', minHeight: '100vh', background: '#f9fafb' }}>
        <nav style={NAV_STYLE}>
          <Link to="/" style={ACTIVE_STYLE}>Dashboard</Link>
          <Link to="/orders" style={LINK_STYLE}>Order Management</Link>
          <Link to="/inventory" style={LINK_STYLE}>Stock Control</Link>
        </nav>
        <main style={{ padding: '2rem 1.5rem', maxWidth: 1024, margin: '0 auto' }}>
          <Suspense fallback={<p>Loading…</p>}>
            <Routes>
              <Route path="/" element={<Page0 />} />
              <Route path="/orders" element={<Page1 />} />
              <Route path="/inventory" element={<Page2 />} />
              <Route path="*" element={<p style={{ color: '#6b7280' }}>Page not found.</p>} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}
