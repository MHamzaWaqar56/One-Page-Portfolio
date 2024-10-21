import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import "./Style.scss";

const PersonalDetails = [
  {
    label: "Name :",
    value: "M Hamza Waqar",
  },
  {
    label: "Age :",
    value: "22",
  },
  {
    label: "Address :",
    value: "Lahore - Pakistan",
  },
  {
    label: "Email :",
    value: "hamzarajpoot3912@gmail.com",
  },
  {
    label: "Whatsapp : ",
    value: "03366776269",
  },
];

const jobSummary =
  "I'm a Software Engineer with a specialization in Frontend Web Development, backed by 2 years of hands-on experience in designing and developing web applications. I possess a strong command of HTML, CSS, Tailwind, JavaScript, React.js, MongoDB, and WordPress, alongside a solid understanding of Express.js and Node.js. I recently graduated with a Bachelor's degree in Software Engineering from the University of Sahiwal, where I focused on advanced web development practices. I am committed to delivering high-quality, user-friendly web solutions that align with the latest industry standards.";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <div className="about__content__personalwrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateY(0px)" }}
          >
            <h3>Frontend Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            style={{ paddingTop: "20px" }}
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translateY(0px)" }}
          >
            <h3 className="personalinformationtext">Personal Information</h3>
            <ul>
              {PersonalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__serviceswrapper">
          <Animate
            style={{ paddingTop: "20px" }}
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(600px)" }}
            end={{ transform: "translateY(0px)" }}
          >
            <div className="about__content__serviceswrapper__innercontent">
              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
