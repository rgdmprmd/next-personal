"use client";

import { HeaderComponent } from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import TypewriterComponent from "typewriter-effect";

const NotFoundPage = () => {
	const path = usePathname();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-16 gap-y-12">
			<HeaderComponent path={path} />

			<div className="flex flex-col place-items-center gap-5">
				<h2 className="text-white">
					<TypewriterComponent options={{ strings: ["Sorry", "Maaf", "Gomen nasai", "Lo siento", "Mi dispiace", "Duì bù qǐ", "Mianhae", "Khǒ thot", "Xin lỗi"], autoStart: true, loop: true }} />
				</h2>
				<h2 className="text-4xl font-semibold">404 Not Found</h2>
				<p className="text-muted-foreground text-center text-sm md:text-base">The page you are looking for is currently under construction.</p>
				<Link href="/">
					<Button variant="outline" size="lg" className="group">
						Go Home <span className="inline-block ml-1 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
					</Button>
				</Link>
			</div>

			<div></div>
		</main>
	);
};

export default NotFoundPage;
