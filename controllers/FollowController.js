import asyncHandler from 'express-async-handler';
import prisma from '../prisma/client.js';

// get all follow data 
export const getAllFollows = asyncHandler(async(req,res)=>{
    const data = await prisma.follow.findMany();
    res.status(200).json(data);
})
// export all controllers

export const createFollow = asyncHandler(async(req,res)=>{
    const { follower, following } = req.body;

    // validation

    if(follower == following){
        return res.status(400).json({message:"You can't follow yourself"});
    }

    // send data to database
    const data = await prisma.follow.create({
        data: {
            followerId : follower,
            followingId : following
        }
    })
    res.status(201).json(data);
})