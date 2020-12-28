import data from "./data.js"
import {createTableElements} from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements([], "singlecity")
});

/* START CODING HERE */

populationBigger.addEventListener("click",()=>{
  const newData=data.filter((item)=>{
    return item.population>500000;
  });
  createTableElements(newData,"allcities");
});

landAreaLess.addEventListener("click",()=>{
  const nData=data.filter(item=>item.landArea<1000);
  createTableElements(nData,"allcities");
})

isPopulationLess.addEventListener("click",()=>{
  const manipulatedData=data.some(item=>item.population<100000);
  if(manipulatedData===true) {
    alert("Var");
  }
  else {
    alert("Yok");
  }

})

isLandBigger.addEventListener("click",()=>{
  const manipulatedData2=data.every(item=>item.landArea>100);
  if(manipulatedData2===true) {
    alert("Var");
  }
  else {
    alert("Yok");
  }
});

let inputSelect=document.getElementById("inputGroupSelect01");
inputSelect.options.length = 0;
    inputSelect.options[0] = new Option("Seçim yapınız", 0);
data.forEach((item,i)=>{
    inputSelect.options[i+1] = new Option(item.name, i);
});

inputGroupSelect01.addEventListener("change",()=>{
  const data3=data.filter((item,i)=>{
    return item.name==inputSelect.options[inputSelect.selectedIndex].text;
  })
  createTableElements(data3,"singlecity");

})