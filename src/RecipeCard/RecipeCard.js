import React, { Component } from 'react';

const RecipeCard = ({ tittle, description, imageURL, ingreadience ,arrayTag, recipeId}) => (
    
    <RenderCard recipeId={recipeId}titleFood={tittle} descriptionFood={description} imageURLFood={imageURL} ingreadienceFood={ingreadience}
     arrayTagFood={arrayTag}/>
  

  );
  function RecipeTagsNormal(props) {
    const tgs = props.listIng;
    const listItems = tgs.map((tg) =>
    <span className="badge badge-pill badge-norm"> {tg} </span>
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
        }
      }
    }
    const listItems = tgs.map((tg,index) =>
    <span className={isOnList[index] ? 'badge badge-pill badge-green' : 'badge badge-pill badge-red'}  > {tg} </span>
    );
    return (
      
      <div>{listItems}</div>
    );
  } 
  function RenderCard(props) {
    var foodTags = props.arrayTagFood;
    const titleFood = props.titleFood;
    const imageURLFood = props.imageURLFood;
    const ingreadienceFood = props.ingreadienceFood;
    var count=0;
    for (var i = 0; i < ingreadienceFood.length; i++) {
      for (var j = 0; j < foodTags.length; j++) {
        if (ingreadienceFood[i]===foodTags[j]){
        count++;
        }
      }
    }
    if(foodTags.length>0){
    if (count>0) {
      return (  
    <a href={"/recipe/"+props.recipeId} className="recipe-card">
      <div className="card">
      <img className="card-img-top" src={imageURLFood[0].url} alt="Food poster" />
      
 
       <div className="card-body">
        <h5 className="card-title">{titleFood}</h5>
        <p className="card-text"> <RecipeTagsAfter foodTags={foodTags}listIng={ingreadienceFood} /></p>
      </div>
      
    </div>
    </a>
    );
    } 
    return (
      (null)
    );
  } else{
    return (  
      <a href={"/recipe/"+props.recipeId} className="recipe-card">
      <div className="card">
      <img className="card-img-top" src={imageURLFood[0].url} alt="Food poster" />
      
 
       <div className="card-body">
        <h5 className="card-title">{titleFood}</h5>
        <p className="card-text"> <RecipeTagsNormal listIng={ingreadienceFood} /></p>
      </div>
      
    </div>
    </a>
    );
  }
  } 
  export default RecipeCard;
  