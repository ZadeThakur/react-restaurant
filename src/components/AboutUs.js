import React from "react";
import Header from "./Header";
import Container from '@material-ui/core/Container';
import { withStyles } from "@material-ui/core/styles";
import Image4 from "../static/image4.jpg";

const styles = theme =>({
  aboutUsDiv:{
    height:"100%",
    position:"relative"
  },
  banner1:{
    height: "100%",
    backgroundPosition:"center",
    backgroundImage:`url(${Image4})`,
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
  }
});

const AboutUs = (props) =>{
  const { classes } = props;
  return(
    <div className={classes.aboutUsDiv}>
      <Container fixed className={classes.aboutUsDiv}>
        <div className={classes.aboutUsDiv}>
          <div className={classes.banner1}>
            <Header />
            <div className={classes.table}>
              <div className={classes.tableCell}>
              <h2>Indian Food for Takeout, Delivery and Dine-in:
                  India Gate Restaurant</h2>
              <p>For more than 25 years, family-owned India Gate Restaurant has been serving up fresh, authentic Indian cuisine to St. John’s and surrounding area customers. As the oldest Indian restaurant in the area, we’ve been successful because of our commitment to serving the consistently fresh and high quality Indian fare. Our expansive menu features something for everyone, whether they’re new to Indian food or seasoned veterans. Enjoy perfectly cook lamb dishes, tandoori chicken, our always popular naan bread and much, much more. Let India Gate Restaurant be your gateway to fine Indian dining. We offer dine-in, takeout, delivery and catering. Stop by or call us today for more information.</p>
              <h2>Hours of Operation</h2>
              <p>Lunch Buffet:<br></br>
              Wednesday, Thursday and Friday<br></br>
              11:30 AM – 1:30 PM</p>
              <h2>Hours of Operation</h2>
              <p>Dinner Hours:<br></br>
              Tuesday to Sunday <br></br>
              5 PM – 9:30 PM</p>
              <h2>Contact Information</h2>
              <p>286 Duckworth St<br></br>
              St John's, NL A1C 1H3</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default withStyles(styles)(AboutUs);
