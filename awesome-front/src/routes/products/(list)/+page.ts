import {RumRepository} from "@awesome/repository/rum.repository";
import type {PageLoad} from './$types';

export const load: PageLoad = (async ({}) => {
    const rumRepository = new RumRepository();
    const rums = await rumRepository.search("");
    return {rums}

}) satisfies PageLoad;

