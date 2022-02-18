import React, {useState} from 'react';
import axios from 'axios';

const initailBlogForm = {
    blog_name: "",
    message: "",
    user_id: ""
}

function BlogPost (){
    const [blogForm, setBlogForm] = useState(initailBlogForm)
    
    const handleChange = e => {
        setBlogForm({
          ...blogForm,
          [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        axios
        .post('http://localhost:3500/api/blogs/', formValue)
        .then(res => {
            setFormValue(res.data)
            alert("Your message has been sent")
            window.location.reload(true)

        
        })
    }
}


export default BlogPost;