export type Stories = {
    stories: Story[]
}

export type Story = {
    id: number,
    name: string,
    count: number,
    people: number,
    tags: string,
    createdAt: string,
    updatedAt: string,
}
