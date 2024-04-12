import prismaClient from "../../infra/database/prismaclient";
import { kafka } from "../../infra/provider/kafka";
import { KafkaSendMessage } from "../../infra/provider/kafka/producer";

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

        const kafkaProducer = new KafkaSendMessage();
        await kafkaProducer.execute('CUSTOMER_CREATED', customerCreated);
        return customerCreated;
    }
}