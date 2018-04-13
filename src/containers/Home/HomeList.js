import React, { Component } from 'react'

export default class HomeList extends Component {
  render() {
    return (
      <div className="home-list">
        <ul>
            {
                this.props.lists.map((item,index) =>(
                   <li key={index}>
                        <img src={item.url} alt=""/>
                        <p>{item.title}</p>
                        <span>{item.price}</span>
                   </li> 
                ))  
            }
        </ul>
      </div>
    )
  }
}
