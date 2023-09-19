import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

//GET posts by popularity
export const GET=async (req)=>
{
    try
    {
        const posts=await prisma.post.findMany({
            take: 4,
            orderBy: { views: 'desc' },
            include: { user: true }
        });

        return new NextResponse(JSON.stringify(posts,{ status: 200 }));
    }
    catch(err)
    {
        console.log(err);
        return new NextResponse(JSON.stringify({message: "Something went wromg...popular post"},{ status: 500 }));
    }
}