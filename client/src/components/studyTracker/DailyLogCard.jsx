import {
  CalendarDays,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const DailyLogCard = ({
  logs,
}) => {
  return (
    <div
      className="
        bg-[#111827]/80
        border border-gray-700
        rounded-2xl
        p-5
      "
    >

      {/* Header */}
      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-xl font-bold text-white">
            Daily Activity
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Your recent preparation logs
          </p>

        </div>

        <div
          className="
            w-11 h-11
            rounded-xl
            bg-purple-500/20
            flex items-center justify-center
            text-purple-400
          "
        >
          <CalendarDays size={20} />
        </div>

      </div>

      {/* Logs */}
      <div className="space-y-4">

        {logs.map((log) => (
          <div
            key={log.id}
            className="
              flex items-start gap-4
              p-4
              rounded-xl
              bg-[#0b1220]
              border border-gray-700
              hover:border-purple-500
              transition-all
            "
          >

            {/* Icon */}
            <div
              className="
                w-10 h-10
                rounded-full
                bg-green-500/20
                flex items-center justify-center
                text-green-400
                flex-shrink-0
              "
            >
              <CheckCircle2 size={18} />
            </div>

            {/* Content */}
            <div className="flex-1">

              {/* Title */}
              <h3 className="text-white font-medium">
                {log.title}
              </h3>

              {/* Subject */}
              <p className="text-sm text-gray-400 mt-1">
                {log.subject}
              </p>

              {/* Footer */}
              <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">

                <div className="flex items-center gap-1">

                  <Clock3 size={14} />

                  {log.time}

                </div>

                <span
                  className="
                    px-2 py-1
                    rounded-full
                    bg-purple-500/20
                    text-purple-300
                  "
                >
                  {log.type}
                </span>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Empty State */}
      {logs.length === 0 && (
        <div className="text-center py-10 text-gray-500">

          No study activity yet

        </div>
      )}

    </div>
  );
};

export default DailyLogCard;