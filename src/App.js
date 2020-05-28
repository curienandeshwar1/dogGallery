import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeaturedImage from './components/FeaturedImage';
import ImageGrid from './components/ImageGrid';
import BreedSelect from './components/BreedSelect';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg : "",
      imggrid: [],
      breedvalue: 'chow',
      selectedImage : null
    };
  this.handleBreedChange = this.handleBreedChange.bind(this);
  this.loadSelectedImage = this.loadSelectedImage.bind(this);
  }

  
  loadFeaturedImage(breed){
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(res => {
      if (res.ok) {
          return res.json();
      } else {
          throw Error(res.statusText);
      }
    })
    .then(data => {
      this.setState({
          msg: data.message
      });
    })
  }

  loadImageGrid(breed){
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then(res => {
      if (res.ok) {
          return res.json();
      } else {
          throw Error(res.statusText);
      }
    })
    .then(data => {
      this.setState({
          imggrid: data.message
      });
    })
  }

  handleBreedChange(event) {
    this.setState({breedvalue: event.target.value});
  }


  loadSelectedImage(index){
    fetch(`index`)    
    .then(this.setState({ msg: index}))
  }

  componentDidMount(){
     this.loadFeaturedImage(this.state.breedvalue);
     this.loadImageGrid(this.state.breedvalue);
  }

  componentDidUpdate(prevProps,prevState){
    if (this.state.breedvalue !== prevState.breedvalue) {
      this.loadFeaturedImage(this.state.breedvalue);
      this.loadImageGrid(this.state.breedvalue);
    }

  }

  render(){
    
    return (
      <div className="App">
       <div className="container">
          <header>
              <div className="jumbotron">
                <h2> {this.state.breedvalue.toString().charAt(0).toUpperCase()+this.state.breedvalue.slice(1)} Dog Gallery</h2>
                <h3>-Curie Nandeshwar</h3>
                <hr/> 
                <br/><BreedSelect breedvalue={this.state.breedvalue} changedvalue={this.handleBreedChange}/>
              </div>              
          </header>
          <div>
            <FeaturedImage image={this.state.msg}/>
          </div>
          <div>
             <ImageGrid imagesingrid={this.state.imggrid} loadSelectedImage={this.loadSelectedImage}/>
          </div>
        </div>
      </div>
    );
  }

}



export default App;
