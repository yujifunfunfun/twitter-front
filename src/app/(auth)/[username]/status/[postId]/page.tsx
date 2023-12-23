import React from "react";
import { HomeSideColumn } from "@/components/organisms/home/HomeSideColumn";
import { PostDetail } from "@/components/organisms/post/PostDetail";

const Post = ({params}:{params: {postId: string}}) => {

  return (
    <>
    <PostDetail postId={params.postId} />
    <HomeSideColumn />
    </>
  );
};


export default Post;

