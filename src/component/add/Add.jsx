import React from 'react'

export default function Add() {
  return (
    <>
    <h2>Add products !</h2>
  <form action="">

  <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Red Lipstick
"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput2" className="form-label">Price</label>
  <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="60
"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Description</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>




  </form>
    </>
  )
}
