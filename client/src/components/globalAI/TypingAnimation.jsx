const TypingAnimation = () => {
  return (
    <div className="flex gap-3 mb-4">

      {/* AI Avatar */}
      <div
        className="
          w-8 h-8
          rounded-full

          overflow-hidden

          flex items-center justify-center

          bg-gradient-to-r
          from-purple-500
          via-pink-500
          to-indigo-500

          flex-shrink-0
        "
      >

        <img
          src="/logo.png"
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
          rounded-2xl

          bg-[#1f2937]

          flex items-center gap-2
        "
      >

        <span
          className="
            w-2 h-2
            rounded-full
            bg-purple-400
            animate-bounce
          "
        />

        <span
          className="
            w-2 h-2
            rounded-full
            bg-purple-400
            animate-bounce
            [animation-delay:0.2s]
          "
        />

        <span
          className="
            w-2 h-2
            rounded-full
            bg-purple-400
            animate-bounce
            [animation-delay:0.4s]
          "
        />

      </div>

    </div>
  );
};

export default TypingAnimation;