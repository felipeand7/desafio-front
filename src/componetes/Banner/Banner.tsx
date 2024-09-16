import { useEffect, useState } from "react";
import "./banner.css";

interface ApiResponse {
  webSettings: {
    bannerImage: string;
  };
}

const Banner = () => {
  const [banner, setBanner] = useState<ApiResponse | null>(null);
  const bannerImage = banner?.webSettings.bannerImage;

  useEffect(() => {
    fetch("https://cdn-dev.preoday.com/challenge/venue/9")
      .then((response) => response.json())
      .then((json) => setBanner(json))
      .catch((error) => console.error("Erro ao buscar banner", error));
  }, []);

  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" />
    </div>
  );
};

export default Banner;
