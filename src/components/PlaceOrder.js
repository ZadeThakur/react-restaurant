import React from "react";
import Header from "./Header";
import "../css/placeOrder.css";
import Container from '@material-ui/core/Container';


class PlaceOrder extends React.Component{

  constructor(props){
    super(props);
    this.state = {total: 0}
  }

  getTotal=(event)=>{
    var total = 0
    if(document.querySelector("#ALU-GOBI").checked){
      var cost = document.querySelector("#quantityOfALU-GOBI").value * 10;
      total = total+cost;
    }
    if(document.querySelector("#BUTTER-CHICKEN").checked){
      cost = document.querySelector("#quantityOfBUTTER-CHICKEN").value * 20;
      total = total+cost;
    }
    if(document.querySelector("#ROGAN-JOSH").checked){
      cost = document.querySelector("#quantityOfROGAN-JOSH").value * 30;
      total = total+cost;
    }
    if(document.querySelector("#SAMOSAS").checked){
      cost = document.querySelector("#quantityOfSAMOSAS").value * 40;
      total = total+cost;
    }
    if(document.querySelector("#TANDOORI-CHICKEN").checked){
      cost = document.querySelector("#quantityOfTANDOORI-CHICKEN").value * 40;
      total = total+cost;
    }
    if(document.querySelector("#MALAI-KOFTA").checked){
      cost = document.querySelector("#quantityOfMALAI-KOFTA").value * 30;
      total = total+cost;
    }
    if(document.querySelector("#MASALA-CHAI").checked){
      cost = document.querySelector("#quantityOfMASALA-CHAI").value * 20;
      total = total+cost;
    }
    if(document.querySelector("#MATAR-PANEER").checked){
      cost = document.querySelector("#quantityOfMATAR-PANEER").value * 10;
      total = total+cost;
    }
    if(document.querySelector("#NAAN").checked){
      cost = document.querySelector("#quantityOfNAAN").value * 20;
      total = total+cost;
    }
    if(document.querySelector("#BEEF-VINDALOO").checked){
      cost = document.querySelector("#quantityOfBEEF-VINDALOO").value * 30;
      total = total+cost;
    }
    this.setState({total: total})
  }

  showOrder=()=>{
    if(this.state.total === 0){
      return(
        <div>
          <br></br>
          <h2>Place Your Order</h2>
        </div>
      );
    }
    else{
      var array = document.querySelectorAll(`input`);
      array = Array.prototype.slice.call(array);

      return array.map((input) => {
        if(document.querySelector(`#${input.id}`).checked){
          var temp = input.alt;
          temp = parseInt(temp,10);
          return(
            <div id="billDiv" key={input.name}>
              <h4>
              <React.Fragment>Your </React.Fragment>
              {document.querySelector(`#quantityOf${input.name}`).value}
              <React.Fragment> {input.name} Costs: $</React.Fragment>
              {document.querySelector(`#quantityOf${input.name}`).value * temp}
              </h4>
            </div>
          );
        }
      });
    }
  }



    render(){
      return(
        <React.Fragment>
          <Container fixed>
          <Header />
          <div className="flex-container">
            <div id="dishesDiv"><h5>Dishes</h5></div>
            <div><h5>Costs</h5></div>
            <div><h5>Quantity</h5></div>
          </div>

          <div className="flex-container">
          <div className="ui checkbox">
            <input type="checkbox" name="ALU-GOBI" id="ALU-GOBI" alt="10"></input>
            <label><h5>ALU-GOBI</h5></label>
          </div>
            <div><h5>$10</h5></div>
            <div id="inputQuantity">
              <input type="text" placeholder="Quantity" id="quantityOfALU-GOBI"></input>
            </div>
          </div>

          <div className="flex-container">
          <div className="ui checkbox">
            <input type="checkbox" name="BUTTER-CHICKEN" id="BUTTER-CHICKEN" alt="20"></input>
            <label><h5>BUTTER-CHICKEN</h5></label>
          </div>
            <div><h5>$20</h5></div>
            <div id="inputQuantity">
              <input type="text" placeholder="Quantity" id="quantityOfBUTTER-CHICKEN"></input>
            </div>
          </div>

          <div className="flex-container">
          <div className="ui checkbox">
            <input type="checkbox" name="ROGAN-JOSH" id="ROGAN-JOSH" alt="30"></input>
            <label><h5>ROGAN-JOSH</h5></label>
          </div>
            <div><h5>$30</h5></div>
            <div id="inputQuantity">
              <input type="text" placeholder="Quantity" id="quantityOfROGAN-JOSH"></input>
            </div>
          </div>

          <div className="flex-container">
          <div className="ui checkbox">
            <input type="checkbox" name="SAMOSAS" id="SAMOSAS" alt="40"></input>
            <label><h5>SAMOSAS</h5></label>
          </div>
            <div><h5>$40</h5></div>
            <div id="inputQuantity">
              <input type="text" placeholder="Quantity" id="quantityOfSAMOSAS"></input>
            </div>
          </div>

          <div className="flex-container">
          <div className="ui checkbox">
            <input type="checkbox" name="TANDOORI-CHICKEN" id="TANDOORI-CHICKEN" alt="40"></input>
            <label><h5>TANDOORI-CHICKEN</h5></label>
          </div>
            <div><h5>$40</h5></div>
            <div id="inputQuantity">
              <input type="text" placeholder="Quantity" id="quantityOfTANDOORI-CHICKEN"></input>
            </div>
          </div>

          <div className="flex-container">
          <div className="ui checkbox">
            <input type="checkbox" name="MALAI-KOFTA" id="MALAI-KOFTA" alt="30"></input>
            <label><h5>MALAI-KOFTA</h5></label>
          </div>
            <div><h5>$30</h5></div>
            <div id="inputQuantity">
              <input type="text" placeholder="Quantity" id="quantityOfMALAI-KOFTA"></input>
            </div>
          </div>

          <div className="flex-container">
          <div className="ui checkbox">
            <input type="checkbox" name="MASALA-CHAI" id="MASALA-CHAI" alt="20"></input>
            <label><h5>MASALA-CHAI</h5></label>
          </div>
            <div><h5>$20</h5></div>
            <div id="inputQuantity">
              <input type="text" placeholder="Quantity" id="quantityOfMASALA-CHAI"></input>
            </div>
          </div>

          <div className="flex-container">
          <div className="ui checkbox">
            <input type="checkbox" name="MATAR-PANEER" id="MATAR-PANEER" alt="10"></input>
            <label><h5>MATAR-PANEER</h5></label>
          </div>
            <div><h5>$10</h5></div>
            <div id="inputQuantity">
              <input type="text" placeholder="Quantity" id="quantityOfMATAR-PANEER"></input>
            </div>
          </div>

          <div className="flex-container">
          <div className="ui checkbox">
            <input type="checkbox" name="NAAN" id="NAAN" alt="20"></input>
            <label><h5>NAAN</h5></label>
          </div>
            <div><h5>$20</h5></div>
            <div id="inputQuantity">
              <input type="text" placeholder="Quantity" id="quantityOfNAAN"></input>
            </div>
          </div>

          <div className="flex-container">
          <div className="ui checkbox">
            <input type="checkbox" name="BEEF-VINDALOO" id="BEEF-VINDALOO" alt="30"></input>
            <label><h5>BEEF-VINDALOO</h5></label>
          </div>
            <div><h5>$30</h5></div>
            <div id="inputQuantity">
              <input type="text" placeholder="Quantity" id="quantityOfBEEF-VINDALOO"></input>
            </div>
          </div>

          <div id="buttonDiv">
            <button className="ui positive basic button" onClick={this.getTotal}>Show my Order</button>{this.showOrder()}
            <br></br>
            <h2 style = {{textDecoration: "underline"}}>
            Total Cost of your order:  $
            {this.state.total}
            </h2>
          </div>
          </Container>
        </React.Fragment>
      );
    }
  }


export default PlaceOrder;
