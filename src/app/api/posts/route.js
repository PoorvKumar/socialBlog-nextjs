import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET=async (req)=>
{
    const { searchParams }=new URL(req.url);
    // console.log(searchParams);

    const POSTS_PER_PAGE=4;
    const page=parseInt(searchParams.get("page")) || 1;

    let skip=POSTS_PER_PAGE*(page-1);

    // let skip=0;
    // if(page && /^\d+$/.test(page))
    // {
    //     skip=POSTS_PER_PAGE*(parseInt(page)-1);
    // }

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