import { useState } from "react";
import ImageOne from "../../Images/image1.jpg";
import ImageTwo from "../../Images/image2.jpg";
import ImageThree from "../../Images/image3.jpg";
import ImageFour from "../../Images/image4.png";
import ImageFive from "../../Images/image5.jpg";
import ImageSix from "../../Images/Calculator.jpg";
import ImageSeven from "../../Images/Clock.jpg";
import ImageEight from "../../Images/Truck.jpg";
import "./Style.scss";
// import { Link } from "react-router-dom";
// import { Link as RouterLink } from "react-router-dom";

const portfolioData = [
  {
    id: 2,
    name: "Ecommerce Website",
    image: ImageOne,
    link: "https://github.com/MHamzaWaqar56/TechEmporium-Ecommerce-Website/tree/master",
  },
  {
    id: 3,
    name: "Blog App",
    link: "https://github.com/MHamzaWaqar56/Blog-App-with-React",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Clutter Words Game",
    image: ImageThree,
    link: "https://github.com/MHamzaWaqar56/Clutter-Word-Game-Website",
  },
  {
    id: 2,
    name: "Todo List App",
    image: ImageFour,
    link: "https://github.com/MHamzaWaqar56/Authentiacted-Todo-List-App-In-Mern-Stack-",
  },
  {
    id: 3,
    name: "Portfolio Website",
    image: ImageFive,
    link: "https://github.com/MHamzaWaqar56/Portfolio-Website",
  },
  {
    id: 2,
    name: "Calculator",
    image: ImageSix,
    link: "https://github.com/MHamzaWaqar56/Calculator-",
  },
  {
    id: 3,
    name: "Trucking Assist",
    image: ImageEight,
    link: "https://github.com/MHamzaWaqar56/Trucking-Assist-App-Design",
  },
  {
    id: 3,
    name: "Analog Clock",
    image: ImageSeven,
    link: "https://github.com/MHamzaWaqar56/AnaLog-Clock",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Projects = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>Visit</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
