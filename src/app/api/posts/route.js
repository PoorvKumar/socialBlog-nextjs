import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET=async (req)=>
{
    const { searchParams }=new URL(req.url);
    // console.log(searchParams);

    const POSTS_PER_PAGE=4;
    const page=parseInt(searchParams.get("page")) || 1;
    const cat=searchParams.get("cat");

    let skip=POSTS_PER_PAGE*(page-1);

    const query={
        take: POSTS_PER_PAGE,
        skip: skip,
        where: 
        {
            ...(cat && { catSlug: cat })
        }
    };

    try
    {
        const [posts,count]=await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({
                where: query.where
            })
        ])

        // console.log(posts);
        return new NextResponse(JSON.stringify({posts,count},{ status: 200 }));
    }
    catch(err)
    {
        console.log(err);
        return new NextResponse(JSON.stringify({message: "Something went wrong...GET post"},{ status: 500 }));
    }
}