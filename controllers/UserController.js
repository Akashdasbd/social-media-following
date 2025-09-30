import asyncHandler from 'express-async-handler';
import prisma from '../prisma/client.js';
/**
 * Get all users data
 * @route GET /api/v1/user
 * @access public
 * @return {Array} List of users
 * @example
 */
export const getAllUsers = asyncHandler(async(req, res) => {
    const data = await prisma.user.findMany();
    res.status(200).json(data);
})

export const createUser = asyncHandler(async(req,res)=>{
    const data = await prisma.user.create({data:req.body});
    res.status(201).json(data);
})

export const getUserProfile = asyncHandler(async(req,res)=>{
    const {id}  =req.params;
    const data = await prisma.user.findUnique({
        where:{id},
        include:{
            followers: {include:{following:true}},
            followings: {include:{follower:true}}
        }
    })
    res.status(200).json(data);
})