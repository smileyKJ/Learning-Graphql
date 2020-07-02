const Query = {
    me() {
        return {
            id: '123456',
            name: 'Jayanth',
            email: 'jayanth.22k@gmail.com',
            age: 24
        }
    },
    post() {
        return {
            id: '1234post',
            title: 'First Post',
            body: 'Graphql Post',
            published: false
        }
    },
    users(parent, args, {db}, info) {
        return !args.query ? db.users : db.users.filter((item) => item.name.toLowerCase().includes(args.query.toLowerCase()));
    },
    posts(parent, args, {db}, info) {
        return !args.query ? db.posts : db.posts.filter((post) => post.title.toLowerCase().includes(args.query.toLowerCase() || post.body.toLowerCase().includes(args.query.toLowerCase())));
    },  
    comments(parent, args, {db}, info) {
        return db.comments
    }
}

export { Query as default }