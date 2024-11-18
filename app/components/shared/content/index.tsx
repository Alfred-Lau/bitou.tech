import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Image from "next/image";

const getId = (children: any) => {
  if (typeof children === "string") {
    return children
      .split(" ")
      .join("-")
      .replace(/[^\w\s]/gi, "")
      .toLowerCase();
  }
  return "";
};

const components = {
  h2: ({ children, ...rest }: any) => {
    const id = getId(children);
    return (
      <h2
        id={id}
        className="text-3xl font-extrabold my-6 text-gray-800"
        {...rest}
      >
        {children}
      </h2>
    );
  },
  h3: ({ children, ...rest }: any) => {
    const id = getId(children);
    return (
      <h3 id={id} className="text-2xl font-bold my-5 text-gray-700" {...rest}>
        {children}
      </h3>
    );
  },
  table: (props: any) => (
    <figure className="table-wrapper my-8 shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full bg-white border-collapse" {...props} />
    </figure>
  ),
  pre: (props: any) => (
    <pre
      className="bg-gray-200 p-5 rounded-lg overflow-x-auto shadow-inner"
      {...props}
    >
      {props.children}
    </pre>
  ),
  img: (props: any) => {
    const { src, alt } = props;
    return (
      <Image
        className="my-12 xl:my-11 md:my-10 sm:my-9 rounded-xl shadow-xl"
        src={src}
        width={842}
        height={562}
        quality={100}
        alt={alt}
      />
    );
  },
  blockquote: (props: any) => {
    return (
      <blockquote
        className="border-l-4 border-blue-300 pl-5 italic my-5 text-gray-600"
        {...props}
      >
        {props.children}
      </blockquote>
    );
  },
  ul: (props: any) => (
    <ul className="list-disc list-inside my-5 pl-5 text-gray-700" {...props}>
      {props.children}
    </ul>
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside my-5 pl-5 text-gray-700" {...props}>
      {props.children}
    </ol>
  ),
  TutorialCardsWrapper: ({ children }: any) => (
    <ul className="not-prose my-12 grid list-none auto-rows-[268px] grid-cols-3 gap-6 !pl-0 xl:my-11 lg:gap-7 md:my-10 md:gap-6 sm:my-9 sm:auto-rows-[142px] sm:grid-cols-1 sm:gap-5">
      {children}
    </ul>
  ),
};

export default function Content(props) {
  return (
    <div className="prose max-w-none mx-auto px-4 sm:px-6 lg:px-8">
      <MDXRemote
        source={props?.content}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [
              // Adds support for GitHub Flavored Markdown
              remarkGfm,
            ],
          },
        }}
      />
    </div>
  );
}
