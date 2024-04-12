import { Request, Response } from "express";
import { CreateClientUseCase } from "./create-client.usecase";

export class CreateClientController {
    constructor() {

    }
    async handle(request: Request, response: Response) {
        const usecase = new CreateClientUseCase();
        try {
            const result = await usecase.execute(request.body);
            return response.json(result);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}