import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import BeatLoader from "react-spinners/BeatLoader";

function AdminRegister() {
    const history = useHistory();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [adminSecret, setAdminSecret] = useState("");
    const [loading, setLoading] = useState(false);

    const registerHelper = (e) => {
        e.preventDefault();
        setLoading(true);

        let data = {
            name,
            phone,
            address,
            email,
            password,
            adminSecret
        }

        let fetchData = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }

        fetch('http://localhost:5000/api/auth/register-admin', fetchData)
        .then(res => res.json())
        .then(data2 => {
            setLoading(false);
            if(data2.error) {
                toast.error(data2.error)
            }
            else {
                toast.success(data2.message);
                history.push('/login');
            }
        })
        .catch(err => {
            setLoading(false);
            toast.error('Something went wrong');
            console.log(err);
        })
    }

    return (
        <div className="container col-lg-4 mt-4">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title text-center mb-4">Admin Registration</h3>
                    <form onSubmit={registerHelper}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input 
                                type="tel" 
                                className="form-control" 
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <textarea 
                                className="form-control" 
                                id="address"
                                rows="2"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="adminSecret" className="form-label">Admin Secret Key</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="adminSecret"
                                placeholder="Enter admin secret key"
                                value={adminSecret}
                                onChange={(e) => setAdminSecret(e.target.value)}
                                required
                            />
                            <div className="form-text">Contact system administrator for the secret key.</div>
                        </div>

                        <div className="d-grid">
                            <button 
                                type="submit" 
                                className="btn btn-danger"
                                disabled={loading}
                            >
                                {loading ? <BeatLoader size={8} color="white" /> : "Register as Admin"}
                            </button>
                        </div>
                    </form>
                    
                    <div className="text-center mt-3">
                        <Link to="/login" className="text-decoration-none">
                            Already have an account? Login here
                        </Link>
                    </div>
                    
                    <div className="text-center mt-2">
                        <Link to="/register" className="text-decoration-none">
                            Register as regular user
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminRegister;