import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';


const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                        author="Leonardo Ferreira"
                        date="30/10/2020"
                        content="Hoje é o meu aniversário!"
                    />
                ))}

                <ChannelMessage
                    author="Felicio Ferreira"
                    date="30/10/2020"
                    content={
                        <>
                            <Mention>@Leonardo Ferreira</Mention>, me carrega no lol e valorant de novo pf?
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
    </Container>
}; 

export default ChannelData;