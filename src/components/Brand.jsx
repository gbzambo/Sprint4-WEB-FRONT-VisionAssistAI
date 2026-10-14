import { Link } from "react-router-dom";

export default function Brand() {

  return (
    <Link
      to="/"
      className="inline-flex items-center gap-3"
    >

      <span
        className="flex h-6 items-end gap-[3px]"
        aria-hidden="true"
      >

        {[8, 18, 12, 16].map(
          (height, index) => (

            <span
              key={height}
              className="eq-bar block w-[3px] rounded bg-amber"
              style={{
                height: `${height}px`,
                animationDelay: `${index * 0.15}s`,
              }}
            />

          )
        )}

      </span>

      <span className="font-display text-lg font-semibold text-paper">

        Vision Assist{" "}

        <span className="text-amber">
          AI
        </span>

      </span>

    </Link>
  );
}