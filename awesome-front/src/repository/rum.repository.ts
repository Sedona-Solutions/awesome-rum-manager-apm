import type {Rum} from "../models/rum";
import {PUBLIC_API_BASE_PATH} from "$env/static/public";
const RUM_PATH = `${PUBLIC_API_BASE_PATH}/rums`;

export class RumRepository {

    async getAll(): Promise<Rum[]> {
        const response = await fetch(RUM_PATH);
        if (!response.ok) {
            console.error(`Can't retrieve rum list`, await response.text());
        }
        return response.json();
    }

    async findById(id: number): Promise<Rum> {
        const response = await fetch(`${RUM_PATH}/${id}`);
        if (!response.ok) {
            console.error(`Can't retrieve rum with id [${id}]`, await response.text());
        }
        return response.json();
    }

    async deleteById(id: number): Promise<void> {
        const response = await fetch(`${RUM_PATH}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            console.error(`Can't delete rum with id [${id}]`, await response.text());
        }
    }

    async create(rum: Rum): Promise<Rum> {
        const response = await fetch(`${RUM_PATH}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rum)
        });
        if (!response.ok) {
            console.error(`Can't retrieve rum`, rum);
        }
        return response.json();
    }

    async edit(rum: Rum): Promise<Rum> {
        const response = await fetch(`${RUM_PATH}/${rum.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rum)
        });
        if (!response.ok) {
            console.error(`Can't edit rum with id [${rum.id}]`, await response.text(), {rum});
        }
        return response.json();
    }
}
