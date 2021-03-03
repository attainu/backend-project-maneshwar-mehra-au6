import { blog } from './../../model/schema/blog';
import  mongoose  from 'mongoose';
let updateBlog={
    updateBlog:async(req,resp)=>{
        let query={}
        if(req.query.id){
            query._id=mongoose.Types.ObjectId(req.query.id)
            let blogsUpdate=await blog.findById(query)
            return resp.render("updateBlog.hbs",{
                ...(blogsUpdate._doc)
            })
        }
        else{
            return resp.redirect('/allBlogs')
        }
    },
    postupdateBlog:async(req,resp)=>{
        let id=mongoose.Types.ObjectId(req.query.id) 
        await blog.updateOne({
            _id:id
        },{
        $set :{
            ...req.body
        }
    }
    )
    return resp.redirect('/allBlogs')
    }
}

export default{updateBlog}

