import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addRecipe, removeFromCalendar} from '../actions'
import {capitalize} from '../util/helper'
import CalendarIcon from 'react-icons/lib/'



 class App extends Component {
 
  render() {
    const {calendar, remove} = this.props
    const mealOrder = ['breakfast', 'lunch' , 'dinner']
    return (
      <div className = 'container'>
       <ul className='meal-types'>
        {mealOrder.map((mealType,i)=>(
              <li key={i} className='subheader'>
                {capitalize(mealType)}
              </li>           
        ))}

       </ul>
      </div>
    )
  }
}  

const mapStateToProps =({calendar, food})=>{
  const dayOrder = ['sunday','monday', 'tuesday','wednesday','thursday','friday','saturday']
  return {
    calendar : dayOrder.map((day)=>({
           day ,
           meals: Object.keys(calendar[day]).reduce((meals, meal)=>{
              meals[meal]   = calendar[day][meal]  ? food[calendar[day][meal]]
              : null
              return meals
          } , {})                          
    }))
  }
}
const mapDispatchToprops = (dispatch)=>{
  return  {
    selectRecipe  : (data)=> dispatch(addRecipe(data)),
    remove  : (data) => dispatch(removeFromCalendar(data))
  }
}


export default connect(mapStateToProps,
   mapDispatchToprops )(App)

{/* <input
          type='text'
          ref={(input) => this.input = input}
          placeholder="Monday's Breakfast"
        />
        <button onClick={this.submitFood}>Submit</button>

        <pre>
          Monday's Breakfast: {this.state.calendar && this.state.calendar.monday.breakfast}
        </pre> */}