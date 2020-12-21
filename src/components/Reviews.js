import React from 'react'
import './reviews.css'

const Reviews = () => {
  return (
    <section className='reviews'>
      <div className='review'>
        <div className='review-info'>
          <h1>Enjoy on your TV.</h1>
          <h3>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h3>
        </div>
        <div className='review-img'>
          <img src='https://i.gifer.com/U5tb.gif' alt='' />
          <div className='overley'></div>
        </div>
      </div>
      <div className='review'>
        <div className='review-img'>
          <img
            src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
            alt=''
          />
          <div className='overley'></div>
        </div>
        <div className='review-info'>
          <h1 className='header'>Download your shows to watch offline.</h1>
          <h3>
            Save your favourites easily and always have something to watch.
          </h3>
        </div>
      </div>
      <div className='review'>
        <div className='review-info'>
          <h1>Watch everywhere.</h1>
          <h3>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h3>
        </div>
        <div className='review-img'>
          <img
            src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png'
            alt=''
          />
          <div className='overley'></div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
