import { MDXRemote } from "next-mdx-remote/rsc";

export default function ContentBody({ children }: { children: string }) {
  return (
    <article className="prose dark:prose-invert mx-auto">
      <MDXRemote
        source={children}
        options={{
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
          },
        }}
      />
    </article>
  );
}
