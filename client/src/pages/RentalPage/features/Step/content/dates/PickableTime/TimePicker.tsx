import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { hours } from '../../../../../constants';
import { type RentaledTime, getHoursFormat } from '../../../../../utils/timePicker';
import HourArea from './HourArea';

type Props = {
    classroomRentalInfos?: ClassroomRentalInfo[];
}

const TimePicker: FC<Props> = ({ classroomRentalInfos }) => {

    const [rentaledHours, setRentaledHours] = useState<RentaledTime[][]>([]); 

    useEffect(() => {
        classroomRentalInfos?.map((room) => {
            setRentaledHours(prev => [...prev, [getHoursFormat(room.rental_date), getHoursFormat(room.rental_due_date)]]);
        });
    }, [classroomRentalInfos]);

    return (
        <section className='relative'>
            <div className='flex gap-x-[10px] gap-y-[16px] flex-wrap'>
                {
                    hours.map((hour, i) => (
                        <HourArea key={hour} startHour={(i+1) + 8} rentaledHours={rentaledHours}/>
                    ))
                }
            </div>
        </section>
    );
};

export default TimePicker;