import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { getVideoHistory } from '../services/allAPI';



function Watchhistory() {

  const [history,setHistory] = useState([])
   
  const handleHisory = async() =>{
    const {data} = await getVideoHistory()
    console.log(data);
    setHistory(data)
    console.log(history);
  }
  useEffect(()=>{
    handleHisory()
  },[])


  return (
    <div  className='container m-5 text-center'>
     <div>
      <h1 className='my-5'>Watch History</h1>
     </div>
     <div>
      <Link style={{textDecoration:'none'}} to={'/home'}>
      <button  style={{float:'right'}} className='btn my-5 bg-danger'>Back to Home</button>
      </Link>
     </div>
     <div>
     <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>Caption</th>
          <th scope='col'>Url</th>
          <th scope='col'>Time Stamp</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {
       history?history?.map((item)=>(
          <tr>
          <th scope='row'>{item.id}</th>
          <td>{item.caption}</td>
          <td><a href={item.embedLink}>{item.embedLink}</a></td>
          <td>{item.timeStamp}</td>
        </tr>
        )):"No history found"
      }
      </MDBTableBody>
    </MDBTable>
     </div>
    </div>
  )
}

export default Watchhistory