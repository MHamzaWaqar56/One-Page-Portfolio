import { Link } from "react-scroll";
import "./Style.scss";
import { Animate } from "react-simple-animate";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__text_wrapper">
        <h1>
          Hello, I am M Hamza Waqar
          <br />
          Web Developer
        </h1>
      </div>

      <Animate
        play
        duration={1.5}
        delay={1}
        start={{ transform: "translateY(550px)" }}
        end={{ transform: "translateX(0px)" }}
      >
        <div className="home__contact_me">
          <Link to="resume">
            <button>Hire Me</button>
          </Link>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
