import React, { useRef, useState } from 'react';
import user from '../images/user.png'; 



export default function Numero() {
  const [contacts, setContacts] = useState([]);
  const inptN = useRef();
  const inptNm = useRef();
  const inptV = useRef();

  const fun = () => {
    const v_nom = inptN.current.value;
    const v_nm = inptNm.current.value;
    const v_v = inptV.current.value;
    setContacts([...contacts, { name: v_nom, number: v_nm, city: v_v }]);
    inptN.current.value="";
    inptNm.current.value="";
    inptV.current.value="";

  }
  const funDelete = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  }
  const afficher=()=>{
    document.getElementById("aff").style="dispaly:block"
  }
  const funSort = () => {
    const sortedContacts = contacts.slice().sort((a, b) => a.city > b.city ? 1 : -1);
    setContacts(sortedContacts);
  }
  const [searchCity, setSearchCity] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const handleSearch = () => {
    const filtered = contacts.filter(contact => contact.city.toLowerCase().includes(searchCity.toLowerCase()));
    setFilteredContacts(filtered);
    
    
    
  }
  

  return (
    <div className='ui main'>
      
        <h2>Ajouter Contact</h2>
        <br/>
      <form className='ui form'>
      <div className='field'>
          <label>Name</label>
        <input type="text" placeholder='Saisir le Nom' ref={inptN}  ></input><br/>
      </div>
      <br/>
      <div className='field'>
        <label>Numero</label>
        <input type="text" placeholder='Saisir le Numero' ref={inptNm} ></input><br/>
      </div>
      <br/>
      <div className='field'>
        <label>Ville</label>
        <input type="text" placeholder='Saisir La ville' ref={inptV} ></input><br/>
      </div>
      <br/>
        <input type="button" value="Ajouter" className='ui button blue' onClick={fun} ></input> <br/>
        <br/>
        <br/>
        <br/>
        <input type="text" className="inpts" placeholder='Saisir La ville' onChange={e => setSearchCity(e.target.value)} ></input>
        <br/>
        <br/>
        <button className='ui button yellow' onClick={handleSearch}>Chercher</button>
        <br/>
        <br/>
        <br/>
      <div id="div2">
        <input type="button" className='ui button yellow' value="Afficher" onClick={afficher} ></input> 
        <button className='ui button yellow' onClick={funSort}>Trier</button>
        
        <h2>Contact List</h2>
        {
        filteredContacts.map((el, i) => (
          <div className='item'>
            <br></br>
            <img className='ui avatar image' src={user} alt="user" />
            <div className="content">
            
              <div className='header'>{el.name}</div>
              
                <div  key={i}>
                  
                   {el.number} {el.city}
                </div>
            </div>
          </div>
        ))
      }
      </div>
      <br/>
      <br/>
      <div className='field' style={{display:'none'}} id="aff">
        {
        contacts.map((el, i) => (
          <div className='item'>
            <img className='ui avatar image' src={user} alt="user" />
            <div className='content'>
            <div className='header' key={i+el.name}>{el.name} </div>    
             <div> {el.number} &nbsp; {el.city}
             <br/>
             <br/>
             <button style={{marginTop:"-8px"}} className='ui button blue' onClick={() => funDelete(i)} >Delete </button>
             </div>
             </div>
             </div> 
          ))}

      </div>
      </form>
      
    </div>
    
  )
  

}