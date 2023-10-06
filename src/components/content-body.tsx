import { MDXRemote } from "next-mdx-remote/rsc";

export default function ContentBody({ children }: { children: string }) {
  return (
    <article className="prose dark:prose-invert mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
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
