import prismaClient from "../../infra/database/prismaclient";

type CreateClientRequest = {
    nome: string;
    password: string;
    phone: string;
    email: string;
}

export class CreateClientUseCase {
    constructor() { }

    async execute(data: CreateClientRequest) {

        const custumerAlreadyExists = await prismaClient.client.findFirst({
            where: { email: data.email }
        });

        if (custumerAlreadyExists) throw new Error("Customer already exists");

        const customerCreated = await prismaClient.client.create({
            data: {
                ...data,
            },
        });
        return customerCreated;
    }
}