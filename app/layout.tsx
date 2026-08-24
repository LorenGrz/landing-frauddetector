import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fraud Detector — Detección de fraude bancario sin dataset etiquetado',
  description:
    'Sistema de detección de anomalías en transacciones bancarias. Consenso de 3 modelos de ML no supervisado (Isolation Forest, LOF, K-Means) y dashboard interactivo con Plotly. Portfolio preview.',
  openGraph: {
    title: 'Fraud Detector',
    description: 'Detección de fraude bancario con consenso de 3 modelos de ML no supervisado.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background font-body text-on-surface antialiased">{children}</body>
    </html>
  );
}
