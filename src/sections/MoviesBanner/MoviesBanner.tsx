import './MoviesBanner.scss'
import { Slider, MovieBannerCard } from '@/components'

export const MoviesBanner = (props) => {
  const {
    movieItems
  } = props

  return (
    <section
      className="movies-banner container"
      aria-labelledby='movies-banner-title'
    >
      <h1 className="visually-hidden" id='movies-banner-title'>
        Movies & Shows
      </h1>
      <Slider
        sliderParams={{
          slidesPerView: 1,
          breakpoints: {
            1024: {
              allowTouchMove: false,
            },
          },
        }}
        navigationPosition="abs-bottom"
        hasScrollbarOnMobile={false}
      >
        {movieItems.map((item, idx) => (
          <MovieBannerCard {...item} key={idx} />
        ))}
      </Slider>
    </section>
  )
}
