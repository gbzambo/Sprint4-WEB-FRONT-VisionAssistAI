export default function TeamCard({
  initials,
  name,
  role,
  bio,
}) {

  return (
    <li
      className="
        rounded-2xl
        border
        border-white/[.08]
        bg-darkSoft
        p-7
      "
    >

      <div
        className="
          mb-4
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-amber
          to-amberStrong
          font-display
          font-bold
          text-[#191204]
        "
      >
        {initials}
      </div>

      <h3 className="
        font-display
        text-xl
        font-semibold
        text-paper
      ">
        {name}
      </h3>

      <p className="
        mt-1
        text-sm
        font-semibold
        text-teal
      ">
        {role}
      </p>

      <p className="
        mt-3
        text-sm
        leading-6
        text-paperSoft
      ">
        {bio}
      </p>

    </li>
  );
}