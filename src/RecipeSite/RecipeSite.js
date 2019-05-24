import React, { Component } from 'react';

const RecipeSite = ({fields}) => (
    //<p>{console.log(fields)}</p>
    <IsUndefined fields={fields} />


  );
  const Cos = ({ tittle, description,wholereceipe, imageURL, ingreadience ,arrayTag}) => (

   <RenderCard titleFood={tittle} wholeRecipe={wholereceipe} descriptionFood={description} imageURLFood={imageURL} ingreadienceFood={ingreadience}
     arrayTagFood={arrayTag}/>
  );
  function IsUndefined(props) {
      {console.log(typeof props.fields)}
    if(typeof props.fields =='object'){
        return (
            <Cos {...props.fields}/>
            
          );
    }else{
        return (
            (null)
          );
    }
  }
  function RecipeTagsNormal(props) {
    const tgs = props.listIng;
    const listItems = tgs.map((tg) =>
    <span class="badge badge-pill badge-norm"> {tg} </span>
    );
    return (
      <div>{listItems}</div>
    );
  } 
  function RecipeTagsAfter(props) {
    const tgs = props.listIng;
    var foodTags = props.foodTags;
    var isOnList = new Array(tgs.length);
    for (var i = 0; i < tgs.length; i++) {
      for (var j = 0; j < foodTags.length; j++) {
        
        if (foodTags[j]===tgs[i]){
          isOnList[i]=true;
          break;
        }else{
          isOnList[i]=false;
          console.log(foodTags[j], tgs[i],foodTags[j]===tgs[i]);
        }
      }
    }
    const listItems = tgs.map((tg,index) =>
    <span class={isOnList[index] ? 'badge badge-pill badge-green' : 'badge badge-pill badge-red'}  > {tg} </span>
    );
    return (
      
      <div>{listItems}</div>
    );
  } 
  function RenderCard(props) {
    const titleFood = props.titleFood;
    const imageURLFood = props.imageURLFood;
    const ingreadienceFood = props.ingreadienceFood;


    return (  
      <div className="card Recipe-site-window">
       <div className="card-body">
       <div class="crop"><img className="img-fluid" src={imageURLFood[0].url} alt="Food poster" /></div>
        <h2 className="card-title">{titleFood}</h2>
        <p className="card-text"> <RecipeTagsNormal listIng={ingreadienceFood} /></p>
        <p className="card-text"> {props.descriptionFood}</p>
        <p className="card-text"> { props.wholeRecipe}</p>
      </div>
      
    </div>
    );
  
  } 
  export default RecipeSite;
  