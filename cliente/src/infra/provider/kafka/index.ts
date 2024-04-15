import { Kafka } from "kafkajs";


const kafka = new Kafka({
    brokers: ['normal-coral-11745-us1-kafka.upstash.io:9092'],
    ssl: true,
    sasl: {
        mechanism: 'scram-sha-256',
        username: 'bm9ybWFsLWNvcmFsLTExNzQ1JAfZ_afmVBC_9J7q47IqEV7SdR4_qJO70xOSacM',
        password: 'MTFkMGY1ZmItZjgzNS00NmJlLTk1NGQtMmQyMjk5MjVhYjFk'
    },
});

export { kafka };