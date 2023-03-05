import Carousel from "../Carousel";

const About = () => {

  const aboutArr = [
    'https://source.unsplash.com/1920x1080?bamboo',
    'https://source.unsplash.com/1920x1080?charcoal',
    'https://source.unsplash.com/1920x1080?maple',
  ]

  return (
    <>
      <div className="about-us">
        <h1 className='placeholder'>About Page</h1>
        <Carousel w={50} h={30} imgArr={aboutArr} />
      </div>
        <iframe className="test-vid" width="560" height="315" src="https://www.youtube-nocookie.com/embed/dEnupIJwiR8?autoplay=1&mute=q" title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen></iframe>
    </>
  )
}

export default About;