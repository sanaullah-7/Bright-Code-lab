

export default function ServicePage({
  title,
  description,

}) {
  return (
    <section className="py-30 text-center">
      <h1 className="text-6xl font-bold">
        {title}
      </h1>

      <p>{description}</p>

  
    </section>
  );
}