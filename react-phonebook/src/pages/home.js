import { useState,useEffect } from "react";
import http from "../http"
import { Link } from "react-router-dom";
export default function Home() {
    const [contacts, setContacts] = useState([]);

    useEffect(()=>{
        fetchAllContacts();
    },[]);

    const fetchAllContacts = () => {
        http.get('/contacts').then(res=>{
            setContacts(res.data);
        })
    }


    const deleteContact = (id) => {
        http.delete('/contacts/'+id).then(res=>{
            fetchAllContacts();
        })
    }



    return (
        <div>
            <h2>Contacts listing ...</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Sno.</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>PhoneNumber</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact,index)=>(
                        <tr key={contact.id}>
                            <td>{++index}</td>
                            <td>{contact.firstname}</td>
                            <td>{contact.lastname}</td>
                            <td>{contact.phone}</td>
                            <td>
                                <Link className="btn btn-info" to={{ pathname: "/edit/" + contact.id }}>Edit</Link>&nbsp;
                                <Link className="btn btn-primary" to={{ pathname: "/view/" + contact.id }}>View</Link>&nbsp;
                                <button type="button" className="btn btn-danger"
                                    onClick={()=>{deleteContact(contact.id)}}
                                    >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}