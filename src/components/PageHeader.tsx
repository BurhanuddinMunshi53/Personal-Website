interface PageHeaderProps {
  index: string;
  title: string;
  subtitle: string;
  command?: string;
}

const PageHeader = ({ index, title, subtitle }: PageHeaderProps) => (
  <section className="border-b border-border">
    <div className="container py-14 md:py-24">
      <p className="eyebrow mb-4">{index} · {title}</p>
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] max-w-4xl">
        {title}.
      </h1>
      <p className="text-base md:text-lg text-muted-foreground mt-5 md:mt-6 max-w-2xl leading-relaxed">
        {subtitle}
      </p>
    </div>
  </section>
);

export default PageHeader;
