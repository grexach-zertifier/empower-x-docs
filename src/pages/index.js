import React, {useEffect} from 'react';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';

// Redirect the site root to the docs About page.
// This ensures the first page users see is the docs About.
export default function HomeRedirect() {
  const target = useBaseUrl('/documentacion/about/');
  // Client-side redirect (works in SPA navigation)
  useEffect(() => {
    window.location.replace(target);
  }, []);

  // SSR/static fallback: meta refresh + link
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
      </Head>
      <div style={{padding: '2rem', textAlign: 'center'}}>
        <p>Redirigiendo a la documentación…</p>
        <a href={target}>Ir a About</a>
      </div>
    </>
  );
}
