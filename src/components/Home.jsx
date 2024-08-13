import React, { useContext } from 'react'
import '../assets/css/Home.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom'
import { Context } from './GlobeData';
import img4 from 'C:/Users/K.K. Vigneshwar/Desktop/yoga-academy-3/src/assets/images/img6.jpg';
// import home8 from 'c:/Users/K.K. Vigneshwar/Desktop/yoga-academy-3/src/assets/images/home8.png';
import { useInView } from 'react-intersection-observer';

const Home = () => {

    const {loggedIn} = useContext(Context);

    const {ref,inview} = useInView({
        threshold: 1,
        triggerOnce: true,
    });

    const naviagte = useNavigate();
    const onhandleStart = () => {
        naviagte('/plans');
    }
    const onhandleJoin = () => {
        (loggedIn)?naviagte('/plans'):naviagte('/login');
    }

  return (
    <div className='home'>
        <Navbar />
        <div className='home1'>
            {/* {(loggedIn)?<div>Vanakkam</div>:<div>Good Day</div>} */}
            <h1></h1>
            <div className='hero'>
            <div className="hero-content">
                <h1>Discover Yourself<br />Discover Yoga</h1>
                <p>We share the transformative power of yoga with every mind, every body, everywhere</p>
                <button className="join-now-btn" onClick={onhandleJoin}>Join Now</button>
                <div className="member-info">
                    <p>More than 1.5k members are registered now</p>
                </div>
                <div className="statistics">
                    <div>
                        <h2>30+</h2>
                        <p>Live Sessions</p>
                    </div>
                    <div>
                        <h2>12k+</h2>
                        <p>Active Members</p>
                    </div>
                    <div>
                        <h2>60%</h2>
                        <p>Engagement Rate</p>
                    </div>
                    <div>
                        <h2>95%</h2>
                        <p>User Satisfaction</p>
                    </div>
                </div>
                <div className="testimonials">
                    <blockquote>
                        "I feel fit for online yoga programs. I can work out without going to the gym and change my body shape."
                        <cite>- KaataMuthu, California</cite>
                    </blockquote>
                    <blockquote>
                        "Absolutely love it. On the next stage for me to do more mindful yoga at home."
                        <cite>- Nagaraj, New York</cite>
                    </blockquote>
                </div>
            </div>
            <div className="hero-image">
                <img src={img4} alt="Yoga" />
            </div>
            </div>
            <div ref={ref} className={'box1 '+((inview)?"Magic":"")}>

                
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>
      <div style={{ textAlign: 'center', maxWidth: '300px' }}>
        <img 
          src={require('C:/Users/K.K. Vigneshwar/Desktop/yoga-academy-3/src/assets/images/home1.jpg')} 
          alt="Nail Your Niche" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
        <h3 style={{ color: '#6b7280', marginTop: '20px' }}>NAIL YOUR NICHE AND MESSAGE</h3>
        <p>
          When you try to serve everyone, you end up serving no one. It’s time to gain clarity on who your ideal student is and how you serve them. That’s how you cut through the noisy online space.
        </p>
      </div>
      <div style={{ textAlign: 'center', maxWidth: '300px',scale:(1.1) }}>
        <img 
          src={require('C:/Users/K.K. Vigneshwar/Desktop/yoga-academy-3/src/assets/images/home2.jpg')} 
          alt="Intentional Marketing" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
        <h3 style={{ color: '#6b7280', marginTop: '20px' }}>BECOME INTENTIONAL ABOUT MARKETING</h3>
        <p>
          This is the year to follow a solid marketing plan with proven strategies to grow and nurture your community online and to effectively communicate the transformation you offer.
        </p>
      </div>
      <div style={{ textAlign: 'center', maxWidth: '300px' }}>
        <img 
          src={require('C:/Users/K.K. Vigneshwar/Desktop/yoga-academy-3/src/assets/images/home3.jpg')} 
          alt="Beyond Drop-in Class" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
        <h3 style={{ color: '#6b7280', marginTop: '20px' }}>THINK BEYOND THE DROP-IN CLASS</h3>
        <p>
          Creating online offerings that allow your students to go deeper is what separates the Yoga Teachers from the online Yogipreneurs.
        </p>
      </div>
    </div>


    <div className="personalize-container">
      <div className="personalize-content">
        <h1>Personalize your yoga sequences and poses</h1>
        <p>
          Add YouTube videos and Spotify/Apple Music/Pandora playlists to your yoga sequences. Rename yoga pose titles in your own language. Add breath type, count, duration and more for each yoga pose.
        </p>
      </div>
      <div className="personalize-image">
      <img 
          src={require('C:/Users/K.K. Vigneshwar/Desktop/yoga-academy-3/src/assets/images/home9.png')}  alt="Personalize Yoga" />
        {/* <div className="image-labels">
          <div className="label breath-count">Breath Count<br />10B</div>
          <div className="label breath-type">Breath Type<br />Inhale-Exhale</div>
          <div className="label pose-duration">Pose Duration<br />60s</div>
          <div className="label pose-title">Intense Leg Stretch Pose<br />(Prasarita Padottanasana)</div>
          <div className="label pose-cue">As you exhale, take the stretch deeper by stretching the body further and bringing the head closer to the ground...</div>
        </div> */}
      </div>
    </div>



    {/* <div className="yoga-container">
      <div className="yoga-content">
        <h1>The future of yoga is online and people need your expertise more than ever!</h1>
        <h2>How we teach yoga has changed.</h2>
        <p>
          The modern world needs modern Yogipreneurs who are actively learning how to create 
          impact-driven online businesses that reach and serve millions of people on a global scale.
        </p>
        <p className="highlight">
          This is the change that is needed in the world. And this is your invitation to be part of this change.
        </p>
      </div>
      <div className="yoga-image">
        <img src={require('C:/Users/K.K. Vigneshwar/Desktop/yoga-academy-3/src/assets/images/home7.jpg')} alt="Yoga Instructor" />
      </div>
    </div> */}


    
            {/* <div className='piceven0'></div>
            <div className='texteven'>
                <p><p className='pheading'>Welcome to Yoga Academy<br/></p>
                Yoga has always been something more, than just a workout routine. 
                It's always been more of a philosophy, 
                a lifestyle for a mind & body balance.</p>
            </div>
            </div>
            <div className='box2'>
            <div className='picodd1'></div>
            <div className='textodd'>
                <p><p className='pheading'>Yoga Academy for Everyone<br/></p>
                Through and through we were trying to make our Yoga studio a peaceful, 
                meditational place of tranquility, which according to our ever-growing 
                list of attendees we've succeeded at.</p>
            </div>
            </div>
            <div className='box3'>
            <div className='piceven2'></div>
            <div className='texteven'>
                <p><p className='pheading'>Find lifestyle to the yoga<br/></p>
                Through and through we were trying to make our Yoga studio a peaceful, 
                meditational place of tranquility, which according to our ever-growing 
                list of attendees we've succeeded at.</p>
            </div>
            </div>
            <div className='box2'>
            <div className='picodd3'></div>
            <div className='textodd'>
                <p><p className='pheading'>Corporate Yoga<br/></p>
                Through and through we were trying to make our Yoga studio a peaceful, 
                meditational place of tranquility, which according to our ever-growing 
                list of attendees we've succeeded at.</p>
            </div> */}
            </div>
    
        </div>


        <div className="sequences-container">
      <div className="sequences-content">
        <h1>Grow & Learn</h1>
        <h2>Get Inspired by 1M+ Yoga Sequences</h2>
        <p>
          Perfect the art of yoga sequencing with 1M+ yoga sequences covering different styles of yoga - Hatha including peak poses, Yin, Restorative, Chair, Prenatal, Power, Therapeutic and more.
        </p>
        <p>
          All these yoga sequences are designed by yoga teachers from around the world using our yoga sequence builder.
        </p>
        <button className='homebtn' onClick={onhandleStart}>Start with us</button>
        <ul>
          <li>Easily add and edit shared yoga sequences</li>
          <li>Get cueing ideas for 6000+ Yoga Poses</li>
          <li>Learn from yoga teachers around the world</li>
        </ul>
      </div>
      <div className="sequences-image">
      <img src={require('C:/Users/K.K. Vigneshwar/Desktop/yoga-academy-3/src/assets/images/home8.png')}alt="Yoga Sequences" />
      </div>
    </div>


        <div className="launchpad-container">
      <h2 className="launchpad-heading">
        It's your turn to grow and serve your online yoga community and to effortlessly make sales inside...
      </h2>
      <h1 className="launchpad-title">Yoga Academy</h1>
      <p className="launchpad-description">
        A high-energy, 6 month group business program designed to help you to shift your mindset,
        clarify your message and launch and sell your online offerings with ease.
      </p>

      <div className="launchpad-features">
        <div className="feature-item">
          <img 
            src={require('C:/Users/K.K. Vigneshwar/Desktop/yoga-academy-3/src/assets/images/home4.png')} 
            alt="Growth Framework Icon" 
            className="feature-icon"
          />
          <h3 className="feature-title">YOGA ACADEMY GROWTH FRAMEWORK</h3>
          <p className="feature-description">
            A proven, step-by-step framework to turn your passion into a profitable online yoga business.
          </p>
        </div>
        <div className="feature-item">
          <img 
            src={require('C:/Users/K.K. Vigneshwar/Desktop/yoga-academy-3/src/assets/images/home5.png')} 
            alt="Mentorship Support Icon" 
            className="feature-icon"
          />
          <h3 className="feature-title">LIVE MENTORSHIP & SUPPORT</h3>
          <p className="feature-description">
            Weekly live guidance and mentorship on the strategies you've been learning and implementing.
          </p>
        </div>
        <div className="feature-item">
          <img 
            src={require('C:/Users/K.K. Vigneshwar/Desktop/yoga-academy-3/src/assets/images/home6.png')} 
            alt="Accountability Icon" 
            className="feature-icon"
          />
          <h3 className="feature-title">ACCOUNTABILITY & COMMUNITY</h3>
          <p className="feature-description">
            An accountability partner and a like-minded community to stay focused, motivated & on-track.
          </p>
        </div>
      </div>

      {/* <button className="launchpad-button">YES! LET'S DO THIS</button> */}
    </div>
       <div className='Footer'>
        <Footer/>
        </div> 
    </div>
  )
}

export default Home