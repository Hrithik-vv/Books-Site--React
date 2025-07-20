import Carousel from "react-bootstrap/Carousel";

function Banner() {
  return (
    <>
      <div className="bannerDiv">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="/23673915_6845012.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
             
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="/24013574_6903156.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
             
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/38549347_8598328.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Banner;
