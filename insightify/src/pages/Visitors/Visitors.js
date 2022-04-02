import React from 'react'
import { Button, Divider, Header } from '../../lib'
import './Visitors.css'
export default function Visitors() {
  return (
    <div>

      <Header />

      <form className='form'>

        <h1>Here you can upload date of the newly coming visitos.</h1>
        <h3>This will help you to generate fresh and updated reports.</h3>
        <Divider/>
        <div className="form-group">
          <label for="name">Name of the Visitor</label>
          <input type="text" className="form-control" id="name" placeholder="Impeccable Coder" />
        </div>

        <div className="form-group">
          <label for="checkin">Check in  date</label>
          <input type="date" className="form-control" id="checkin" />
        </div>

        <div className="form-group">
          <label for="checkout">Check out date</label>
          <input type="date" className="form-control" id="checkout" />
        </div>

        <div className="form-group">
          <label for="days">Days of stay</label>
          <input type="number" className="form-control" id="days" placeholder="1" />
        </div>

        <div className="form-group">
          <label for="number">Number of members</label>
          <select className="form-control" id="number">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>


        <div className="form-group">
          <label for="feedback">FeedBack</label>
          <textarea className="form-control" id="feedback" rows="3"></textarea>
        </div>

        <Button type={'submit'} height={50} width={300}>Submit</Button>

      </form>

    </div>
  )
}
