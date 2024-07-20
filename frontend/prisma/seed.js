// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.create({
        data: {
            userId: "newuser",
            email: 'mohithingorani2@gmail.com',
            name: 'Mohit',
            residences: {
                create: {
                    residenceId: 'residence5',
                    name: 'Residence 1',
                    rooms: {
                        create: [
                            {
                                roomId: 'room43',
                                name: 'Living Room',
                                appliances: {
                                    create: [
                                        {
                                            applianceId: 'light1',
                                            name: '💡 Light',
                                            type: 'light',
                                            status: 'off',
                                            attributes: { brightness: 50 },
                                        },
                                        {
                                            applianceId: 'fan1',
                                            name: '🌀 Fan',
                                            type: 'fan',
                                            status: 'off',
                                            attributes: { speed: 3 },
                                        },
                                        {
                                            applianceId: 'tv1',
                                            name: '📺 TV',
                                            type: 'tv',
                                            status: 'off',
                                            attributes: { volume: 15 },
                                        },
                                    ],
                                },
                            },
                            {
                                roomId: 'room444',
                                name: 'Bedroom',
                                appliances: {
                                    create: [
                                        {
                                            applianceId: 'light2',
                                            name: '💡 Night Light',
                                            type: 'light',
                                            status: 'on',
                                            attributes: { brightness: 20 },
                                        },
                                        {
                                            applianceId: 'ac1',
                                            name: '❄️ AC',
                                            type: 'other',
                                            status: 'off',
                                            attributes: { temperature: 24 },
                                        },
                                        {
                                            applianceId: 'heater1',
                                            name: '🔥 Heater',
                                            type: 'heater',
                                            status: 'off',
                                            attributes: { temperature: 22 },
                                        },
                                    ],
                                },
                            },
                            {
                                roomId: 'room5343',
                                name: 'Kitchen',
                                appliances: {
                                    create: [
                                        {
                                            applianceId: 'oven1',
                                            name: '🍳 Oven',
                                            type: 'oven',
                                            status: 'off',
                                            attributes: { temperature: 180 },
                                        },
                                        {
                                            applianceId: 'fridge1',
                                            name: '🧊 Fridge',
                                            type: 'other',
                                            status: 'on',
                                            attributes: { temperature: 4 },
                                        },
                                        {
                                            applianceId: 'microwave1',
                                            name: '🌊 Microwave',
                                            type: 'microwave',
                                            status: 'off',
                                            attributes: { power: 800 },
                                        },
                                    ],
                                },
                            },
                            {
                                roomId: 'room345',
                                name: 'Bathroom',
                                appliances: {
                                    create: [
                                        {
                                            applianceId: 'geyser1',
                                            name: '🔥 Geyser',
                                            type: 'geyser',
                                            status: 'off',
                                            attributes: { temperature: 50 },
                                        },
                                        {
                                            applianceId: 'light3',
                                            name: '💡 Bathroom Light',
                                            type: 'light',
                                            status: 'off',
                                            attributes: { brightness: 70 },
                                        },
                                    ],
                                },
                            },
                            {
                                roomId: 'room5',
                                name: 'Garage',
                                appliances: {
                                    create: [
                                        {
                                            applianceId: 'door1',
                                            name: '🚪 Garage Door',
                                            type: 'door',
                                            status: 'off',
                                            attributes: { autoLock: true },
                                        },
                                        {
                                            applianceId: 'light4',
                                            name: '💡 Garage Light',
                                            type: 'light',
                                            status: 'off',
                                            attributes: { brightness: 60 },
                                        },
                                    ],
                                },
                            },
                            {
                                roomId: 'room6',
                                name: 'Garden',
                                appliances: {
                                    create: [
                                        {
                                            applianceId: 'sprinkler1',
                                            name: '🚿 Sprinkler',
                                            type: 'sprinkler',
                                            status: 'off',
                                            attributes: { duration: 30 },
                                        },
                                        {
                                            applianceId: 'light5',
                                            name: '🌳 Garden Light',
                                            type: 'light',
                                            status: 'on',
                                            attributes: { brightness: 40 },
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
            },
        },
    });

    console.log({ user });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
