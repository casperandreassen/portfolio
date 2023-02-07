import React from 'react';
import { User } from '../types/types';

type UserContext = {
    user: User;
    setUser: (user: User) => void;
}

const userContext = React.createContext<UserContext | null>(null)

export { userContext };