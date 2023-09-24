"use client";

import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { HeaderComponent } from "@/components/header";
import { usePathname } from "next/navigation";

export default function Home() {
	const path = usePathname();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-16 gap-y-12">
			<HeaderComponent path={path} />

			{/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
				<Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
			</div> */}
			<div className="w-full flex items-center justify-center flex-col">
				<h2 className="text-4xl font-semibold">Hi!</h2>
				<h1 className="mt-3 text-xl md:text-4xl  ">
					You can call me <span className="font-bold text dark:bg-clip-text dark:bg-gradient-to-r dark:from-pink-500 dark:to-purple-500 dark:text-transparent">Rangga</span>{" "}
				</h1>

				<div className="flex place-items-center flex-col text-muted-foreground text-sm md:text-lg">
					<span>A Junior Web Developer &</span>
					<TypewriterComponent options={{ strings: ["PHP Geeks", "Javascript Nerd", "Analytics Noobs", "Trashpunk Enjoyer", "Nakama", "Samurai", "Cowboy", "Uncompetitive Gamer"], autoStart: true, loop: true }} />
				</div>
			</div>

			<div className="mb-32 grid text-center md:grid-cols-2 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
				<Link href="/about" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
					<h2 className={`mb-3 text-2xl font-semibold`}>
						About <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{`I'd love intersection between art and technology.`}</p>
				</Link>

				<Link
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Projects <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{`Some of my latest works that I'm proud of.`}</p>
				</Link>

				<Link
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Blogs <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{`Writing makes me learn what I've learn.`}</p>
				</Link>

				<Link
					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Contact <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{`Want to know more about me? Let's talk`}</p>
				</Link>
			</div>
		</main>
	);
}
