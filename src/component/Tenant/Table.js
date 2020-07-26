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
                  {data.map(tenant=>(
                    <tr key = {tenant.id}>
                        <td>{tenant.id}</td>
                        <td>{tenant.name}</td>
                        <td>{tenant.nid}</td>
                        <td>{tenant.phone}</td>
                        <td>{tenant.reg_date}</td>
                        <td>{tenant.exp_rent}</td>
                        <td>{tenant.hrid}</td>
                        <td>
                        <Link className='btn btn-info ml-2' to={"/tenant/show/"+tenant.id} >Show</Link>
                        {tenant.tenant_status ? <Link className='btn btn-primary ml-2' to={"/tenant/edit/"+tenant.id} >Edit</Link> : ''}
                        {tenant.tenant_status ? <button value = {tenant.id} className="btn btn-danger ml-2" onClick={this.handleDelete} >Delete</button> : ''}
                        </td>
                    </tr>
                ))}                                                                                                    
            </tbody>
             
        )
    }


}