import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Hero = ({animes}) => {

    const navigate = useNavigate();

    function reviews(animeId) {
        navigate(`/Reviews/${animeId}`);
    }

  return (
    <div className = 'movie-carousel-container'>
        <Carousel autoPlay={false}>
            {
                animes?.map((anime) => {
                    return(
                        <Paper>
                            <div className='anime-card-container'>

                                <div className='anime-card' style={{"--img": `url(${anime.backdrop[0]})`}}>

                                    <div className='anime-detail'>

                                        <div className='anime-poster'>
                                            <img src={anime.poster} alt="" />
                                        </div>

                                        <div className='anime-name'>
                                            <h4>{anime.name}</h4>
                                        </div>

                                        <div className='anime-buttons-container'>
                                            <Link to={`/Trailer/${anime.trailerLink.substring(anime.trailerLink.length - 11)}`}>
                                            
                                                <div                    className='play-button-icon-container'>
                                                    <FontAwesomeIcon className='play-button-icon'
                                                    icon = {faCirclePlay}
                                                    />
                                                </div>
                                            </Link>

                                            <div className='anime-review-button-container'>
                                                <Button variant = "info" onClick={() => reviews(anime.imdbId)}>Reviews</Button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Hero