import { useStepStore, useTabsStore, useTimeStore } from '../../zustand';

const useStoreController = () => {

    const { activeTab, setActiveTab } = useTabsStore();
    const { 
        systemStep, setSystemStep, 
        text, setText,  
        selectedRoom, setSelectedRoom,
        detailTool, setDetailTool, 
        detailLectureRoom, setDetailLectureRoom,
        isModalOpen, setIsModalOpen
    } = useStepStore();
    const { rentDate, setRentDate, returnDate, setReturnDate, resetTimes } = useTimeStore();

    const handleStepInit = () => {      
        systemStep !== 'INIT' && setSystemStep('INIT');  
        activeTab !== 1 && setActiveTab(1);
        text.length >= 1 && setText('');    
    }

    const handleDateInit = () => {             
        rentDate && setRentDate(null);
        returnDate && setReturnDate(null);
    }

    const handleDataInit = () => {
        selectedRoom && setSelectedRoom(null);
        detailTool && setDetailTool(null);
        detailLectureRoom && setDetailLectureRoom(null);
        isModalOpen && setIsModalOpen(false);
        systemStep === 'LR_RENT' && resetTimes();
    }

    const handleAllStoreInit = () => {
        handleStepInit();
        handleDateInit();
        handleDataInit();
    }

    return {
        handleStepInit,
        handleDateInit,
        handleAllStoreInit
    };
}

export default useStoreController;