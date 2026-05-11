const FloatingAIButton = ({
  setIsOpen,
}) => {
  return (
    <button
      onClick={() =>
        setIsOpen(true)
      }
      className="
        fixed
        bottom-5
        right-4
        sm:bottom-8
        sm:right-6
        z-50

        flex items-center gap-2

        px-2.5 py-2
        sm:px-3 sm:py-2.5

        rounded-full

        bg-[#111827]/95
        backdrop-blur-xl

        border border-gray-700

        shadow-2xl
        shadow-black/40

        hover:scale-105
        hover:border-purple-500

        transition-all duration-300
      "
    >

      {/* Logo */}
      <div
        className="
          w-9 h-9
          sm:w-10 sm:h-10

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
          src="/logo2.png"
          alt="Orbit AI"
          className="
            w-full
            h-full
            object-cover
          "
        />

      </div>

      {/* Text */}
      <div>

        <h3
          className="
            text-white
            text-xs
            sm:text-sm

            font-semibold
            tracking-wide
            whitespace-nowrap
          "
        >
          Ask Orbit AI
        </h3>

      </div>

    </button>
  );
};

export default FloatingAIButton;