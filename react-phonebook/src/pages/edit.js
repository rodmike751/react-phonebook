import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from '../http'


export default function Edit(props) {
    const navigate = useNavigate();
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

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = () =>{
        http.put('/contacts/'+id,inputs).then((res)=>{
            navigate('/');
        })
    }
    return (
        <div>
            <h2>Edit Contact</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <label>FirstName</label>
                        <input type="text" name="firstname" className="form-control mb-2"
                                value={inputs.firstname || ''}
                                onChange={handleChange}
                             />
                        <label>LastName</label>
                        <input type="text" name="lastname" className="form-control mb-2"
                                value={inputs.lastname || ''}
                                onChange={handleChange}
                             />

                        <label>PhoneNumber</label>
                        <input type="text" name="phone" className="form-control mb-2"
                            value={inputs.phone || ''}
                            onChange={handleChange}
                        />

                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Update</button>
                    </div>
                </div>
            </div>
        </div>

    )
}