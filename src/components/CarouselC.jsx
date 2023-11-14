import Carousel from 'react-bootstrap/Carousel';
import './CarouselC.css'

function CarouselC() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img src='/padaria_pao_doce.jpeg' alt="" />
        <Carousel.Caption>
          <h3>Pães doces</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/padaria_doce.jpg' alt="" />
        <Carousel.Caption>
          <h3>Doces</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/pao_banner.jpg' alt="" />
        <Carousel.Caption>
          <h3>Pães salgados</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselC;