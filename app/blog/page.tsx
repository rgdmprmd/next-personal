import React from "react";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";

import { allDocs, Doc } from "contentlayer/generated";

// const getPostMetadata = () => {
// 	const folder = "posts/";
// 	const files = fs.readdirSync(folder);
// 	const markdownPosts = files.filter((file) => file.endsWith(".mdx"));
// 	const slugs = markdownPosts.map((file) => file.replace(".mdx", ""));
// 	return slugs;
// };

const BlogPage = () => {
	// const postMetadata = getPostMetadata();
	// const postPreviews = postMetadata.map((slug) => (
	// 	<div key={slug}>
	// 		<Link href={`/blog/${slug}`}>
	// 			<h2>{slug}</h2>
	// 		</Link>
	// 	</div>
	// ));

	const posts = allDocs.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

	return (
		<div className="mx-auto max-w-xl py-8">
			<h1 className="mb-8 text-center text-2xl font-black">Next.js + Contentlayer Example</h1>
			{allDocs.map((item: Doc, idx) => {
				return (
					<div className="mb-8" key={idx}>
						<h2 className="mb-1 text-xl">
							<Link href={`blog/${item._raw.flattenedPath}`} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
								{item.title}
							</Link>
						</h2>
						<time dateTime={item.date} className="mb-2 block text-xs text-gray-600">
							{format(parseISO(item.date), "LLLL d, yyyy")}
						</time>
						<div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: item.body.html }} />
					</div>
				);
			})}
		</div>
	);
};

export default BlogPage;
