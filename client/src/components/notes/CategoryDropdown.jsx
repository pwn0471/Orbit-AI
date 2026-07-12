import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Check,
  BookOpen,
  Code2,
  FolderKanban,
  ClipboardList,
  FlaskConical,
  User,
  RotateCcw,
  StickyNote,
} from "lucide-react";

const categories = [
  {
    name: "General",
    icon: StickyNote,
  },
  {
    name: "Lecture",
    icon: BookOpen,
  },
  {
    name: "Programming",
    icon: Code2,
  },
  {
    name: "Project",
    icon: FolderKanban,
  },
  {
    name: "Assignment",
    icon: ClipboardList,
  },
  {
    name: "Research",
    icon: FlaskConical,
  },
  {
    name: "Personal",
    icon: User,
  },
  {
    name: "Revision",
    icon: RotateCcw,
  },
];

const CategoryDropdown = ({
  value,
  onChange,
}) => {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  const selected =
    categories.find(
      (category) => category.name === value
    ) || categories[0];

  const SelectedIcon = selected.icon;

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block"
    >
      {/* Button */}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          flex
          items-center
          justify-between
          w-36 md:w-44
          rounded-lg md:rounded-xl
          border
          border-violet-500/20
          bg-violet-500/10
          px-3 md:px-3.5
          py-2 md:py-2.5
          text-xs md:text-sm
          font-medium
          text-violet-300
          transition-all
          duration-200
          hover:border-violet-400
          hover:bg-violet-500/15
        "
      >
        <div className="flex items-center gap-2">

          <SelectedIcon
            size={12}
            className="text-violet-400"
          />

          <span>{selected.name}</span>

        </div>

        <ChevronDown
          size={12}
          className={`
            transition-transform
            duration-200
            ${
              open
                ? "rotate-180"
                : ""
            }
          `}
        />
      </button>

      {/* Dropdown */}

      {open && (
        <div
          className="
            absolute
            left-0
            mt-2
            w-40 md:w-44
            overflow-hidden
            rounded-lg
            border
            border-gray-700
            bg-[#111827]
            shadow-lg
            shadow-black/20
            z-50
            animate-[fadeIn_.15s_ease-out]
          "
        >
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                type="button"
                onClick={() => {
                  onChange(category.name);
                  setOpen(false);
                }}
                className={`
                  flex
                  w-full
                  items-center
                  justify-between
                  px-3
                  py-1.5 md:py-2
                  text-xs md:text-sm
                  transition-all
                  duration-150
                  hover:bg-violet-500/10
                  ${
                    value === category.name
                      ? "bg-violet-500/10"
                      : ""
                  }
                `}
              >
                <div className="flex items-center gap-2">

                  <Icon
                    size={12}
                    className="text-violet-400"
                  />

                  <span className="text-white">
                    {category.name}
                  </span>

                </div>

                {value === category.name && (
                  <Check
                    size={12}
                    className="text-violet-400"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;