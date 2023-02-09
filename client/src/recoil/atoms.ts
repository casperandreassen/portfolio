import { atom } from 'recoil';
import { User } from '../types/types';

export const userState = atom({
    key: 'userState',
    default: null as User | null,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const localStorageEffect = (key: string) => ({setSelf, onSet}: {setSelf: any, onSet: any}) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSet((newValue: any, _: any, isReset: any) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const isLoggedIn = atom({
    key: 'loggedInState',
    default: true,
    effects: [
        localStorageEffect('loggedIn')
    ]
})