
import styles from '@/styles/Home.module.css'


import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function CarouselImage (params) {
  return <div>
    <img src={params.img} alt={params.img} />
  </div>
}

function BikeCarousel () {
  return <>
  <Carousel 
    autoPlay="true" 
    interval="5000"
    infiniteLoop="true">
    <CarouselImage img="/assets/bikeable_frame_1.png" />
    <CarouselImage img="/assets/bikeable_frame_2.png" />
    <CarouselImage img="/assets/bikeable_frame_3.png" />
    <CarouselImage img="/assets/bikeable_frame_4.png" />
    <CarouselImage img="/assets/bikeable_frame_5.png" />
    <CarouselImage img="/assets/bikeable_frame_6.png" />
  </Carousel>
  </>
}

export default function ImageSection () {
    return <>
    <section>
      <h1>Gallery</h1>
      <div className={styles.section}>
        <BikeCarousel />
      </div>
    </section>
    </>
}