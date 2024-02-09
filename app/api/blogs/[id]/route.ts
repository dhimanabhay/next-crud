import { deletePosts, findPosts, updatePosts } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const id = req.url.split("blogs/")[1];
    const post = findPosts(id);

    if (!post) {
      return NextResponse.json({ message: "ERROR" }, { status: 404 });
    }
    return NextResponse.json({ message: "OK", post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "ERROR", err }, { status: 500 });
  }
};

export const POST = async (req: Request) => {
  console.log("POST Request from id");
};

export const PUT = async (req: Request) => {
  try {
    const title: string = "Random post 1";
    const description: string = "random post description 1";
    const id = req.url.split("blogs/")[1];
    updatePosts(id, title, description);
    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "ERROR", err }, { status: 500 });
  }
};

export const DELETE = async (req: Request) => {
    try {
        const id = req.url.split("blogs/")[1];
        deletePosts(id);
        return NextResponse.json({ message: "OK" }, { status: 200 });
      } catch (err) {
        return NextResponse.json({ message: "ERROR", err }, { status: 500 });
      }
};
