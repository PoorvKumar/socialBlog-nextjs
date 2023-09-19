import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET=async (req)=>
{
    const { searchParams }=new URL(req.url);
    // console.log(searchParams);

    const POSTS_PER_PAGE=3;
    const page=parseInt(searchParams.get("page")) || 1;
    const cat=searchParams.get("cat");

    let skip=POSTS_PER_PAGE*(page-1);

    const query={
        take: POSTS_PER_PAGE,
        skip: skip,
        where: 
        {
            ...(cat && { catSlug: cat })
        },
        orderBy:
        {
            createdAt: 'desc',
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

//CREATE A POST
export const POST=async (req)=>
{
    const session=await getAuthSession();
    // console.log(session.user);

    if(!session)
    {
        return new NextResponse(JSON.stringify({message: "Not Authenticated"},{ status: 401 }));
    }

    try
    {
        const body=await req.json();

        // Check if a post with the same slug already exists
        const existingPost = await prisma.post.findUnique({
            where: { slug: body.slug },
        });
    
        if (existingPost) {
            return new NextResponse(JSON.stringify({ message: "Post with the same slug already exists" }, { status: 400 }));
        }

        const post=await prisma.post.create({
            data: {...body, userEmail: session.user.email}
        });

        return new NextResponse(JSON.stringify(post,{status: 200}));
    }
    catch(err)
    {
        console.log(err);
        return new NextResponse(JSON.stringify({message: "Something went wrong...GET post"},{ status: 500 }));
    }
}