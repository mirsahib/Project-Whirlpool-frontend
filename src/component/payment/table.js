import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


export default class Table extends React.Component {
    constructor(props){
        super(props);
        
    }
    

    render(){
        const data = this.props.data
        //console.log(data)
        return (
            
            <tbody>
                {data.map(payment=>(
                    <tr key = {payment.id}>
                        <td>{payment.name}</td>
                        <td>{payment.pay_year}</td>
                        <td>{payment.pay_month}</td>
                        <td>{payment.exp_rent}</td>
                        <td>{payment.paid_rent}</td>
                        <td>{payment.dues}</td>
                        <td>{payment.comment}</td>
                        <td style={{width:'200px'}}>
                            <Link class='btn btn-info ml-2' >Show</Link>
                            {payment.pay_status ? <Link class='btn btn-primary ml-2' to='payment/makePayment' >Pay Rent</Link>:''}
                        </td>
                    </tr>
                ))}
            </tbody>
             
        )
    }


}