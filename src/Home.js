import React, { Component } from 'react';
import './Home.css';
import avatar_1 from './avatars/avatar_1.svg';
import home from './icons/home.svg'
// import bar from './icons/BAR.png'
// import culture from './icons/CULTURE.png'
// import walking from './icons/WALKING.png'
// import food from './icons/FOOD.png'
// import nature from './icons/NATURE.png'
// import shopping from './icons/SHOPPING.png'
import Autocomplete from './Component/Autocomplete.js'
import Desplegable from './Component/Desplegable.js'
// import ciudadesCba from './Component/CiudadesCba.js'

import { Redirect } from 'react-router'
import { Formik, Form } from 'formik'
import FieldWithError from './forms/FieldWithError'
import DropdownGender from './forms/DropdownGender'

const edad = [
  {
    value:"noRestriccion",
    description: 'Sin Restriccion Edad'
  },
  {
    value: "edadRestringida",
    description: 'Edad Restringida'
  },
  
  
]


const genders = [
  {
    value: "Cualquiera",
    description: 'Cualquiera'
  },
  {
    value: "Femenino",
    description: 'Femenino'
  },
  {
    value: "Masculino",
    description: 'Masculino'



/* <div className="ActivitiesSection">
<div className="Activity">
  <img alt={"Activity"} src={culture} />
</div>
<div className="Activity">
  <img alt={"Activity"} src={food} />
</div>
<div className="Activity">
  <img alt={"Activity"} src={walking} />
</div>
</div>
<div className="ActivitiesSection">
<div className="Activity">
  <img alt={"Activity"} src={nature} />
</div>
<div className="Activity">
  <img alt={"Activity"} src={shopping} />
</div >
<div className="Activity">
  <img alt={"Activity"} src={bar} />
</div>
</div> */