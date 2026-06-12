export default function Section({ title, children }) {
  return (
    <section className="project-section">
      <h2 className="project-section__title">{title}</h2>
      <div className="project-section__content">{children}</div>
    </section>
  );
}
