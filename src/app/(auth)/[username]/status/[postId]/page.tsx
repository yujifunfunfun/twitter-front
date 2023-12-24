import React from "react";
import { HomeSideColumn } from "@/app/(auth)/home/HomeSideColumn";
import { PostDetail } from "@/app/(auth)/[username]/status/[postId]/PostDetail";

const Post = ({params}:{params: {postId: string}}) => {

  return (
    <>
    <PostDetail postId={params.postId} />
    <HomeSideColumn />
    </>
  );
};


export default Post;

