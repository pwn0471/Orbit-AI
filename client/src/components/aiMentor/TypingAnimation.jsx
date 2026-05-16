const TypingAnimation = () => {
  return (
    <div className="flex gap-4">

      {/* AI Avatar */}
      <div
        className="
          w-9 h-9

          rounded-full

          overflow-hidden

          flex-shrink-0

          bg-[#0d1728]

          border border-[#1b2a45]

          shadow-lg
          shadow-black/20
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

      {/* Typing Box */}
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

        <span
          className="
            w-2 h-2

            rounded-full

            bg-violet-400

            animate-bounce
          "
        />

        <span
          className="
            w-2 h-2

            rounded-full

            bg-violet-400

            animate-bounce

            [animation-delay:0.2s]
          "
        />

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