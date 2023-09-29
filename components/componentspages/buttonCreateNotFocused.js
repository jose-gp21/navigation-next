import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

const NotFocusedButton = styled.div`
    background-color: black;
    width: 55px;
    height: 55px;
    position: relative;
    border-radius: 15px;
    border: 2px solid gray;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const IconWrapper = styled(AiOutlinePlus)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
`;

const Text = styled.p`
    font-size: 11px;
    text-align: center;
    color: gray;
    margin-top: 22px;
`;

const ButtonCreateNotFocused = () => {
    return (
        <NotFocusedButton>
            <IconWrapper size={50} color='transparent'/>
            <IconWrapper size={25} color='white' />
            <Text>Criar</Text>
        </NotFocusedButton>
    );
}

export default ButtonCreateNotFocused;
