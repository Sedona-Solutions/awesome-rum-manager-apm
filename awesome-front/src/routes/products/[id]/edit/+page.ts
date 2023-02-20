import type {PageLoad} from "./$types";
import {error} from "@sveltejs/kit";
import {RumRepository} from "@awesome/repository/rum.repository";

export const load: PageLoad = async ({params}) => {
    const rumRepository = new RumRepository();
    if (params && Number(params.id)) {
        const rum = await rumRepository.findById(+params.id);
        return {rum}
    }

    throw error(404, 'Not found');
};
