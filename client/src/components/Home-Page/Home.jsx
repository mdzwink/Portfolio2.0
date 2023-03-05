import './Home.css';
import Intro from "./Intro"
import Carousel from '../Carousel';
const Home = () => {

  const homeMainImgArr = [
    'https://source.unsplash.com/1920x1080?bamboo',
    'https://source.unsplash.com/1920x1080?charcoal',
    'https://source.unsplash.com/1920x1080?maple',
  ]

  return (
    <main className='home-page'>
      <Carousel imgArr={homeMainImgArr} hgt={80} secondary={true}/>
      <Intro />


      <section className="easy-upgrade">
        
      </section>
      <section className="see-the-difference">

      </section>
      <section className="what-the-buzz">
        
      </section>
    </main>
  )
}

export default Home;