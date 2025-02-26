interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string; // Para personalizar si es necesario
  idSection?: string; // Para identificar la sección en el código HTML
}

export const SectionWrapper = ({ children, className = "", idSection }: SectionWrapperProps) => {
  return <section
    id={idSection}
    className={`container mx-auto px-4 py-12 ${className}`}>{children}</section>;
};
