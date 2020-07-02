import { Prisma } from 'prisma-binding';

const prisma = new Prisma({
    typeDefs:'src/generated/prisma.graphql',
    endpoint:'http://localhost:4466',
})

export { prisma as default }

// const createPostForUser = async (authorId,data) => {

//     const userExists = await prisma.exists.User({id:authorId});

//     if(!userExists){
//         throw new Error('User does not exist');
//     }

//     const post = await prisma.mutation.createPost({
//         data:{
//             ...data,
//             author:{
//                 connect:{
//                     id:authorId
//                 }
//             }
//         }
//     }, '{author {id name email posts {id title published }}}')

//     return post.author
// }

// // createPostForUser("ckb9potq5003a0975soxuo8xf", {
// //     title:'Best rts game ever',
// //     body: 'Age of Empires',
// //     published: true
// // }).then((user)=>{
// //     console.log(JSON.stringify(user, undefined, 2));
// // }).catch((error)=>{
// //     console.log(error);
// // })



// const updatePostForUser = async (postId, data) => {

//     const postExists = await prisma.exists.Post({id:postId});

//     if(!postExists){
//         throw new Error('Post does not exist');
//     }

//     const updatedPost = await prisma.mutation.updatePost({
//         data:{
//             ...data
//         },
//         where:{
//             id: postId
//         }
//     }, '{ author { id name email posts {id title published}} }')

//     return updatedPost.author;
// }

// updatePostForUser("ckb9ptzje003k0w", {published:false}).then((data)=>{
//     console.log(JSON.stringify(data, undefined, 2));
// }).catch((error)=>{
//     console.log(error.message);
// })
