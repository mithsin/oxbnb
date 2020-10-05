const userOne = {
    userId: "user-sldkjf1wojflskdjfo11kwjelf",
    isLoggedIn: false,
    isAgent: true,
    firstName: "David",
    lastName: "Chen",
    profilePicUrl: "abc.jpg",
    currency: "USD",
    phoneNumber: "16782002020",
    email: "abc@gmail.com",
    permissions: {},
    chats: {
        chatList: ["2ljfo2ijflksjdlf"],
        chatWarningList: [
            {
                // delecte chat everytime send, and received everytime other side send.
                chatId: "12l3k4j1l23j4",
                lastMessage: "1/2/2020 13:05:02",
                text: "hello there",
            }
        ]
    },
    friendsList: [{
        subId: "kfjojfo2jfjsljdf",
        status: "pending", // accept, pending, reject
    }],
    agentDetail: {
        represent: "",
        list: ["listId-12jfosdjf1", "listId-12fsdjof1"],
        workPhoneNumber: "",
        agentLicenseId: "",
        agentProfileImg: "",
        agentLocation: {
            country: "USA",
            state: "GA"
        }
    }
}
