const users = [{
    id: '1',
    name: 'Jayanth',
    email: 'Jayanth@example.com',
    age: 24,
}, {
    id: '2',
    name: 'Ramani',
    email: 'Ramani@example.com',
}, {
    id: '3',
    name: 'Bob',
    email: 'Bob@example.com',
}]

const posts = [{
    id: 'Post1',
    title: 'First Post',
    body: 'First post body',
    published: true,
    author:'1'
}, {
    id: 'Post2',
    title: 'Second Post',
    body: 'Secondc post body',
    published: false,
    author:'1'
}, {
    id: 'Post3',
    title: 'Third Post',
    body: 'THird post body',
    published: false,
    author:'2'
}]

const comments = [{
    id:'comment1',
    text:'This is first comment',
    author:'1',
    post:'Post1',
}, {
    id:'comment2',
    text:'This is second comment',
    author:'2',
    post:'Post1',
}, {
    id:'comment3',
    text:'This is third comment',
    author:'3',
    post:'Post2',
}, {
    id:'comment4',
    text:'This is fourth comment',
    author:'3',
    post:'Post3',
}]

const db = {
    users,
    posts,
    comments
}

export {db as default}