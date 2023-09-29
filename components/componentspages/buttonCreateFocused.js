import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

const FocusedButton = styled.div`
    width: 55px;
    height: 55px;
    position: relative;
    border-radius: 15px;
    border: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(90deg, #8C52FF 0%, #FF5757 100%);
`;

const Text = styled.p`
    font-size: 11px;
    text-align: center;
    color: white;
    margin-top: 22px;
`;

const ButtonCreateFocused = () => {
    return (
        <FocusedButton>
            <AiOutlinePlus size={50} color='transparent'/>
            <AiOutlinePlus size={25} color='white' />
            <Text>Criar</Text>
        </FocusedButton>
    );
}

export default ButtonCreateFocused;
