import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import fetchUserControllData from '../../../fetchData/fetchUserControllData';
import fetchUserControllUpdateData from '../../../fetchData/fetchUsercontrollUpdateData';

const usePersonalDetails = (user) => {

    const [viewEdit, setViewEdit] = useState(false);
    const [idHolder, setIdHolder] = useState('');
    const [viewUpdating, setViewUpdating] = useState(false);

    const { data: userData, refetch, isLoading } = useQuery("userData", () => fetchUserControllData());

    const allUserData = userData?.data?.result;

    const findUser = allUserData?.find(f => {
        return f?.email === user?.email;
    });

    console.log(findUser)


    const [allData, setAllData] = useState({
        name: '',
        emailAddress: '',
        phoneNumber: '',
        dateOfBirth: '',
        nationality: '',
        gender: '',
        address: '',
        passport: ''
    });


    useEffect(() => {
        setAllData({
            name: findUser?.emailName,
            emailAddress: findUser?.email,
            phoneNumber: findUser?.phoneNumber,
            dateOfBirth: findUser?.dateOfBirth,
            nationality: findUser?.nationality,
            gender: findUser?.gender,
            address: findUser?.address,
            passport: findUser?.passport
        })
    }, [findUser])

    const allInfo = [
        {
            id: 1,
            title: 'Name',
            updatedValue: findUser?.emailName,
            editableValue: allData.name,
            buttonEdit: 'Edit',
            buttonSave: 'save',
            buttonCancel: 'cancel',
            buttonHide: false,
            variable: 'name',
        },
        {
            id: 2,
            title: 'Email Address',
            updatedValue: findUser?.email,
            emailVarified: user.emailVerified,
            editableValue: allData.emailAddress,
            buttonEdit: 'Edit',
            buttonSave: 'save',
            buttonCancel: 'cancel',
            buttonHide: true,
            variable: 'emailAddress',
        },
        {
            id: 3,
            title: 'User Status',
            updatedValue: findUser?.userRoll,
            editableValue: '',
            buttonEdit: 'Edit',
            buttonSave: 'save',
            buttonCancel: 'cancel',
            buttonHide: true,
            variable: 'userRoll',
        },
        {
            id: 4,
            title: 'Phone Number',
            updatedValue: findUser?.phoneNumber,
            editableValue: allData.phoneNumber,
            buttonEdit: 'Edit',
            buttonSave: 'save',
            buttonCancel: 'cancel',
            buttonHide: false,
            variable: 'phoneNumber',
        },
        {
            id: 5,
            title: 'Date of Birth',
            updatedValue: findUser?.dateOfBirth,
            editableValue: allData.dateOfBirth,
            buttonEdit: 'Edit',
            buttonSave: 'save',
            buttonCancel: 'cancel',
            buttonHide: false,
            variable: 'dateOfBirth',
        },
        {
            id: 6,
            title: 'Nationality',
            updatedValue: findUser?.nationality,
            editableValue: allData.nationality,
            buttonEdit: 'Edit',
            buttonSave: 'save',
            buttonCancel: 'cancel',
            buttonHide: false,
            variable: 'nationality',
        },
        {
            id: 7,
            title: 'Gender',
            updatedValue: findUser?.gender,
            editableValue: allData.gender,
            buttonEdit: 'Edit',
            buttonSave: 'save',
            buttonCancel: 'cancel',
            buttonHide: false,
            variable: 'gender',
        },
        {
            id: 8,
            title: 'Address',
            updatedValue: findUser?.address,
            editableValue: allData.address,
            buttonEdit: 'Edit',
            buttonSave: 'save',
            buttonCancel: 'cancel',
            buttonHide: false,
            variable: 'address',
        },
        {
            id: 9,
            title: 'Passport',
            updatedValue: findUser?.passport,
            editableValue: allData.passport,
            buttonEdit: 'Edit',
            buttonSave: 'save',
            buttonCancel: 'cancel',
            buttonHide: false,
            variable: 'passport',
        }
    ]


    const handleUpdate = async () => {
        const updatedData = {
            emailName: allData.name,
            email: allData.emailAddress,
            phoneNumber: allData.phoneNumber,
            nationality: allData.nationality,
            dateOfBirth: allData.dateOfBirth,
            address: allData.address,
            gender: allData.gender,
            passport: allData.passport,
        }

        const response = await fetchUserControllUpdateData(findUser?._id, updatedData, refetch);

        if (response?.data?.status) {
            console.log(response?.data?.status)
        }
    }
    return [allInfo, allData, setAllData, viewEdit, setViewEdit, idHolder, setIdHolder, handleUpdate, isLoading, viewUpdating, setViewUpdating];
}

export default usePersonalDetails;
