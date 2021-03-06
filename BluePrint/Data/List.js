const allListed = [
    {
        listId: "listId-12jfosdjf1",
        imageList: [],
        listProfileImg: "a.jpg",
        type: ["rent"],
        address: {
            street: "123 test address st",
            address2: "",
            state: "GA",
            zipCode: '30303'
        },
        rentDetail: {
            hourilyPrice: 15,
            dailyPrice: 200,
            monthlyPrice: 2000,
        },
        rating: 4,
        comments: [{
            date: "1/2/2020",
            message: "abc"
        }]
    },
    {
        listId: "listId-12fsdjof1",
        type: ["rent", "sale"],
        imageList: [],
        listProfileImg: "a.jpg",
        address: {
            street: "333 test address dr",
            address2: "",
            state: "CA",
            zipCode: '30223'
        },
        rentDetail: {
            hourilyPrice: 15,
            dailyPrice: 200,
            monthlyPrice: 2000,
            permissions: {
                shoes: false,
            }
        },
        saleDetail: {
            listDate: "1/1/2020",
            basePrice: 500000
        }
    }
]