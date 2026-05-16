const TypingAnimation = () => {
  return (
    <div
      className="
        flex

        gap-3
        md:gap-4
      "
    >

      {/* AI Avatar */}
      <div
        className="
          w-8 h-8
          md:w-9 md:h-9

          rounded-full

          overflow-hidden

          flex-shrink-0

          bg-gradient-to-r
          from-cyan-500
          to-indigo-600

          shadow-lg
          shadow-cyan-500/10
        "
      >

        <img
          src="/logo2.png"
          alt="Orbit AI"
          className="
            w-full
            h-full
            object-cover
          "
        />

      </div>

      {/* Typing Bubble */}
      <div
        className="
          px-4 py-3

          rounded-3xl

          bg-[#0d1728]

          border border-[#1b2a45]

          flex items-center gap-2

          shadow-lg
          shadow-black/10
        "
      >

        {/* Dot */}
        <span
          className="
            w-2 h-2

            rounded-full

            bg-violet-400

            animate-bounce
          "
        />

        {/* Dot */}
        <span
          className="
            w-2 h-2

            rounded-full

            bg-violet-400

            animate-bounce

            [animation-delay:0.2s]
          "
        />

        {/* Dot */}
        <span
          className="
            w-2 h-2

            rounded-full

            bg-violet-400

            animate-bounce

            [animation-delay:0.4s]
          "
        />

      </div>

    </div>
  );
};

export default TypingAnimation;