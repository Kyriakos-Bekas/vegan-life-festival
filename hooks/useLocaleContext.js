import { LocaleContext } from '@/context/LocaleContext';
import { useContext } from 'react';

export const useLocaleContext = () => {
    const context = useContext(LocaleContext);

    if (!context)
        console.error(
            'useLocaleContext hook must be used within a LocaleContextProvider'
        );

    return context;
};
