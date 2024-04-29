import KatieZaferes from "../public/assets/katie-zaferes.png"
import WeddingPhoto from "../public/assets/wedding-photography.png"
import MountainBike from "../public/assets/mountain-bike.png"
import Bobby from "../public/assets/Bobby_Fischer_1972.jpg"
import Wellcode from "../public/assets/Petru.png"

export default [
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: KatieZaferes,
        stats: {
            rating: 4.5,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        coverImg: WeddingPhoto,
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "Online",
        openSpots: 27,
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: MountainBike,
        stats: {
            rating: 4.2,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 3,
    },
    {
        id: 4,
        title: "Learn Chess with Bobby Fischer",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 86,
        coverImg: Bobby,
        stats: {
            rating: 4.5,
            reviewCount: 13
        },
        location: "USA",
        openSpots: 4,
    },
    {
        id: 5,
        title: "Learn Programming Wellcode",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 1000,
        coverImg: Wellcode,
        stats: {
            rating: 4.3,
            reviewCount: 9
        },
        location: "Romania",
        openSpots: 1,
    }
]