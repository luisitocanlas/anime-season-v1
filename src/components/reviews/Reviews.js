import {useEffect, useRef} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';

import React from 'react'

const Reviews = ({getAnimeData, anime, reviews, setReviews}) => {

    const revText = useRef();
    let params = useParams();
    const animeId = params.animeId;

    useEffect(() => {
        getAnimeData(animeId);
    }, [])

    const addReview = async (e) => {
        e.preventDefault();

        const rev = revText.current;

        try
        {
            const response = await api.post("/api/v1/review", {reviewBody:rev.value, imdbId:animeId});

            

            const updatedReviews = [...reviews, {body:rev.value}];

            rev.value = "";

            setReviews(updatedReviews);
        }
        catch(err)
        {
            console.error(err);
        }

    }

  return (
    <Container>
        <Row>
            <Col><h3>Reviews</h3></Col>
        </Row>

        <Row className='mt-2'>
            <Col>
                <h4>{anime?.name}</h4>
                <img src={anime?.poster} alt="" />
            </Col>

            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review?" />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </>
                }

                {
                    reviews?.map((r) => {
                        return(
                            <>
                                <Row>
                                    <Col>{r.body}</Col>
                                </Row>
                            </>
                        )
                    })
                }
            </Col>
        </Row>

        <Row>
            <Col>
                <hr />
            </Col>
        </Row>
    </Container>
  )
}

export default Reviews