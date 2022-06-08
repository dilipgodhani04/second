
import React, { Component } from 'react';
// const Student = props =>{
//     return(
//         <div>
//             <h1>Hello, {props.name}</h1>
//             <h2>Roll No,{props.roll}</h2>
//         </div>
//     );
// };
//    class Student extands Component {
//     render() {
//         return(
//             <div>
//                 <h1>Hello, props.name</h1>
//                 <h2>Roll No, props.roll</h2>
//             </div>
//         );
//     }
// }

class Student extends  Component{
    state = {
        name: "ajay" ,
        roll : 101
    };
    render(){
        return <h1>Hiiiiiii {this.state.name} your roll no {this.state.roll}</h1>;
    }
}
export default Student;