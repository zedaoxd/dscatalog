import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { BASE_URL } from 'utils/requests';

const findAllResponse = {
  content: [
    {
      id: 3,
      name: 'Macbook Pro',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: 1250.0,
      imgUrl:
        'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/3-big.jpg',
      date: '2020-07-14T10:00:00Z',
      categories: [
        {
          id: 3,
          name: 'Computadores',
        },
      ],
    },
    {
      id: 4,
      name: 'PC Gamer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: 1200.0,
      imgUrl:
        'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/4-big.jpg',
      date: '2020-07-14T10:00:00Z',
      categories: [
        {
          id: 3,
          name: 'Computadores',
        },
      ],
    },
    {
      id: 8,
      name: 'PC Gamer Alfa',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: 1850.0,
      imgUrl:
        'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/8-big.jpg',
      date: '2020-07-14T10:00:00Z',
      categories: [
        {
          id: 3,
          name: 'Computadores',
        },
      ],
    },
    {
      id: 24,
      name: 'PC Gamer Boo',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: 2350.0,
      imgUrl:
        'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/24-big.jpg',
      date: '2020-07-14T10:00:00Z',
      categories: [
        {
          id: 3,
          name: 'Computadores',
        },
      ],
    },
    {
      id: 12,
      name: 'PC Gamer Card',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: 1850.0,
      imgUrl:
        'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/12-big.jpg',
      date: '2020-07-14T10:00:00Z',
      categories: [
        {
          id: 3,
          name: 'Computadores',
        },
      ],
    },
    {
      id: 22,
      name: 'PC Gamer Er',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: 1850.0,
      imgUrl:
        'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/22-big.jpg',
      date: '2020-07-14T10:00:00Z',
      categories: [
        {
          id: 3,
          name: 'Computadores',
        },
      ],
    },
    {
      id: 6,
      name: 'PC Gamer Ex',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: 1350.0,
      imgUrl:
        'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/6-big.jpg',
      date: '2020-07-14T10:00:00Z',
      categories: [
        {
          id: 3,
          name: 'Computadores',
        },
      ],
    },
    {
      id: 19,
      name: 'PC Gamer Ez',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: 1750.0,
      imgUrl:
        'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/19-big.jpg',
      date: '2020-07-14T10:00:00Z',
      categories: [
        {
          id: 3,
          name: 'Computadores',
        },
      ],
    },
    {
      id: 25,
      name: 'PC Gamer Foo',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: 4170.0,
      imgUrl:
        'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/25-big.jpg',
      date: '2020-07-14T10:00:00Z',
      categories: [
        {
          id: 3,
          name: 'Computadores',
        },
      ],
    },
    {
      id: 14,
      name: 'PC Gamer Hera',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: 2250.0,
      imgUrl:
        'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/14-big.jpg',
      date: '2020-07-14T10:00:00Z',
      categories: [
        {
          id: 3,
          name: 'Computadores',
        },
      ],
    },
    {
      id: 18,
      name: 'PC Gamer Hot',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: 1450.0,
      imgUrl:
        'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/18-big.jpg',
      date: '2020-07-14T10:00:00Z',
      categories: [
        {
          id: 3,
          name: 'Computadores',
        },
      ],
    },
    {
      id: 16,
      name: 'PC Gamer Max',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: 2340.0,
      imgUrl:
        'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/16-big.jpg',
      date: '2020-07-14T10:00:00Z',
      categories: [
        {
          id: 3,
          name: 'Computadores',
        },
      ],
    },
  ],
  pageable: {
    sort: {
      empty: false,
      sorted: true,
      unsorted: false,
    },
    offset: 0,
    pageNumber: 0,
    pageSize: 12,
    paged: true,
    unpaged: false,
  },
  totalPages: 3,
  totalElements: 25,
  last: false,
  size: 12,
  number: 0,
  sort: {
    empty: false,
    sorted: true,
    unsorted: false,
  },
  numberOfElements: 12,
  first: true,
  empty: false,
};

export const server = setupServer(
  rest.get(`${BASE_URL}/products`, (req, res, ctx) => {
    return ctx.status(200), res(ctx.json(findAllResponse));
  })
);
