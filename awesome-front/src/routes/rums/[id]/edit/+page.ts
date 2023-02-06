import type {PageLoad} from "./$types";
import {error} from "@sveltejs/kit";

export const load: PageLoad = async ({params}) => {
    if (params && Number(params.id)) {
        return {
            id: params.id
        };
    }

    throw error(404, 'Not found');
};

