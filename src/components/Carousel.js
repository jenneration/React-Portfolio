import React from "react";
import webproj9 from "../assets/tinified/webproj9.png";
import webproj8 from "../assets/tinified/webproj8.png";
import webproj2 from "../assets/tinified/webproj2.png";
import webproj1 from "../assets/tinified/webproj1.png";
import webproj4 from "../assets/tinified/webproj4.png";
import webproj10 from "../assets/tinified/webproj10.png";
import webproj3 from "../assets/tinified/webproj3.png";
// import webproj9 from "../assets/webproj9.png";
// import webproj8 from "../assets/webproj8.png";
// import webproj2 from "../assets/webproj2.png";
// import webproj1 from "../assets/webproj1.png";
// import webproj4 from "../assets/webproj4.png";
// import webproj10 from "../assets/webproj10.png";
// import webproj3 from "../assets/webproj3.png";
import Card from "../components/Card";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          name: "jot!",
          tasks: "Primary on site concept, UX/UI and CSS + React",
          image: webproj3,
          codelink: "https://github.com/jenneration/P3_JOT-write-it-all-down",
          deploylink: "https://pacific-river-65796.herokuapp.com/",
          subTitle: "Write it all down",
          selected: false,
        },
        {
          id: 1,
          name: "DreamScape",
          tasks:
            "Solo project. Primary on concept, code tasks, illustration creation.",
          image: webproj9,
          codelink: "https://github.com/jenneration/Project2-DreamScape",
          deploylink: "https://fathomless-woodland-79338.herokuapp.com/",
          subTitle: "A place for dreams",
          selected: false,
        },
        {
          id: 2,
          name: "Foodastic",
          tasks:
            "Contributor to site concept. Primary on UX/UI, CSS, HTML, Bulma. Secondary on jquery/javascript. Creator of the 'Dunno Analyzer' and algorithm",
          image: webproj1,
          codelink: "https://github.com/jenneration/project1_group7",
          deploylink: "https://jenneration.github.io/P1_Foodtastic/",
          subTitle: "Hungry? We know what you want!",
          selected: false,
        },
        {
          id: 3,
          name: "Weather App",
          tasks: "Solo project",
          image: webproj2,
          codelink: "https://github.com/jenneration/Weather-Dashboard",
          deploylink: "https://jenneration.github.io/Weather-Dashboard/",
          subTitle: "How's your stormy weather now?",
          selected: false,
        },
        {
          id: 4,
          name: "Burger Burger",
          tasks: "Solo project",
          image: webproj8,
          codelink: "https://github.com/jenneration/Burger-Burger",
          deploylink: "https://sheltered-brushlands-74287.herokuapp.com",
          subTitle: "Create, eat, and delete a burger",
          selected: false,
        },
        {
          id: 5,
          name: "Day Scheduler",
          tasks: "Solo project",
          image: webproj4,
          codelink: "https://github.com/jenneration/Employee-Roster-Generator",
          deploylink:
            "https://github.com/jenneration/Employee-Roster-Generator",
          subTitle: "Build a team roster in a snap",
          selected: false,
        },
        {
          id: 6,
          name: "Note Taker",
          tasks: "Solo project",
          image: webproj10,
          codelink: "https://github.com/jenneration/Note-Taker",
          deploylink: "https://safe-headland-22717.herokuapp.com/",
          subTitle: "List to-dos and check off when completed",
          selected: false,
        },
      ],
    };
  }
  //Event for selected item
  handleCardClick = (id, card) => {
    console.log(id);
    //Get all items
    let items = [...this.state.items];
    //Toggle the selected item
    items[id].selected = items[id].selected ? false : true;
    //If not selected set to false
    items.forEach((item) => {
      if (item.id !== id) {
        items.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <div className='wrapperProjects'>
        <div className='container container-jgProjects'>
          <div className='row rowProjects justify-content-center'>
            <p className='text-center contactTagLine'>Works</p>
            <div className='col-sm-11 offset-sm-3'>
              {this.makeItems(this.state.items)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
