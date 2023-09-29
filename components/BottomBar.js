import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { IoHome, IoSearch, IoPerson, IoHomeOutline, IoSearchSharp, IoPersonOutline, } from 'react-icons/io5';
import { SiSimpleicons } from 'react-icons/si';
import ButtonCreateFocused from '../components/componentspages/buttonCreateFocused';
import  ButtonCreateNotFocused from './componentspages/buttonCreateNotFocused'; 

const BottomBar = () => {
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);
    
    // Pega o caminho atual
    const currentPath = router.pathname;

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMobile(window.innerWidth <= 768);

            const handleResize = () => {
                setIsMobile(window.innerWidth <= 768);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            }
        }
    }, []);

    if (!isMobile) return null;

    const navItem = (path, defaultIcon, activeIcon, label) => (
        <div onClick={() => router.push(path)} className="flex flex-col items-center justify-center">
            {currentPath === path ? activeIcon : defaultIcon}
            <p className={`text-xs mt-2 ${currentPath === path ? 'text-white' : 'text-gray-400'}`}>{label}</p>
        </div>
    );

    const [isCreateFocused, setIsCreateFocused] = useState(currentPath === '/bottompages/create');

    return (
        <div className="fixed bottom-0 left-0 right-0">
            <div className="h-1 bg-gradient-to-r from-red-600 to-purple-600" />
            <div className="bg-black p-2.5 flex justify-around items-center">
                {navItem('/bottompages/home', <IoHomeOutline className="text-white" size={22} />, <IoHome className="text-white" size={22} />, 'Início')}
                {navItem('/bottompages/search', <IoSearch className="text-white" size={22} />, <IoSearchSharp className="text-white" size={22} />, 'Descubra')}
                {isCreateFocused 
                    ? <ButtonCreateFocused onClick={() => {router.push('/bottompages/create'); setIsCreateFocused(true);}} /> 
                    : <ButtonCreateNotFocused onClick={() => {router.push('/bottompages/create'); setIsCreateFocused(true);}} />
                }
                {navItem('/bottompages/cart', <IoHomeOutline className="text-white" size={22} />, <IoHome className="text-white" size={22} />, 'Compras')}
                {navItem('/bottompages/profile', <IoPersonOutline className="text-white" size={22} />, <IoPerson className="text-white" size={22} />, 'Eu')}
            </div>
        </div>
    );
}

export default BottomBar;
