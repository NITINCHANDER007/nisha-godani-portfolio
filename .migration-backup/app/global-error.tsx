'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', backgroundColor: '#F4F1E9' }}>
        <div
          style={{
            display: 'flex',
            minHeight: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            padding: '2rem',
          }}
        >
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1C2340' }}>
            Something went wrong
          </h1>
          <p style={{ marginBottom: '2rem', color: '#374151' }}>
            A critical error occurred. Please refresh the page.
          </p>
          <button
            onClick={() => reset()}
            style={{
              backgroundColor: '#C9A84C',
              color: '#0A0F1E',
              padding: '0.875rem 2rem',
              borderRadius: '8px',
              border: 'none',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  )
}
