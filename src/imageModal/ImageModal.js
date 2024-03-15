import React, { useContext, useState } from 'react';
import imageModal from './ImageModal.module.css';
import Pagination from '../pagination/Pagination';
import noteContext from '../Context/noteContext';
const ImageModal = ({ turn = false, search, data, action }) => {

    const state = useContext(noteContext);
    const btn = state.setOpen;

    const [paginatedData, setPaginatedData] = useState([]);
    const [pageNumber, setPageNumber] = useState();

    const handleSelecedImg = (value) => {
        action(value);
        btn(false);
    }

    return (
        <div className={`${imageModal.main} ${turn ? imageModal.block : imageModal.none}`}
        >
            <div className={`${imageModal.container} flex`}>
                <div className={`${imageModal.modal} `}>
                    <div className={`${imageModal.modalBtn} right_flex`}>
                        <i style={{ cursor: 'pointer', }} onClick={() => btn(false)} className="uil uil-times"></i>
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