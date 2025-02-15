import Post from "../models/post.model.js";

//Creating  of job

const createPost = async (req, res) => {
    try {
        // Validate request
        if (!req.body.content || req.body.content.trim() === "") {
            return res.status(400).json({ error: "Content is required" });
        }

        // Create and save the post
        const post = new Post({ content: req.body.content });
        await post.save();

        // Send success response
        res.status(201).json({ 
            message: "Post created successfully", 
            post 
        });
    } catch (error) {
        console.error("Error creating post:", error);

        // Send error response
        res.status(500).json({ 
            error: "Internal Server Error. Please try again later." 
        });
    }
};

const ListPost = async (req,res) => {
    try {
        const post = await Post.find({});
        res.json({success:true,message:"Post adding", post})
    } catch (error) {
        console.error("Error in Listing");
        res.json({success:false,message:"Error in Listing"})
    }
}
export { createPost,ListPost};