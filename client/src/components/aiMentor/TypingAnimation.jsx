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

          bg-gradient-to-r
          from-purple-500
          to-indigo-500
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

          bg-[#111111]

          border border-gray-800

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