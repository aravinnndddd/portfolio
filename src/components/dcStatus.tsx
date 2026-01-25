import { useEffect, useState } from "react";
import styles from "./app.module.css";

const USER_ID = "754961569858846770";
const API_URL = `https://discordpressence.onrender.com/api/activities/${USER_ID}`;

interface Activity {
  name: string;
  type: "Playing" | "Listening" | "Custom" | "Streaming";
  details?: string;
  state?: string;
  platform?: string;
  startedAt?: string;
  assets?: {
    largeImage?: string | null;
    smallImage?: string | null;
    spotifyAlbumArt?: string | null;
    largeText?: string | null;
    smallText?: string | null;
  };
}

interface Resp {
  userId: string;
  username: string;
  avathar: string;
  status: "online" | "idle" | "dnd";
  activities: Activity[];
}

const DcStatus: React.FC = () => {
  const [data, setData] = useState<Resp | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (err) {
        console.error("API error", err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 3000); // every 3s
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "idle":
        return "bg-yellow-400";
      case "dnd":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  };

  const getElapsedTime = (start?: string) => {
    if (!start) return "";
    const diff = Date.now() - new Date(start).getTime();
    const m = Math.floor(diff / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    return `${m}m ${s}s`;
  };

  const getActivityImage = (a: Activity) => {
    // 🎮 VALORANT (force icon)
    if (a.name === "VALORANT" || a.name === "Valorant") {
      return "/assets/valorant.png"; // local asset
    }

    // 🎧 Spotify → album art
    if (a.name === "Spotify") {
      return a.assets?.spotifyAlbumArt || "/assets/activity.png";
    }

    // 💻 VS Code → file / icon image
    if (a.name === "Code") {
      return (
        a.assets?.largeImage || a.assets?.smallImage || "/icons/vscode.png"
      );
    }
  };

  if (loading || !data) {
    return (
      <div className={styles.spinnerWrapper}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-xl w-full px-6">
        {/* HEADER */}
        <div className="flex flex-col mt-6 items-center justify-center">
          <div
            className={`${getStatusColor(data.status)} p-[4px] rounded-full`}
          >
            <img
              src={data.avathar}
              alt="Avatar"
              className="w-[90px] h-[90px] rounded-full"
            />
          </div>

          <p className="text-black mt-2 font-semibold">{data.username}</p>

          <p className={`${styles[data.status]} text-sm`}>
            {data.status.toUpperCase()}
          </p>
        </div>

        {/* ACTIVITIES LIST */}
        <div className="mt-6 flex flex-col gap-3">
          {data.activities.length === 0 && (
            <p className="text-center text-gray-400 text-sm">
              {'console.log("life");'}
            </p>
          )}

          {data.activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-2xl
                         bg-black/10 backdrop-blur-md
                         hover:bg-black/20 transition-all"
            >
              {/* IMAGE */}
              <img
                src={getActivityImage(activity)}
                alt={activity.name}
                className="w-12 h-12 rounded-xl object-cover"
              />

              {/* TEXT */}
              <div className="flex-1 text-black overflow-hidden">
                <p className="font-semibold truncate">{activity.name}</p>

                {activity.details && (
                  <p className="text-sm text-gray-800 truncate">
                    {activity.details}
                  </p>
                )}

                {activity.state && (
                  <p className="text-xs text-gray-400 truncate">
                    {activity.state}
                  </p>
                )}
              </div>

              {/* TIME */}
              {activity.startedAt && (
                <p className="text-xs text-gray-700 whitespace-nowrap">
                  {getElapsedTime(activity.startedAt)}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DcStatus;
