import { useDeferredValue, type ChangeEvent, type FC, type FormEvent, type KeyboardEvent, useState } from 'react';
import { useTabsStore, useSearchStore, useToolStore } from '../../../../../zustand';
import { useEffect } from 'react';

const Search: FC = () => {

    const { activeTab } = useTabsStore();

    const {         
        // VRsData, setVRsData,
        // tabletsData, setTabletsData,
        // lectureRoomsData, setLectureRoomsData
    } = useToolStore();    

    const { searchTerm, setSearchTerm } = useSearchStore();

    const defferedSearchTerm = useDeferredValue(searchTerm);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }   
    
    // useEffect(() => {
    //     switch(activeTab) {
    //         case 0: 
    //             if (VRsData?.length >= 1) {
    //                 const searched = VRsData.filter((vr) => vr.SKU.toString().includes(defferedSearchTerm));
    //                 setSearchedVRs(searched);
    //             }

    //             break;
                
    //         case 1:
    //             if (tabletsData?.length >= 1) {
    //                 const searched = tabletsData.filter((tablet) => tablet.SKU.toString().includes(defferedSearchTerm));
    //                 setSearchedTablets(searched);
    //             }
                
    //             break;

    //         case 2: 
    //             if (lectureRoomsData?.length >= 1) {
    //                 const searched = lectureRoomsData.filter((room) => room.name.includes(defferedSearchTerm));
    //                 setSearchedLectureRooms(searched);
    //             }
              
    //             break;

    //         default:
    //             throw new Error(`${activeTab} is not defined.`);
    //     }

    //     if (defferedSearchTerm?.length === 0) {
    //         switch(activeTab) {             
    //             case 0:
    //                 setSearchedVRs(null);
    //                 break;

    //             case 1:
    //                 setSearchedTablets(null);
    //                 break;
                
    //             case 2:
    //                 setSearchedLectureRooms(null);
    //                 break;

    //             default:
    //                 throw new Error(`${activeTab} is not defined.`);          
    //         }
    //     }        

    // }, [defferedSearchTerm, activeTab, setVRsData, setTabletsData, setLectureRoomsData]);

    const placeholder = activeTab === 0 ? '검색어를 입력해 주세요' : (activeTab === 1 || activeTab === 2) ? '기자재를 입력해주세요' : '강의실 이름을 입력해주세요';

    return (
        <div className='flex w-full border-4 border-01 md:w-auto'>
            <input className='flex-1 px-3 py-1 bg-white border-black rounded-sm outline-none w-52 placeholder:text-sm placeholder:text-gray-300' value={searchTerm} onChange={handleChange} 
            placeholder={placeholder}/>
            <button type='submit' className='px-3.5 md:py-2 text-white md:px-7 bg-01 whitespace-nowrap text-sm md:text-base'>
                검색
            </button>          
        </div>
    );
};

export default Search;