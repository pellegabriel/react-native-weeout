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
        title: 'Caminata saludable',
        image: 'https://secure.meetupstatic.com/photos/event/e/6/0/8/600_504898888.webp?w=300',
        description: '📍 ¿Dónde?: Reserva Ecológica de Puerto Madero▶👉 Nos encontramos, todos los domingos, en los bancos de la estatua de Lola Mora.',
      },
      {
        title: 'Yoga class in English in Palermo',
        image: 'https://secure.meetupstatic.com/photos/event/3/d/9/e/600_511695774.webp?w=750',
        description: 'This is a Yoga and Meditation class I give in Palermo, Buenos Aires. The class is in English.It`s a beginner/intermediate level so If you have little experience in yoga you are also very welcome to join!',
      },
      {
        title: 'Meditacion Sahaja Yoga gratuita en español online',
        image: 'https://source.unsplash.com/random/300x300',
        description: 'La meditación Sahaja Yoga implica el despertar de la energía interna a través de pasos simples y naturales, produciendo beneficios tangibles de salud y reducción del estrés.',
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
