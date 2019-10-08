import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './Form';

function App() {
  const [teamMembers, addMember] = useState([]);
  const [memberToEdit, updateMemberToEdit] = useState({name:'', email:'', role:''});
  
  const addNewMember = (event, newMember) => {
    event.preventDefault();
    addMember([...teamMembers, newMember])
  };


  const editMember = member => {
    updateMemberToEdit(teamMembers[member])
  }


  return (
    <div className="App">
      Hello
      {console.log(teamMembers)}
      <ul>
        {teamMembers && teamMembers.map((member, index) => <li>{`Name: ${member.name} E-Mail: ${member.email} Role: ${member.role}`} <button onClick={event => editMember(index)}>Edit</button></li>)}
      </ul>
      <Form addMember={addNewMember} editing={memberToEdit} />
    </div>
  );
}

export default App;
