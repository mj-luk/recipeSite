import React, { Component } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import ToogleButton from '../accesories/ToogleButton';



class Recipes extends Component {

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this)
    this.state = {
      width: window.innerWidth,
      recipes: props.recipes,
      tagss: props.tagss,
      value: 'tofu',
      activeTags: [],
    };

  }
  // ********** Device size **********
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  // ********** Device size **********

  //przygotowanie funkcji dla childa tooglebutton
  handler(someValue) {
    this.setState({
      value: someValue
    })
  }
// ************ Change Tag array *********
  onRemoveItem = () => {
    this.setState(state => {
      const activeTags = state.activeTags.filter(item => item !== state.value)

      return {
        activeTags,
      };
    });
  };
onAddItem = () => {
  this.setState(state => {
      const activeTags = state.activeTags.concat(state.value);
    return {
      activeTags,
    };
  });
};
// ************ Change Tag array *********

  render() {

    //***  sprawdzenie wielkosci
    const { width } = this.state;
    const isMobile = width <= 950;
    if (!isMobile) {   //******** wersja komp******
    return (
      <div className="row">
      <div className="col-8 mainbg">
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card-columns">
                {this.props.recipes.map((movie,index) => <RecipeCard recipeId={index} arrayTag={this.state.activeTags} {...movie.fields} /> )}
            </div>
            {/* <NumberList numbers={this.state.activeTags} /> */}

          </div>
        </div>
      </div>
      </div>
        <div className="col-4 windowbg taglist">
          <h2 className="tag_tittle">Check what you have in the fridge</h2>
        {this.props.tagss.map(btags => <FoodTagsButton val={this.handler} add={this.onAddItem} remove={this.onRemoveItem} {...btags.fields} /> )}
        </div>
    </div>
    );
    } else {
      // *********** wersja mobilna **********
      return (
        <div className="row mainbg">
        <div className="tagbordermobile windowbg">
              <div className="taglistmobile" >
              <h2 className="tag_tittle mobile">Check what you have in the fridge</h2>
                {this.props.tagss.map(btags => <FoodTagsButton val={this.handler} add={this.onAddItem} 
                remove={this.onRemoveItem} {...btags.fields} /> )}
              </div>
          </div>
        <div className="container">
          <div className="row ">
            <div className="col">
              <div className="card-columns">
                {this.props.recipes.map((movie,index) => <RecipeCard recipeId={index} arrayTag={this.state.activeTags} {...movie.fields} /> )}
              </div>
              {/* <NumberList numbers={this.state.activeTags} /> */}
  
            </div>
          </div>
        </div>
      </div>
      );
    }
  }
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
  <div key={number.toString()} class="tagbutton">
  <ToogleButton buttonName={number} />
  </div>
  );
  return (
    <div>{listItems}</div>
  );
}
const FoodTagsButton2 = ({ tagnamee}) => (
  <div className="tagbutton">
    {tagnamee}
  
  </div>
);

const FoodTagsButton = ({ tagnamee, add, remove, val}) => (
  
  <ToogleButton buttonName={tagnamee} changvalue={val} addMethod={add} removeMethod={remove}/>

);


//<p className="card-text">{ingredience.map(tag =><Tags {...tag} />)} </p>
export default Recipes;