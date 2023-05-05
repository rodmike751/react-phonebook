import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from '../http'


export default function View(props) {
    const [inputs,setInputs] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetchContact()
    },[]);

    const fetchContact= () =>{
        http.get('/contacts/'+id+'/edit').then((res)=>{
            setInputs({
                firstname:res.data.firstname,
                lastname:res.data.lastname,
                phone:res.data.phone,
            });
        });
    }
    return (
        <div>
            <h2>View Contact</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <h4>FirstName</h4>
                        <p>{ inputs.firstname }</p>
                        <h4>LastName</h4>
                        <p>{ inputs.lastname }</p>
                        <h4>Phone</h4>
                        <p>{ inputs.phone }</p>

                    </div>
                </div>
            </div>
        </div>

    )
}