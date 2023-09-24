"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { HeaderComponent } from "@/components/header";

const AboutPage = () => {
	const path = usePathname();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-16 gap-y-12">
			<HeaderComponent path={path} />

			<div>
				<h2>About</h2>
			</div>

			<div>Aaaa</div>
		</main>
	);
};

export default AboutPage;
