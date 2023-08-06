import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { MostViewed} from  "../../utils/utilities";
import './style.css';
import ImageContainer from "../../atoms/ImageContainer";

const Display = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const movies = await MostViewed();
      setMovies(movies.results);
      setLoading(false);
    })();
  }, []);
  if (loading) {
    return <h1>Loading movies...</h1>;
  }
  const limit = 4;
  const limitedMovies = movies.slice(0, limit);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="movies-slider">
      <Carousel {...sliderSettings}>
        {limitedMovies.map((item) => (
          <div key={item.id} className="movie-slide">
            <ImageContainer props={item} useBackgroundImage={true} />
            <h1 className="titlePara">{item.title}</h1>
            <p>{item.overview}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default Display;








