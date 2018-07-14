//Github Pages LINK === https://usheninte.github.io/meal-voter/index.html

class DinnerVote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    };
    /* 
    this.add = this.add.bind(this);
    this.minus = this.minus.bind(this); 
    */
  }
  add() {
    this.setState({
      votes: this.state.votes + 1
    });
  }
  minus() {
    this.setState({
      votes: this.state.votes - 1
    });
  }
  render() {
    var dinnerStyle = {
      display: "inline-block",
      margin: 20,
      height: 500,
      width: 300,
      padding: 0,
      textAlign: "center",
      backgroundColor: "#fff",
      WebkitFilter: "drop-shadow(0px 0px 5px #555)",
      filter: "drop-shadow(0px 0px 5px #555)"
    };
    var imgStyle = {
      width: 200,
      height: 200,
      marginTop: 20
    }
    return(
      <div style={dinnerStyle}>
        <img src={this.props.img} style={imgStyle} alt="food image" />
        <h1>Dinner Time</h1>
        <p>Vote Here If You Want This</p>
        <button onClick={() => this.add()}>+1</button>
        <p>Vote Here If You Do Not Want This</p>
        <button onClick={() => this.minus()}>-1</button>
        <p>Total: {this.state.votes}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <DinnerVote img="https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg"/>
    <DinnerVote img="https://static.pexels.com/photos/58722/pexels-photo-58722.jpeg"/>
    <DinnerVote img="https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg"/>
    <br /><br /><br />
    <h4><a href="http://twitter.com/Usheninte">Usheninte &copy; 2018</a></h4>
  </div>,
  document.getElementById("app")
);