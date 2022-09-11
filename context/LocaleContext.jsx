import { createContext, useReducer } from 'react';

export const LocaleContext = createContext();

const localeReducer = (state, action) => {
    switch (action.type) {
        case 'EN':
            return {
                ...state,
                locale: action.payload,
            };
        case 'GR':
            return {
                ...state,
                locale: action.payload,
            };
        default:
            return state;
    }
};

export const LocaleContextProvider = ({ children }) => {
    const [locale, dispatch] = useReducer(localeReducer, {
        locale: 'gr',
    });

    return (
        <LocaleContext.Provider value={{ ...locale, dispatch }}>
            {children}
        </LocaleContext.Provider>
    );
};
