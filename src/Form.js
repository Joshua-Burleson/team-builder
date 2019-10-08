import React, {useState, useEffect} from 'react';

function Form(props){

    const [newMember, updateMember] = useState({name:'', email:'', role:''});
    const handleChange= event => updateMember({...newMember, [event.target.name]: event.target.value});


    const handleSubmit = event => {
        updateMember({name:'', email:'', role:''});
        return props.editing ? props.editMember(event, newMember) : props.addMember(event, newMember);
    }

    useEffect(() => {
        updateMember(props.memberToEdit);
    }, [props.memberToEdit])

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" value={newMember.name || props.memberToEdit.name} onChange={event => handleChange(event)} />
            <br />
            <label htmlFor="email">E-Mail: </label>
            <input type="email" id="email" name="email" value={newMember.email || props.memberToEdit.role} onChange={event => handleChange(event)} />
            <br />
            <label htmlFor="role">Role: </label>
            <input type="text" id="role" name="role" value={newMember.role || props.memberToEdit.role} onChange={event => handleChange(event)} />
            <br />
            <input type="submit" />
        </form>
    )
}

export default Form;