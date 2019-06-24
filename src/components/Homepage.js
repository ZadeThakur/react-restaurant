import React from "react";
import { Link } from "react-router-dom"
import Header from "./Header";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import Image1 from "../static/image1.jpg";
import Image2 from "../static/image2.jpg";
import Image3 from "../static/image3.jpg";

const headingSize = {
  fontSize: "500%"
}
const paraSize = {
  fontSize: "200%"
}
const buttonSize = {
  fontSize: "130%"
}


const styles = theme =>({
  homepageDiv:{
    height: "100%",
    postion: "relative",
  },
  banner1:{
    height: "100%",
    backgroundPosition:"center",
    backgroundImage:`url(${Image1})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative"
  },
  banner2:{
    height: "100%",
    backgroundPosition:"center",
    backgroundImage:`url(${Image2})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative"
  },
  banner3:{
    height: "100%",
    backgroundPosition:"center",
    backgroundImage:`url(${Image3})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative"
  },
  table:{
    display: "table",
    textAlign: "center",
    height:"100%",
    width:"100%"
  },
  tableCell :{
    display: "table-cell",
    verticalAlign: "middle",
    color:"white"
  },
  button:{
    border: "3px solid white",
    marginTop: "3%",
    backgroundColor: "Transparent",
    cursor: "pointer",
    fontSize: "50%",
    color:"white"
  }
});

const Homepage = (props) => {
  const { classes }  = props;

    return(
      <div className={classes.homepageDiv}>
        <Container fixed className={classes.homepageDiv}>
        <div className={classes.banner3} >
          <Header />
          <div className={classes.table}>
            <div className={classes.tableCell} style={headingSize}>
              Aunty's Kitchen
              <br></br>
              <Link to="/placeOrder"><button className= {classes.button}>Order Now</button></Link>
            </div>
          </div>
        </div>
        <div className={classes.banner2}>
        <div className={classes.table}>
          <div className={classes.tableCell} style={paraSize}>
          <h1>Authentic Indian Food in St. John’s: India Gate Restaurant</h1>
          <p>From butter chicken and Tandoori chicken to Saag lamb and naan bread, Indian cuisine is known for savoury and exotic tastes. Here at India Gate Restaurant, we are committed to serving authentic, consistently excellent Indian food in St. John’s. As the oldest Indian restaurant in the area, we combine mouth-watering spices, fresh herbs, creamy sauces and velvety textures to make our dishes as tasty and tantalizing as possible. With a sprawling menu, we have something for everyone – from Indian food novices to seasoned culinary explorers. If you’re ready for a culinary adventure like none other, let us be your gateway to Indian cuisine. Join us today and feast in our charming, ambient dining room. We are located on the corner of Victoria and Duckworth, near the Supreme Court Building. Contact us today for more information.</p>
          </div>
        </div>
        </div>
        <div className={classes.banner1}>
        <div className={classes.table}>
          <div className={classes.tableCell} style={paraSize}>
            <h1>Classically Prepared Fare in Our Tandoori Oven</h1>
            <p>A staple of Indian cooking, dishes prepared in a Tandoori Oven are known as some of the tastiest and most flavourful. A Tandoori Oven is a cylindrically shaped, vertical clay oven that can reach very high temperatures. Using radiant heat, convection heat and smoking to cook, it’s known for producing some of the most flavourful food in the world. Experience India Gate Restaurant’s soft and light naan bread, baked to order in our traditional Tandoori Oven. Or try our lamb, chicken and beef dishes that have all been simmered, marinated and seasoned to perfection. We also have fluffy rice, flavourful veggies and soups available on our menu.</p>
            <Link to="/aboutUs"><button className= {classes.button} style={buttonSize}>About Us</button></Link>
          </div>
        </div>
        </div>
        </Container>
      </div>
    );
}

export default withStyles(styles)(Homepage);
