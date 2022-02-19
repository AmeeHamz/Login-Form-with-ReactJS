import React, {useState} from 'react'

const Basicform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault()
      const newEntry = { email: email, password: password };

      setAllEntry([ ...allEntry, newEntry]);
      console.log(allEntry);
  }

  return (
    <>
        <form className='form' action='' onSubmit={submitForm}>
            
            <div className="title"> Welcome </div>
            <div className="subtitle"> Let's create your account! </div>

            <div className="input-container ic1">
            
                <label classname="placeholder" htmlfor="email"> Email </label>
                <div className="cut"></div>
                <input className='input'  type="text" name="email" id="email" autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />   
            </div>


            <div className="input-container ic2">
            
                <label classname="placeholder" for="password">Password</label>
                <div className="cut"></div>
                <input className='input'  type="password" name="password" id="password" autoComplete="off" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />  
                <div className="cut cut-short"></div> 
            </div>
            <button className='submit' type='Submit'>Login</button>
        </form>
        <br/>
        <div>
          {
            allEntry.map((curElem) => {
              return(
                <div className='showDataStyles'>
                <p>{curElem.email}</p>
                <p>{curElem.password}</p>

                </div>
              )
            }) 
          }
        </div>
    </>
  )
};

export default Basicform;