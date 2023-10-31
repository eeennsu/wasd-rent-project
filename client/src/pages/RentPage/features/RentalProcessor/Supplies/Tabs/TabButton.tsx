import type { FC, PropsWithChildren } from 'react';
import { useSearchStore, useSuppliesStore, useTabsStore } from '../../../../../../zustand';
import { initModalStep } from '../../../../utils/modal';
import useModalStore from '../../../../../../zustand/suppliesStore/useModalStore';

type Props = {
    idx: number;
    isCurTab: boolean;
}

const TabButton: FC<PropsWithChildren<Props>> = ({ children, idx, isCurTab }) => {

    const { setActiveTab } = useTabsStore();
    const { setSearchTerm } = useSearchStore();
    const { resetAllDatas, resetPaginatedDatas } = useSuppliesStore();
    const { setModalStep } = useModalStore();

    const handleSetActiveTab = () => {
        setSearchTerm('');
        resetAllDatas();
        resetPaginatedDatas();
        initModalStep(idx as ActiveTab, setModalStep);
        setActiveTab(idx as ActiveTab);   
    }

    return (
        <button className={`${isCurTab ? 'bg-amber-300' : 'bg-white'} w-20 px-4 py-2 rounded-sm whitespace-nowrap`} onClick={handleSetActiveTab}>
            {children}
        </button>
    );
};

export default TabButton;