    import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';
    import type { RootState } from '@/state/store'; 

    export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;