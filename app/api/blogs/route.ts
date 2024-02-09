import { addPosts, getPosts } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const posts = getPosts();
    return NextResponse.json({ message: "OK", posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error ", err }.err, { status: 500 });
  }
};

export const POST = async (req: Request, res: Response) => {
  const title: string = "Random post 1";
  const description: string = "random post description 1";
  const title1: string = "Random post 2";
  const description1: string = "random post description 2";
  //const {title, description} = await req.json;

  try {
    const post = { title, description, date: new Date(), id: Date.now().toString() };
    const post1 = { title: title1, description: description1, date: new Date(), id: Date.now().toString() };
    addPosts(post);
    addPosts(post1);
    return NextResponse.json({ message: "OK", post }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error ", err }.err, { status: 500 });
  }
};
