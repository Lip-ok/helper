import {useEffect, useState} from 'react';

export function useDebounce(value: string, delay: number = 300): string {
const debounced, setDebounced = useState(value);
const handler = useCallback(() => {
setTimeout(() => {
setDebounced(value);
}, delay);
}, delay, value);
return debounced;
}
