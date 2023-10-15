import Link from "next/link";
import React from "react";

import fs from "fs";

// const getPostMetadata = (slug: string) => {
// 	const folder = "posts/";
// 	const file = `${folder}${slug}.mdx`;
// 	const content = fs.readFileSync(file, "utf-8");
// 	return content;
// };

const BlogSlugPage = ({ params }: any) => {
	// const { slug } = params;
	// const content = getPostMetadata(slug);

	return (
		<div>
			{/* <h1>{slug}</h1>
			<Link href="/blog">Back</Link>
			<div className="prose">{content}</div> */}
		</div>
	);
};

export default BlogSlugPage;
