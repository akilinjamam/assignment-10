import React, { useContext, useEffect, useState } from 'react';
import imageModal from './ImageModal.module.css';
import Pagination from '../pagination/Pagination';
import noteContext from '../Context/noteContext';
import { useNavigate } from 'react-router-dom';
const ImageModal = ({ turn = true, search, data }) => {

    const state = useContext(noteContext);
    const pathName = state.pathName;
    const setPathName = state.setPathName;
    const setAddBlogImg = state.setAddBlogImg;
    const setUpdateBlogImg = state.setUpdateBlogImg;
    const setAddHomeImg = state.setAddHomeImg;
    const setAddGlobalImg = state.setAddGlobalImg;
    const setUpdateHomeImg = state.setUpdateHomeImg;
    const setUpdateGlobalImg = state.setUpdateGlobalImg;

    const [paginatedData, setPaginatedData] = useState([]);
    const [pageNumber, setPageNumber] = useState();
    const navigate = useNavigate();
    const handleSelecedImg = (value) => {
        if (pathName === '/dashboard/addToBlog') {
            setAddBlogImg(value);
        }
        if (pathName.slice(0, 21) === '/dashboard/updateBlog') {
            setUpdateBlogImg(value);
        }
        if (pathName === '/dashboard/addToHome') {
            setAddHomeImg(value)
        }
        if (pathName === '/dashboard/addToAbroad') {
            setAddGlobalImg(value);
        }
        if (pathName.slice(0, 21) === '/dashboard/updateHome') {
            setUpdateHomeImg(value);
        }
        if (pathName.slice(0, 23) === '/dashboard/updateGlobal') {
            setUpdateGlobalImg(value);
            console.log(true)
        }
        navigate(`${pathName}`);
        setPathName('')

    }
    return (
        <div className={`${imageModal.main} ${turn ? imageModal.block : imageModal.none}`}
        >
            <div className={`${imageModal.container} flex`}>
                <div className={`${imageModal.modal} `}>
                    <div className={`${imageModal.modalBtn} right_flex`}>
                        <i style={{ cursor: 'pointer', }} onClick={() => {
                            navigate(`${pathName}`);
                            setPathName('')
                        }} className="uil uil-times"></i>
                    </div>
                    <form onSubmit={search} action="">
                        <div className={`${imageModal.modalSearch} flex_between`}>
                            <input className={imageModal.modalSearchInput} type="text" name='search' placeholder='search image' />
                            <input className={imageModal.modalSearchBtn} type="submit" value="search" />
                        </div>
                    </form>
                    {
                        paginatedData?.length > 0
                            ?
                            <div className={`${imageModal.modal_detail} `}>
                                {
                                    paginatedData?.map(datas => {
                                        return <img onClick={() => handleSelecedImg(datas?.urls?.raw)} style={{ width: '100%', height: '28vh', cursor: 'pointer' }} key={datas?.id} src={datas?.urls?.small} loading='lazy' alt="" />
                                    })
                                }
                            </div>

                            :
                            <div className={`${imageModal.modal_detail_alt} flex `}>
                                <p>No Result Found</p>
                            </div>

                    }

                    <div className={`${imageModal.modalBottom} flex`}>
                        <br />
                        <Pagination
                            data={data}
                            container={setPaginatedData}
                            pageNumber={setPageNumber}
                            isBorder={true}
                            perPageNo={10}
                            border="green"
                            background={false}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};


export default ImageModal;