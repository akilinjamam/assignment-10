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
    const [blogIdContainer, setBlogIdContainer] = useState('');
    const [pathName, setPathName] = useState('');
    const [addBlogImg, setAddBlogImg] = useState('')
    const [updateBlogImg, setUpdateBlogImg] = useState('')
    const [addHomeImg, setAddHomeImg] = useState('')
    const [updateHomeImg, setUpdateHomeImg] = useState('')
    const [addGlobalImg, setAddGlobalImg] = useState('')
    const [updateGlobalImg, setUpdateGlobalImg] = useState('')
    const [allInputBlogData, setAllInputBlogData] = useState({
        title: '',
        bloggerName: '',
        description: '',
        plainDescription: '',
        content: ''

    })
    const [updateHomeName, setUpdateHomeName] = useState('')
    const [updateHomePrice, setUpdateHomePrice] = useState('')
    const [updateHomeStayLong, setUpdateHomeStayLong] = useState('')
    const [updateHomeTourDate, setUpdateHomeTourDate] = useState('')
    const [updateHomeTourLastDate, setUpdateHomeTourLastDate] = useState('')
    const [updateHomeTourArea, setUpdateHomeTourArea] = useState('')
    const [updateHomeDescription, setUpdateHomeDescription] = useState('')
    const [updateHomeItineraries, setUpdateHomeItineraries] = useState('')
    const [updateHomeTermsAndConditions, setUpdateHomeTermsAndConditions] = useState('')
    const [updateHomeAdditionalInfo, setUpdateHomeAdditionalInfo] = useState('')
    const [updateHomeInclusion, setUpdateHomeInclusion] = useState('')
    const [updateHomeContent, setUpdateHomeContent] = useState('')
    const [updateHomeContentSecond, setUpdateHomeContentSecond] = useState('')
    const [updateHomeContentThird, setUpdateHomeContentThird] = useState('')
    const [updateHomeContentFourth, setUpdateHomeContentFourth] = useState('')
    const [updateHomeContentFifth, setUpdateHomeContentFifth] = useState('')

    const [updateGlobalName, setUpdateGlobalName] = useState('')
    const [updateGlobalPrice, setUpdateGlobalPrice] = useState('')
    const [updateGlobalStayLong, setUpdateGlobalStayLong] = useState('')
    const [updateGlobalTourDate, setUpdateGlobalTourDate] = useState('')
    const [updateGlobalTourLastDate, setUpdateGlobalTourLastDate] = useState('')
    const [updateGlobalTourArea, setUpdateGlobalTourArea] = useState('')
    const [updateGlobalDescription, setUpdateGlobalDescription] = useState('')
    const [updateGlobalItineraries, setUpdateGlobalItineraries] = useState('')
    const [updateGlobalTermsAndConditions, setUpdateGlobalTermsAndConditions] = useState('')
    const [updateGlobalAdditionalInfo, setUpdateGlobalAdditionalInfo] = useState('')
    const [updateGlobalInclusion, setUpdateGlobalInclusion] = useState('')
    const [updateGlobalContent, setUpdateGlobalContent] = useState('')
    const [updateGlobalContentSecond, setUpdateGlobalContentSecond] = useState('')
    const [updateGlobalContentThird, setUpdateGlobalContentThird] = useState('')
    const [updateGlobalContentFourth, setUpdateGlobalContentFourth] = useState('')
    const [updateGlobalContentFifth, setUpdateGlobalContentFifth] = useState('')

    const [allInputHomeEventData, setAllInputHomeEventData] = useState({
        name: '',
        img: '',
        price: '',
        stayLong: '',
        tourDate: '',
        tourLastDate: '',
        tourArea: '',
        description: '',
        itineraries: '',
        termsAndConditions: '',
        additionalInfo: '',
        inclusion: '',
        content: '',
        contentSecond: '',
        contentThird: '',
        contentFourth: '',
        contentFifth: ''
    })
    const [allInputAbroadEventData, setAllInputAbroadEventData] = useState({
        name: '',
        img: '',
        price: '',
        stayLong: '',
        tourDate: '',
        tourLastDate: '',
        tourArea: '',
        description: '',
        itineraries: '',
        termsAndConditions: '',
        additionalInfo: '',
        inclusion: '',
        content: '',
        contentSecond: '',
        contentThird: '',
        contentFourth: '',
        contentFifth: ''
    })
    const [blogUpdateTitle, setBlogUpdateTitle] = useState('');
    const [blogUpdateBloggerName, setBlogUpdateBloggerName] = useState('');
    const [blogUpdateDescription, setBlogUpdateDescription] = useState('');
    const [blogUpdateContent, setBlogUpdateContent] = useState('');

    const [slideDrawer, setSlideDrawer] = useState(false);

    return (
        <NoteContext.Provider value={{

            // others
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
            blogIdContainer: blogIdContainer,
            setBlogIdContainer: setBlogIdContainer,
            pathName,
            setPathName,

            // add update blog, global event, home event images
            addBlogImg,
            setAddBlogImg,
            updateBlogImg,
            setUpdateBlogImg,
            addGlobalImg,
            setAddGlobalImg,
            updateGlobalImg,
            setUpdateGlobalImg,
            addHomeImg,
            setAddHomeImg,
            updateHomeImg,
            setUpdateHomeImg,

            // add blog data
            allInputBlogData,
            setAllInputBlogData,
            blogUpdateTitle,
            setBlogUpdateTitle,
            blogUpdateContent,
            setBlogUpdateContent,
            blogUpdateDescription,
            setBlogUpdateDescription,
            blogUpdateBloggerName,
            setBlogUpdateBloggerName,

            // add home and global event
            allInputHomeEventData,
            setAllInputHomeEventData,
            allInputAbroadEventData,
            setAllInputAbroadEventData,

            // update global event
            updateGlobalName,
            setUpdateGlobalName,
            updateGlobalPrice,
            setUpdateGlobalPrice,
            updateGlobalTourDate,
            setUpdateGlobalTourDate,
            updateGlobalTourArea,
            setUpdateGlobalTourArea,
            updateGlobalTourLastDate,
            setUpdateGlobalTourLastDate,
            updateGlobalDescription,
            setUpdateGlobalDescription,
            updateGlobalItineraries,
            setUpdateGlobalItineraries,
            updateGlobalTermsAndConditions,
            setUpdateGlobalTermsAndConditions,
            updateGlobalAdditionalInfo,
            setUpdateGlobalAdditionalInfo,
            updateGlobalInclusion,
            setUpdateGlobalInclusion,
            updateGlobalContent,
            setUpdateGlobalContent,
            updateGlobalContentSecond,
            setUpdateGlobalContentSecond,
            updateGlobalContentThird,
            setUpdateGlobalContentThird,
            updateGlobalContentFourth,
            setUpdateGlobalContentFourth,
            updateGlobalContentFifth,
            setUpdateGlobalContentFifth,
            updateGlobalStayLong,
            setUpdateGlobalStayLong,

            // update home event
            updateHomeName,
            setUpdateHomeName,
            updateHomePrice,
            setUpdateHomePrice,
            updateHomeTourDate,
            setUpdateHomeTourDate,
            updateHomeTourArea,
            setUpdateHomeTourArea,
            updateHomeTourLastDate,
            setUpdateHomeTourLastDate,
            updateHomeDescription,
            setUpdateHomeDescription,
            updateHomeItineraries,
            setUpdateHomeItineraries,
            updateHomeTermsAndConditions,
            setUpdateHomeTermsAndConditions,
            updateHomeAdditionalInfo,
            setUpdateHomeAdditionalInfo,
            updateHomeInclusion,
            setUpdateHomeInclusion,
            updateHomeContent,
            setUpdateHomeContent,
            updateHomeContentSecond,
            setUpdateHomeContentSecond,
            updateHomeContentThird,
            setUpdateHomeContentThird,
            updateHomeContentFourth,
            setUpdateHomeContentFourth,
            updateHomeContentFifth,
            setUpdateHomeContentFifth,
            setUpdateHomeStayLong,
            updateHomeStayLong,

            // slideDrawer switch for responsivness in profile section
            slideDrawer,
            setSlideDrawer
        }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;