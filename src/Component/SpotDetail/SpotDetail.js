import React from 'react';
import { useParams } from 'react-router-dom';

const SpotDetail = () => {

    const { spotdetailId, nameId } = useParams()


    return (
        <div>
            <h2>this is spot detail  {spotdetailId} {nameId} </h2>


        </div>
    );
};

export default SpotDetail;