import React, {useState} from 'react';
import './App.css';
import Form from './Form';

function App() {
  const [teamMembers, setMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({name:'', email:'', role:''});
  const [editing, setEdit] = useState(false);
  
  const addNewMember = (event, newMember) => {
    event.preventDefault();
    setMembers([...teamMembers, newMember])
  };


  const selectMemberToEdit = index => {
    setEdit(true);
    setMemberToEdit({...teamMembers[index], index});
  }

  const editMember = (event, member) => {
    const {name, email, role} = member;
    event.preventDefault();
    teamMembers[member.index] = {name, email, role};
    setMembers([...teamMembers]);
  };


  return (
    <div className="App">
      Assemble Your Team!
      <table>
        <caption>Team Members</caption>
        <tbody>
          <tr>
            <td>Name</td>
            <td>E-Mail</td>
            <td>Role</td>
          </tr>
          {teamMembers && teamMembers.map((member, index) => {
            return (
              <tr>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.role}</td>
              <td><button onClick={event => selectMemberToEdit(index)}>Edit</button></td>
            </tr>
            )
          })}
        </tbody>
      </table>
      <Form addMember={addNewMember} memberToEdit={memberToEdit} editMember={editMember} editing={editing }/>
    </div>
  );
}

export default App;
