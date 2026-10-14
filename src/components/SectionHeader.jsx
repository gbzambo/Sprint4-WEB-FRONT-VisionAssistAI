export default function SectionHeader({
  eyebrow,
  title,
  children,
  dark = false,
}) {

  return (
    <div className="mb-12 max-w-3xl">

      <p
        className={`
          mb-3
          text-xs
          font-bold
          uppercase
          tracking-[.14em]

          ${
            dark
              ? "text-amber"
              : "text-amberStrong"
          }
        `}
      >
        {eyebrow}
      </p>

      <h2
        className={`
          font-display
          text-3xl
          font-semibold
          leading-tight
          md:text-4xl

          ${
            dark
              ? "text-paper"
              : "text-ink"
          }
        `}
      >
        {title}
      </h2>

      {children && (

        <p
          className={`
            mt-5
            text-base
            leading-7

            ${
              dark
                ? "text-paperSoft"
                : "text-[#4B5262]"
            }
          `}
        >
          {children}
        </p>

      )}

    </div>
  );
}