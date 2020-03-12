import React, { Component } from 'react'

export default class Card extends Component {
    state={
        name:'',
        numcard:'',
        date: '',
    }
    changename=(e)=>
    {
        this.setState({
            name:e.target.value.toUpperCase()
        })
    }

    changenumcard=(e)=> {
        e.target.value = e.target.value.replace(/[^0-9]/g, "").replace(/(\d{4})/g, "$1 ").trim();
        this.setState({numcard : e.target.value})
   
 
 
//         for(let i =0;i<el.target.value.length;i++)
// {
//       if( (/[0-9]/g).test(el.target.value[i]))
//      {   this.setState({
//  numcard:`${el.target.value.slice(0,4)} ${el.target.value.slice(4,8)} ${el.target.value.slice(8,12)} ${el.target.value.slice(12,16)}`,
//      }) 
//     }
//         else if (!this.state.numcard.length){
//             {  
//                 el.target.value=''
//                  this.setState({
//                     numcard:'',
              
//             })}

//         }
      
//         }

// let reg = /[^0-9] &&[" "]/gi
// if(!e.target.value.match(reg)){
// this.setState({
//     numcard: e.target.value.replace()
// })
// }












    }

    changedate=(e)=>
    {
        for(let i =0;i<e.target.value.length;i++)
        {
              if( (/[0-9]/g).test(e.target.value[i]))
             {   this.setState({
         date:e.target.value.slice(0,2)<='12'&& e.target.value.slice(2,4)<='30'?`${e.target.value.slice(0,2)}/${e.target.value.slice(2,4)}`:'',
                       }) 
            }
                else
                {  
                    e.target.value=''
                     this.setState({
                    date:'',
                  
                })}
                }
            }
    render() 
    {
        return (
            <div className='card'>
                <div className="pos-b">
            <input className='input' type='text'  value = {this.state.name}placeholder='Enter your name' onChange={this.changename}/>
           <input className= 'input' type='text'placeholder='card number'value = {this.state.numcard} maxLength='19' onChange={this.changenumcard} />
            <input className='input' type='text' placeholder='Date'maxLength='5'onChange={this.changedate}/>
        <h1 className="marwen">{this.state.name}</h1>
        <h2  className="marwen">{this.state.numcard}</h2>
        <h3  className="marwen">{this.state.date}</h3>
            </div>
             </div>
        )}}
