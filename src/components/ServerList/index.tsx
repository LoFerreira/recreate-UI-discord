import React from 'react';
import { Container, Separator } from './styles';
import ServerButton from '../ServerButton';

const ServerList: React.FC = () => {
    return(
        <Container>
            <ServerButton isHome />
            <Separator />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton mentions={2} hasNotifications />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton mentions={10} hasNotifications />
            <ServerButton mentions={5}  hasNotifications/>
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton />
        </Container>
    )
};

export default ServerList;