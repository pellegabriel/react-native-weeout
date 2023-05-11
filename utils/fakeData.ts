export type TFakeEvent = {
    title: string;
    image: string;
    startDate: string;
    location: string;
    description: string;
    id: '0123'
}

export type TFakeCategory = {
    title: string;
    icon: string;
    id: number
}

export type TFakeProfile = {
    id: string;
    name: string;
    date: string;
    image: string;
    email: string;
    phone: string;
}

export type TFakeImages = {
 id: number;
 uri: string 
}

export const fakeProfile: TFakeProfile = 
{
    id: '1',
    name: 'John Doe',
    date: '2022-04-15',
    image: 'https://source.unsplash.com/random/300x301',
    email: 'email@gmail.com',
    phone: '123456'
}


export const fakeProfiles: TFakeProfile[] = [
    {
        id: '1',
        name: 'John Doe',
        date: '2022-04-15',
        image: 'https://source.unsplash.com/random/300x301',
        email: 'email@gmail.com',
        phone: '123456'
      },
      {
        id: '2',
        name: 'Jane Smith',
        date: '2022-04-16',
        image: 'https://source.unsplash.com/random/300x301',
        email: 'email@gmail.com',
        phone: '123456'
      },
      {
        id: '3',
        name: 'Bob Johnson',
        date: '2022-04-17',
        image: 'https://source.unsplash.com/random/300x301',
        email: 'email@gmail.com',
        phone: '123456'
      },
]


export const fakeCategories: TFakeCategory[] = [
    {
        id: 0,
        title: 'Deporte',
        icon: 'football-ball'
    },
    {
        id: 1,
        title: 'Cocina',
        icon: 'utensils'
    },
    {
        id: 2,
        title: 'Indumentaria',
        icon: 'tshirt'
    },
    {
        id: 3,
        title: 'Negocios',
        icon: 'user-tie'
    },
    {
        id: 4,
        title: 'Deporte',
        icon: 'football-ball'
    },
    {
        id: 5,
        title: 'Musica',
        icon: 'music'
    },
    {
        id: 6,
        title: 'Deporte',
        icon: 'football-ball'
    },
    {
        id: 7,
        title: 'Cocina',
        icon: 'utensils'
    },
    {
        id: 8,
        title: 'Indumentaria',
        icon: 'tshirt'
    },
    {
        id: 9,
        title: 'Negocios',
        icon: 'user-tie'
    },
    {
        id: 10,
        title: 'Deporte',
        icon: 'football-ball'
    },
    {
        id: 11,
        title: 'Musica',
        icon: 'music'
    },
]

export const fakeEvents: TFakeEvent[] = [
    {
        title: 'Card 1',
        startDate: '11-03-2024',
        location: 'Junin, Buenos Aires',
        image: 'https://source.unsplash.com/random/300x300',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus voluptates nihil nisi magnam ullam unde, illum repellendus commodi earum fugiat similique neque sapiente debitis molestias amet eos error culpa?',
      },
      {
        title: 'Card 2',
        startDate: '27-08-2024',
        location: 'Palermo, Buenos Aires',
        image: 'https://source.unsplash.com/random/300x300',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus voluptates nihil nisi magnam ullam unde, illum repellendus commodi earum fugiat similique neque sapiente debitis molestias amet eos error culpa?',
      },
      {
        title: 'Card 3',
        startDate: '01-123-2024',
        location: 'La Plata, Buenos Aires.',
        image: 'https://source.unsplash.com/random/300x300',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus voluptates nihil nisi magnam ullam unde, illum repellendus commodi earum fugiat similique neque sapiente debitis molestias amet eos error culpa?',
      },
]

export const fakeEvent: TFakeEvent = {
    title: 'Card 1',
    startDate: '27-08-2024',
    location: 'Palermo, Buenos Aires',
    image: 'https://source.unsplash.com/random/300x300',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus voluptates nihil nisi magnam ullam unde, illum repellendus commodi earum fugiat similique neque sapiente debitis molestias amet eos error culpa?',
}
export const fakeImages: TFakeImages[] = [
    { id: 0, uri: 'https://source.unsplash.com/random/400x400?nature' },
    { id: 1, uri: 'https://source.unsplash.com/random/400x400?nature' },
    { id: 2, uri: 'https://source.unsplash.com/random/400x400?water' },
    { id: 3, uri: 'https://source.unsplash.com/random/400x400?mountain' },
    { id: 4, uri: 'https://source.unsplash.com/random/400x400?beach' },
    { id: 5, uri: 'https://source.unsplash.com/random/400x400?nature' },
    { id: 6, uri: 'https://source.unsplash.com/random/400x400?water' },
  ];
