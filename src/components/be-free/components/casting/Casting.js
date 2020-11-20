import React from 'react'
import CastingInfo from "../../../../UI/components/more-info-casting/more-info.casting";
import './Casting.scss'
import CastingForm from "../../../../UI/components/casting-form/casting-form";

const Casting = ({ setDone }) => {
  return (
    <form className="befree-container">
      <CastingInfo/>
      <CastingForm setDone={setDone}/>
    </form>
  )
}

export default Casting
