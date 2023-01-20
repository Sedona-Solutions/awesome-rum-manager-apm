import {writable} from 'svelte/store';
export interface Rhum {
    id: number;
    name: string;
    note: string;
}

export const rhumsMock = writable([
    {id: 1, name: 'Diplomatico', note: '***'},
    {id: 2, name: 'Captain Morgan', note: '*'}
]);
