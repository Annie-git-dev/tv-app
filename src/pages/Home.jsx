import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Featured from "../components/Featured";
import data from "../data/data.json";
import { useVideoStore } from "../store/useVideoStore";

export default function Home() {
    const { featuredVideo, setFeaturedVideo, enablePlayVideo } = useVideoStore();
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        setTrending(data.TrendingNow.slice(0, 50));

        const saved = sessionStorage.getItem("featured");
        if (saved) {
            try {
                const video = JSON.parse(saved);
                setFeaturedVideo(video);
                setTrending((prev) => {
                    const filtered = prev.filter((v) => v.Id !== video.Id);
                    return [video, ...filtered];
                });
            } catch {
                setFeaturedVideo(data.Featured);
            }
        } else {
            setFeaturedVideo(data.Featured);
        }
    }, [setFeaturedVideo]);

    const handleSelectVideo = (video) => {
        if (video.Id === featuredVideo?.Id) {
            setFeaturedVideo(video);
            setTimeout(() => {
                enablePlayVideo();
            }, 2000);
        } else {
            setFeaturedVideo(video);
            sessionStorage.setItem("featured", JSON.stringify(video));
        }

        setTrending((prev) => {
            const filtered = prev.filter((v) => v.Id !== video.Id);
            return [video, ...filtered];
        });
    };

    return (
        <main className="relative w-full h-[100vh] overflow-hidden">
            <Featured />
            <Carousel data={trending} onSelect={handleSelectVideo} />
        </main>
    );
}
