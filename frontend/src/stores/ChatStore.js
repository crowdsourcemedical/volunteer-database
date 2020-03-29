import { Store } from "pullstate";

export const ChatStore = new Store({
  // This is just mock data. Rip out when implementing API hitting.
  chats: [
    {
      id: 1,
      messages: [
        {
          id: 1,
          userId: 2,
          text: "Well, hello there my fine friend!",
          createdAt: new Date()
        },
        {
          id: 2,
          userId: 1,
          text: "Well, hello there my fine friend!",
          createdAt: new Date()
        }
      ]
    }
  ]
});
