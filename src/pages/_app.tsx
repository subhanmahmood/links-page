import { ChakraProvider } from '@chakra-ui/react';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';
import type { AppProps } from 'next/app';

import { GlobalStyle } from '@/assets/styles/app';
import '@/assets/styles/globals.css';
import { supabaseClient } from '@/lib/supabase';

export default function App({
	Component,
	pageProps,
}: AppProps<{
	initialSession: Session;
}>) {
	return (
		<SessionContextProvider
			supabaseClient={supabaseClient}
			initialSession={pageProps.initialSession}
		>
			<ChakraProvider>
				<GlobalStyle />
				<Component {...pageProps} />
			</ChakraProvider>
		</SessionContextProvider>
	);
}
