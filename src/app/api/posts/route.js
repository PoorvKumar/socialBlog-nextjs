import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET=async (req)=>
{
    const {searchParams}=new URL(req.url);
    const page=searchParams.get("page");
    const POSTS_PER_PAGE=4;
    

    try
    {
        const posts=await prisma.post.findMany({take: POSTS_PER_PAGE, skip: skip});
        return new NextResponse(JSON.stringify(posts,{ status: 200 }));
    }
    catch(err)
    {
        console.log(err);
        return new NextResponse(JSON.stringify({message: "Something went wrong...GET post"},{ status: 500 }));
    }
}