import React, { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
    const [homeData, setHomeData] = useState([]);
    const [globalData, setGlobalData] = useState([]);
    const [tourArea, setTourArea] = useState('');
    const [name, setName] = useState({});
    const [members, setMembers] = useState();
    const [tourType, setTourType] = useState('');
    const [nameData, setNameData] = useState([]);
    const [formPersonal, setFormPersonal] = useState([]);

    return (
        <NoteContext.Provider value={{
            name: name,
            setName: setName,
            members: members,
            setMembers: setMembers,
            nameData: nameData,
            setNameData: setNameData,
            formPersonal: formPersonal,
            setFormPersonal: setFormPersonal,
            tourType: tourType,
            setTourType: setTourType,
            tourArea: tourArea,
            setTourArea: setTourArea,
            globalData: globalData,
            setGlobalData: setGlobalData,
            homeData: homeData,
            setHomeData: setHomeData,
        }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;