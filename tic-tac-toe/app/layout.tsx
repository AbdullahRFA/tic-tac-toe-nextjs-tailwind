// Import the Metadata type from Next.js for defining page metadata
import type { Metadata } from 'next';

// Import global styles (Tailwind directives are inside globals.css)
import './globals.css';

// Define metadata for the entire app (used by Next.js for SEO and browser info)
export const metadata: Metadata = {
  title: 'Tic-Tac-Toe', // Title shown in browser tab
  description: 'Simple two-player Tic-Tac-Toe built with Next.js + Tailwind', // Meta description
};

// Define the root layout component that wraps all pages
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Set the language of the document to English
    <html lang="en">
      {/* Apply global styles to the <body> */}
      <body className="bg-slate-100 text-slate-900 antialiased">
        {/* Render the page content passed as children */}
        {children}
      </body>
    </html>
  );
}
