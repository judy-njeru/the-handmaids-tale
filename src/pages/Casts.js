import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import axios from "axios";
import Slider from "react-slick";
import Cast from "./Cast"

const Casts = () => {
  const [castDataState, setCastDataState] = useState({
    cast: []
  })

  useEffect(()=>{
    const apiUrl = 'https://api.themoviedb.org/3/tv/69478/credits?api_key=6c6774fdc0da477c7a3f3f7c03048117&language=en-US';
    axios.get(apiUrl).then((repos) => {
      setCastDataState({ cast: repos.data.cast });
    });
  }, [])

  let settings = {
    arrows: false,
    centerMode: true,
    centerPadding: 0,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  }

  let castElement = null;
  const castData = castDataState.cast
  if(castDataState.cast.length > 1 ) {
    castElement = castData.map((cast, index) => {
      return <Cast cast={cast} key={index}/>
    })
  }

  return (
    <div className="page-wrapper">
      <Container className="cast">
        <Row>
          <Col xs={12} md={12} >

            <Slider {...settings}>
              {
              castElement
              }
            </Slider>
          </Col>
          
        </Row>
      </Container>
    </div>
  )
}
  

export default Casts;
