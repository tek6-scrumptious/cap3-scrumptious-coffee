// styles
import "./Landing.css";


export default function Landing() {

  return (
    <div>
      <h1 className='name'> <a href="/" className="link landingHover">Scrumptious </a> </h1>
      <img src={process.env.PUBLIC_URL + '/images/landingPage.jpg'} className='image' alt="Two coffees with plants" />
    </div>
  );
}
