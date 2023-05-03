export type TFakeEvent = {
    title: string;
    image: string;
    description: string;
}

export type TFakeCategory = {
    title: string;
    icon: string;
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
        title: 'Deporte',
        icon: 'football-ball'
    },
    {
        title: 'Cocina',
        icon: 'utensils'
    },
    {
        title: 'Indumentaria',
        icon: 'tshirt'
    },
    {
        title: 'Negocios',
        icon: 'user-tie'
    },
    {
        title: 'Deporte',
        icon: 'football-ball'
    },
    {
        title: 'Musica',
        icon: 'music'
    },
    {
        title: 'Deporte',
        icon: 'football-ball'
    },
    {
        title: 'Cocina',
        icon: 'utensils'
    },
    {
        title: 'Indumentaria',
        icon: 'tshirt'
    },
    {
        title: 'Negocios',
        icon: 'user-tie'
    },
    {
        title: 'Deporte',
        icon: 'football-ball'
    },
    {
        title: 'Musica',
        icon: 'music'
    },
]

export const fakeEvents: TFakeEvent[] = [
    {
        title: 'Card 1',
        image: 'https://source.unsplash.com/random/300x300',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus voluptates nihil nisi magnam ullam unde, illum repellendus commodi earum fugiat similique neque sapiente debitis molestias amet eos error culpa?',
      },
      {
        title: 'Card 2',
        image: 'https://source.unsplash.com/random/300x300',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus voluptates nihil nisi magnam ullam unde, illum repellendus commodi earum fugiat similique neque sapiente debitis molestias amet eos error culpa?',
      },
      {
        title: 'Card 3',
        image: 'https://source.unsplash.com/random/300x300',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus voluptates nihil nisi magnam ullam unde, illum repellendus commodi earum fugiat similique neque sapiente debitis molestias amet eos error culpa?',
      },
]

export const fakeEvent: TFakeEvent = {
    title: 'Card 1',
    image: 'https://source.unsplash.com/random/300x300',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus voluptates nihil nisi magnam ullam unde, illum repellendus commodi earum fugiat similique neque sapiente debitis molestias amet eos error culpa?',
}
export const fakeImages: TFakeImages[] = [
    { id: 1, uri: 'https://source.unsplash.com/random/400x400?nature' },
    { id: 2, uri: 'https://source.unsplash.com/random/400x400?water' },
    { id: 3, uri: 'https://source.unsplash.com/random/400x400?mountain' },
    { id: 4, uri: 'https://source.unsplash.com/random/400x400?beach' },
  ];
