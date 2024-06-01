"use client";
import { QueryProvider } from "../providers";
import { QueryClientProvider,QueryClient } from "react-query";



export default function ChatLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const queryClient = new QueryClient()
	return (
		<QueryClientProvider client={queryClient}>
		<section >
			<div >
				{children}
			</div>
		</section>
		</QueryClientProvider>
	);
}
