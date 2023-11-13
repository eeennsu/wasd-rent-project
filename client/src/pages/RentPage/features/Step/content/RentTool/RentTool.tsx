import type { FC, ChangeEvent } from 'react';
import { useStepStore, useTabsStore, useTimeStore } from '../../../../../../zustand';
import { getTabName } from '../../../../utils/tables';
import { Input, message } from 'antd';
import { useRef, useEffect } from 'react';
import Button from '../../../../../../components/Button';
import Template from '../../templates/Template';
import Picker from '../dates/DatePicker';
import useStepController from '../../../../../../hooks/commons/useStepController';

const { TextArea } = Input;

const RentSupply: FC = () => { 
    
    const refUserType = useRef<HTMLInputElement | null>(null);
    const refClassNum = useRef<HTMLInputElement | null>(null);
    const refUserName = useRef<HTMLInputElement | null>(null);
    
    const { activeTab } = useTabsStore();
    const { detailTool, text, setText, } = useStepStore();
    const { rentDate, returnDate } = useTimeStore();
    const { handleStepInit, handleDateInit } = useStepController();

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }

    const handleRentRequest = () => {        
        
        const valUserType = refUserType.current?.value;
        const valClassNum = refClassNum.current?.value;
        const valUserName = refUserName.current?.value;

        if (valUserType!.length <= 0 || valClassNum!.length <=0 || valUserName!.length <= 0) {
            message.warning('반출자 정보를  입력해 주세요.');
            
            return;
        }

        if (!rentDate) {
            message.warning('대여할 날짜를 지정해주세요.');
            
            return;
        }

        if (!returnDate) {
            message.warning('반납할 날짜를 지정해주세요.');
            
            return;
        }

        if (text.length <= 0) {
            message.warning('반출 사유를 입력해 주세요.');

            return;
        }

        try {
            // API 호출
            
            //
            message.success('대여가 완료되었습니다');    
        } catch (error) {
            console.log(error);
            message.error('알수 없는 에러가 발생했습니다. 괸라자에게 문의해주세요');
        } finally {
            handleBack();
        }
    }

    const handleBack = () => {
        handleStepInit();
        handleDateInit();
    }

    useEffect(() => {
        refUserType.current?.focus();
    }, []);

    return (  
        <Template className='h-full mt-2'>
             <div className='flex flex-col h-full gap-8'>    
                <div className='grid flex-1 grid-cols-3 gap-8'>
                    <div className='h-full col-span-1'> 
                        <div className='h-2/3'>
                            <img src='' alt='이미지' className='h-full bg-slate-200 rounded-sm2' />
                        </div>                 
                        <div className='flex flex-col h-1/3'>
                            <h3 className='mt-2 text-xl font-semibold'>
                                {getTabName(activeTab)}
                            </h3>
                            <p className='mt-2 overflow-auto font-semibold leading-4 text-ellipsis my-scr'> 
                                {detailTool?.tool_spec}
                                Lorem ipsum dolor sit, amet conse Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem explicabo incidunt accusantium laudantium, dolores tenetur recusandae reicien             
                                Lorem ipsum dolor sit, amet conse Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem explicabo incidunt accusantium  
                            </p>
                        </div>                                               
                    </div>
                    <div className='grid col-span-2 grid-rows-2 gap-9'>
                        <div className='flex flex-col w-full border border-01'>
                            <h4 className='py-2.5 text-lg font-semibold text-center text-black bg-02'>
                                기자재 설명
                            </h4>
                            <div className='grid grid-cols-3 w-full h-full font-semibold border-t-[1px] border-01 bg-04 place-items-center'>
                                <div className='flex items-center justify-center w-full h-full'>
                                    자산번호
                                </div>
                                <div className='flex items-center justify-center h-full w-full border-x-[1px] border-01'>
                                    품명
                                </div>
                                <div className='flex items-center justify-center w-full h-full'>
                                    규격
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col w-full border border-01'>
                            <h4 className='py-2.5 text-lg font-semibold text-center text-black bg-02'>
                                반출자 설명
                            </h4>   
                            <div className='grid grid-cols-3 w-full h-full font-semibold border-t-[1px] border-01 bg-04 text-sm'>
                                <div className='flex items-center justify-center w-full h-full'>
                                    <input className='w-full text-center outline-none placeholder:text-02/80 bg-inherit' placeholder='소속을 입력해 주세요' ref={refUserType} />
                                </div>
                                <div className=' w-full h-full flex items-center justify-cente border-x-[1px] border-01'>
                                    <input className='w-full text-center outline-none placeholder:text-02/80 bg-inherit input-classnumber' type='number' placeholder='학번을 입력해 주세요' ref={refClassNum} />
                                </div>
                                <div className='flex items-center justify-center w-full h-full'>
                                    <input className='w-full text-center outline-none placeholder:text-02/80 bg-inherit' placeholder='이름을 입력해 주세요' ref={refUserName} />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-start w-full'>
                            <Picker type='range' />
                        </div>
                    </div>
                </div>   
                <div className='mt-6 3xl:mt-2'>
                    <TextArea 
                        className='h-full p-3 border-2 rounded-none bg-04 border-01 placeholder:text-02/80'
                        style={{ resize: 'none' }}
                        rows={6}
                        placeholder='대여 사유를 기입해 주세요'
                        value={text}
                        onChange={handleTextChange}
                    />
                </div>       
                <footer className='flex justify-end gap-4 mb-6 3xl:mb-0'>
                    <Button onClick={handleBack} bgColor='02'>
                        뒤로 가기
                    </Button>
                    <Button onClick={handleRentRequest} bgColor='01'>
                        대여 하기
                    </Button>    
                </footer>      
            </div>                     
        </Template>
    );
};

export default RentSupply;