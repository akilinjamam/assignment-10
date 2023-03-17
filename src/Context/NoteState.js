import React, { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {

    const [name, setName] = useState({});
    const [members, setMembers] = useState();
    const [nameData, setNameData] = useState([]);
    const [formPersonal, setFormPersonal] = useState([])
    console.log(members)
    console.log(name)

    return (
        <NoteContext.Provider value={{ name: name, setName: setName, members: members, setMembers: setMembers, nameData: nameData, setNameData: setNameData, formPersonal: formPersonal, setFormPersonal: setFormPersonal }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;