const express= require('express');
const {createPost,viewPost,readOnePost} = require('./controllers/posts');
const {createUser,viewUser,readOne,deleteUser,updateUser} = require('./controllers/user');
const {connectDb}=require('./models/index')
const app = express();
app.use(express.json());
app.post('/api/users/newuser',createUser);
app.get('/api/users/all',viewUser);
app.get('/api/users/:id',readOne);
app.post('/api/posts/newpost',createPost);
app.get('/api/post/all',viewPost);
app.get('/api/post/:id',readOnePost);
app.delete('/api/users/:id',deleteUser);
app.patch('/api/users/:id',updateUser);
connectDb();
app.listen(8070,()=>console.log('listening on port'));