export default function ContactCta({ title, description, buttonLabel }) {
  return (
    <section
      id="contact"
      className="py-16 bg-accent text-white relative overflow-hidden"
    >
      <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] mb-6">
          {title}
        </h2>
        <p className="text-lg leading-relaxed opacity-90 mb-12">
          {description}
        </p>
        <a
          href="mailto:edensahile28@gmail.com"
          className="inline-flex items-center gap-3 bg-white text-accent px-12 py-5 font-bold text-lg hover:bg-white/90 transition-colors"
        >
          {buttonLabel}
          <span className="msym">send</span>
        </a>
      </div>
    </section>
  );
}
