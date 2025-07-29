import { useEffect } from "react";
import { useVideoStore } from "../store/useVideoStore";
import { formatSecondsToHrsMins } from "../utils/utils";
import useSidebarStore from "../store/useSidebarStore";
import useModalStore from "../store/useModalStore";

export default function Featured() {
    const { featuredVideo, playVideo, enablePlayVideo } = useVideoStore();
    const { isOpen } = useSidebarStore();
    const { openPlayer, openInfo } = useModalStore();

    useEffect(() => {
        if (!featuredVideo) return;

        const timer = setTimeout(() => {
            enablePlayVideo();
        }, 2000);

        return () => clearTimeout(timer);
    }, [featuredVideo, enablePlayVideo]);

    if (!featuredVideo) return null;

    const data = featuredVideo;

    return (
        <section
            className={`relative w-full h-[60vh] md:h-[80vh] bg-black p-4 transition-opacity duration-500 ${isOpen ? "opacity-80" : "opacity-100"
                }`}
        >
            {playVideo ? (
                <video
                    src={data.VideoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-[100vh] object-cover bg-black absolute inset-0 z-0"
                />
            ) : (
                <img
                    src={`/assets/${data.CoverImage}`}
                    alt={data.Title}
                    className="w-full h-[100vh] object-cover absolute inset-0 z-0"
                />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10 z-10 h-[100vh]" />

            <div className="relative z-20 px-20 pt-24 pb-40 max-w-3xl text-white space-y-4">
                <div className="text-lg text-gray-500 font-semibold tracking-[.25em]">
                    {data.Category.toUpperCase()}
                </div>

                <div className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">{data.Title.toUpperCase()}</div>

                <p className="text-sm md:text-lg text-white">
                    {data.ReleaseYear} {data.MpaRating} {formatSecondsToHrsMins(data.Duration)}
                </p>

                <div className="text-sm text-white pt-2 w-[70%]">{data.Description}</div>

                <div className="flex gap-4 mt-4 flex-wrap sm:flex-nowrap">
                    <button
                        onClick={() => openPlayer(data)}
                        className="flex bg-white text-black font-semibold px-4 py-1.5 rounded-full hover:bg-gray-200 transition items-center gap-1 sm:px-6 sm:py-2 sm:rounded-[50px]"
                    >
                        <img src={`/play.svg`} alt={"play"} className="w-4 sm:w-5" />
                        <span className="text-sm sm:text-base">Play</span>
                    </button>

                    <button
                        onClick={() => openInfo(data)}
                        className="bg-blue-800 text-white font-semibold px-4 py-1.5 rounded-full hover:bg-blue-900 transition text-sm sm:text-base sm:px-6 sm:py-2 sm:rounded-[50px]"
                    >
                        More Info
                    </button>
                </div>
            </div>
        </section>
    );
}
