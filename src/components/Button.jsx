import { Link } from "react-router-dom";

const variants = {

  primary:
    "bg-amber text-[#191204] hover:-translate-y-0.5 hover:bg-[#F0AE4E]",

  ghost:
    "border border-white/30 text-paper hover:border-amber hover:text-amber",
};

export default function Button({
  children,
  to,
  variant = "primary",
  type = "button",
  className = "",
  ...props
}) {

  const classes = `
    inline-flex
    items-center
    justify-center
    rounded-full
    border
    px-6
    py-3
    font-semibold
    transition
    ${variants[variant]}
    ${className}
  `;

  if (to) {

    return (
      <Link
        to={to}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}