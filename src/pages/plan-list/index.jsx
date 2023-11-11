import React from 'react';
import{ Link } from 'react-router-dom';
import Header from '../../components/header';
import { useNavigate } from "react-router-dom";

const planData = [
  { id: 1, name: 'Basic Plan', price: '$9.99' },
  { id: 2, name: 'Standard Plan', price: '$19.99' },
  { id: 3, name: 'Premium Plan', price: '$29.99' },
  { id: 1, name: 'Basic Plan', price: '$9.99' },
  { id: 2, name: 'Standard Plan', price: '$19.99' },
  { id: 3, name: 'Premium Plan', price: '$29.99' },
  { id: 1, name: 'Basic Plan', price: '$9.99' },
  { id: 2, name: 'Standard Plan', price: '$19.99' },
  { id: 3, name: 'Premium Plan', price: '$29.99' },
  { id: 1, name: 'Basic Plan', price: '$9.99' },
  { id: 2, name: 'Standard Plan', price: '$19.99' },
  { id: 3, name: 'Premium Plan', price: '$29.99' },
  { id: 1, name: 'Basic Plan', price: '$9.99' },
  { id: 2, name: 'Standard Plan', price: '$19.99' },
  { id: 3, name: 'Premium Plan', price: '$29.99' },
];

function PlanList() {
  const navigate = useNavigate();
  const submitHandler = (e) =>{
  e.preventDefault()
  navigate('/create-plan')
  }
  return (
    <div>
       <Header title={"Plan List"} button={"Create Plan"} function={submitHandler}/>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px'}}>
      <thead>
        <tr style={{ background: 'black' , color: 'white', height: '40px' }}>
          <th>ID</th>
          <th>Plan Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {planData.map((plan) => (
          <tr key={plan.id} style={{ borderBottom: '1px solid #ddd', textAlign: 'center', height: '40px' }}>
            <td>{plan.id}</td>
            <td>{plan.name}</td>
            <td>{plan.price}</td>
            <td>
              <Link to={`/plan-details`} style={{ textDecoration: 'none' }}>
                <button style={{ background: 'lightblue', border: 'none', cursor: 'pointer', height: '25px', borderRadius:'5px' }}>
                  Plan Details
                </button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default PlanList;
