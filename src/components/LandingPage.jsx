import { useEffect, useState } from "react";
import styles from "./Landing.module.css";
function LandingPage() {
    
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        mobile:"",
        password:""
    })
    const [signUpClick,setSignUp]=useState(false);
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData((prev)=>{return{...prev,[name]:value}})
    }
    
    const handleSubmit=()=>{
        console.log(formData);
        setFormData({ name:"",
            email:"",
            mobile:"",
            password:""})
    }
    
    const handleClick=()=>{
        setSignUp(!signUpClick);
    }
    useEffect(()=>{setSignUp(false); setFormData(formData)}
    ,[]);

    return (
        <>
            <div className={styles.register}>
                
                { !signUpClick? ( < div className={styles.left}>
                    <section>

                    <h1>Already have an account?</h1>
                    <p>Your personal Job finder is here</p>
                    <div className={styles.entries}>
                        <input value={formData.email} type="email" name="email" placeholder="Email" onChange={handleChange}/>
                        <input value={formData.password} type="password" name="password" placeholder="password" onChange={handleChange}/>
                    </div>
                        <button type="submit" onClick={handleSubmit} >Sign in</button>
                    <p>Don't have an account? <button onClick={handleClick}> Sign Up</button> </p>
                    </section>
                </div>
                    ):(< div className={styles.left}>
                        <section>

                    <h1>Create your account</h1>
                    <p>Your personal Job finder is here</p>
                    <div className={styles.entries}>
                        <input value={formData.name} type="text" name="name" placeholder="Name" onChange={handleChange} />
                        <input value={formData.email} type="email" name="email" placeholder="Email" onChange={handleChange}/>
                        <input value={formData.mobile} name="mobile" placeholder="Mobile" onChange={handleChange}/>
                        <input value={formData.password} type="password" name="password" placeholder="password" onChange={handleChange}/>
                       
                    </div>
                        <button type="submit" onClick={handleSubmit} >Create Account</button>
                    <p>Already have an account?  <button onClick={handleClick}> Sign In</button> </p>
                        </section>
                </div>) }
                
                <div className={styles.right} >
                    <h1>Your Personal job Finder</h1>
                </div>
            </div>
        </>
    )
}

export default LandingPage;
