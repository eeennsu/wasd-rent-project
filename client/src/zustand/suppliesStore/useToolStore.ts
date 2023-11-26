import { devtools } from 'zustand/middleware';
import { IToolStore } from './types';
import { createWithEqualityFn } from 'zustand/traditional';

const useToolStore = createWithEqualityFn<IToolStore>()(
    devtools(
        (set) => ({
            // VRsData: [],
            // setVRsData: (VRsData) => set(() => ({ VRsData }), false, 'SET_VRS_DATA'),

            // tabletsData: [],
            // setTabletsData: (tabletsData) => set(() => ({ tabletsData }), false, 'SET_TABLETS_DATA'),

            // lectureRoomsData: [],
            // setLectureRoomsData: (lectureRoomsData) => set(() => ({ lectureRoomsData }), false, 'SET_LECTURE_ROOMS_DATA'),
        
            // resetAllDatas: () => set({ VRsData: [], tabletsData: [], lectureRoomsData: [] }, false, 'DELETE_ALL_DATAS'),

            // paginatedDatas: [],
            // setPaginatedDatas: (paginatedDatas) => set({ paginatedDatas }, false, 'SET_PAGINATED_DATAS'),
            // resetPaginatedDatas: () => set(() => ({ paginatedDatas: [] }), false, 'RESET_PAGINATED_DATAS')

            tool: null,
            setTool: (tool) => set(() => ({ tool })),

            toolImg: null,
            setToolImg: (img) => set(() => ({ toolImg: img })),

            curPage: 1,
            setCurPage: (curPage) => set(() => ({ curPage })),

            totalPage: 1,
            setTotalPage: (totalPage) => set(() => ({ totalPage })),
        })
    )
);

export default useToolStore;