import {useState } from 'react';
import Social from './Social';
import Footer from './Footer';

function App() {

const [days, setDays] = useState('08') 
const [hours, setHours] = useState('23') 
const [minutes, setMinutes] = useState('55') 
const [seconds, setSeconds] = useState('41') 
const [expired, setExpired] = useState(false);

 // Set the date we're counting down to
const countDownDate = new Date("Sep 5, 2022 15:37:25").getTime();

const interval = setInterval(()=>{

const now = new Date().getTime();
// Find the distance between now and the count down date
let distance = countDownDate - now;
// Time calculations for days, hours, minutes and seconds
let days = setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
let hours =setHours (Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
let minutes = setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
let seconds = setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

if(distance < 0){
  clearInterval(interval);
  setExpired(true);
}

}, 1000)


  return (
    <main className="countdown__container">
      <h1 className='main__text'>
      We're launching soon!
      </h1>
      <div className='timer'>
        <div className='time'>
        <h2>{days}</h2>
        <span>days</span>
        </div>  
        <div className='time'>
        <h2>{hours}</h2>
        <span>hours</span>
        </div>  
        <div className='time'>
        <h2>{minutes}</h2>
        <span>minutes</span>
        </div>  
        <div className='time'>
        <h2>{seconds}</h2>
        <span>seconds</span>
        </div>  
      </div>
      {expired &&
      <h3>Time Expired</h3>
      }
      <div className="social__copyright">
      <Social/>
      <Footer/>
      </div>
    </main>
  );
}

export default App;
