import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function Section({ children, className = '', id, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${dark ? 'bg-slate-900 text-white' : 'bg-white'} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-light text-center mb-12 ${className}`}>
      {children}
    </h2>
  );
}

export function SectionSubtitle({ children }: { children: ReactNode }) {
  return (
    <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
      {children}
    </p>
  );
}
