export type BlogType = {
    id: number,
    title: string,
    description: string,
    date: string,
    content: string
}

export const blogs: BlogType[] = [
    {
        id: 1,
        title: 'My First Blog',
        description: 'This is my first blog.',
        date: '2022-01-01',
        content: 'This is my first blog.'
    },
    {
        id: 2,
        title: 'My Second Blog',
        description: 'This is my second blog.',
        date: '2022-01-02',
        content: 'This is my second blog.'
    },
    {
        id: 3,
        title: 'My Third Blog',
        description: 'This is my third blog.',
        date: '2022-01-03',
        content: 'This is my third blog.'
    },
    {
        id: 4,
        title: 'My Fourth Blog',
        description: 'This is my fourth blog.',
        date: '2022-01-04',
        content: 'This is my fourth blog.'
    }
]