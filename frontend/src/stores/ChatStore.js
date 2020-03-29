import { Store } from 'pullstate';
import { sub } from 'date-fns';

export default new Store({
  // This is just mock data. Rip out when implementing API hitting.
  chats: [
    {
      id: '2',
      messages: [
        {
          id: '2',
          userId: '1',
          text: 'Well, hello there my fine friend from 2!',
          createdAt: new Date(),
        },
        {
          id: '1',
          userId: '2',
          text: 'Well, hello there my fine friend from 2!',
          createdAt: sub(new Date(), { hours: 1 }),
        },
      ],
    },
    {
      id: '3',
      messages: [
        {
          id: '2',
          userId: '1',
          text: 'Well, hello there my fine friend from 3!',
          createdAt: new Date(),
        },
        {
          id: '1',
          userId: '3',
          text: 'Well, hello there my fine friend from 3!',
          createdAt: sub(new Date(), { hours: 1 }),
        },
      ],
    },
    {
      id: '4',
      messages: [
        {
          id: '2',
          userId: '1',
          text: 'Well, hello there my fine friend from 4!',
          createdAt: new Date(),
        },
        {
          id: '1',
          userId: '4',
          text: 'Well, hello there my fine friend from 4!',
          createdAt: sub(new Date(), { hours: 1 }),
        },
      ],
    },
  ],
});
