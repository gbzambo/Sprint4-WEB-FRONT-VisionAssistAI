export default function FeatureCard({
  index,
  title,
  description,
}) {

  return (
    <article
      className="
        rounded-2xl
        border
        border-black/[.07]
        bg-white
        p-7
        shadow-sm
      "
    >

      <p className="
        mb-3
        text-xs
        font-semibold
        uppercase
        tracking-widest
        text-amberStrong
      ">
        {index}
      </p>

      <h3 className="
        font-display
        text-xl
        font-semibold
        text-ink
      ">
        {title}
      </h3>

      <p className="
        mt-3
        leading-7
        text-[#4B5262]
      ">
        {description}
      </p>

    </article>
  );
}