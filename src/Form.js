import React, {useState, useEffect} from 'react';

function Form(props){
    //handle add
    const [newMember, updateMember] = useState({name:'', email:'', role:''});
    const handleChange= event => updateMember({...newMember, [event.target.name]: event.target.value});

    useEffect(() => {
        updateMember(props.editing);
    })

    return (
        <form onSubmit={event => props.addMember(event, newMember)}>
            <input type="text" name="name" value={newMember.name || props.editing.name} onChange={event => handleChange(event)} />
            <br />
            <input type="email" name="email" value={newMember.email || props.editing.role} onChange={event => handleChange(event)} />
            <br />
            <input type="text" name="role" value={newMember.role || props.editing.role} onChange={event => handleChange(event)} />
            <br />
            <input type="submit" />
        </form>
    )
}

export default Form;