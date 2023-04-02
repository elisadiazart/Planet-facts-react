import { v4 } from "uuid";

export const PLANETS=[
    {
        id: v4(),
        name:'mercury',
        path:'/',
        color: '#DEF4FC'
    },
    {
        id: v4(),
        name:'venus',
        path:'/venus',
        color: '#F7CC7F'
    },
    {
        id: v4(),
        name:'earth',
        path:'/earth',
        color: '#545BFE'
    },
    {
        id: v4(),
        name:'mars',
        path:'/mars',
        color: '#FF6A45'
    },
    {
        id: v4(),
        name:'jupiter',
        path:'/jupiter',
        color: '#ECAD7A'
    },
    {
        id: v4(),
        name:'saturn',
        path:'/saturn',
        color: '#FCCB6B'
    },
    {
        id: v4(),
        name:'uranus',
        path:'/uranus',
        color: '#65F0D5'
    },
    {
        id: v4(),
        name:'neptune',
        path:'/neptune',
        color: '#497EFA'
    },
]

export const INFO ={
    mercury:{
        text:"Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
        rotationTime: '58.6 days',
        revolutionTime: '87.97 days',
        radius: '2,439.7 km',
        averageTemp: '430°c'
    },
    venus:{
        text:"Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
        rotationTime: '243 days',
        revolutionTime: '224.7 days',
        radius: '6,051.8 km',
        averageTemp: '471°c'
    },
    earth:{
        text:"Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
        rotationTime: '0.99 days',
        revolutionTime: '365.26 days',
        radius: '6,371 km',
        averageTemp: '16°c'
    },
    mars:{
        text:'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
        rotationTime: '1.03 days',
        revolutionTime: '1.88 days',
        radius: '3,389 km',
        averageTemp: '-28°c'
    },
    jupiter:{
        text:"Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
        rotationTime: '9.93 days',
        revolutionTime: '11.86 days',
        radius: '69,911 km',
        averageTemp: '-108°c'
    },
    saturn:{
        text:"Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
        rotationTime: '10.8 days',
        revolutionTime: '29.46 days',
        radius: '58,232 km',
        averageTemp: '-138°c'
    },
    uranus:{
        text:"Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
        rotationTime: '17.2 days',
        revolutionTime: '84 days',
        radius: '25,362 km',
        averageTemp: '-195°c'
    },
    neptune:{
        text:"Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
        rotationTime: '16.08 days',
        revolutionTime: '164.79 days',
        radius: '24,622 km',
        averageTemp: '-201°c'
    }
}