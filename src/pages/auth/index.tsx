import { Box, Center } from '@chakra-ui/react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const LoginPage = () => {
	const supabaseClient = useSupabaseClient();
	const user = useUser();

	if (!user)
		return (
			<Center h="100vh">
				<Box
					maxW="lg"
					w="max-content"
					p="8"
					borderRadius="md"
					borderWidth="thin"
					borderColor="gray.200"
				>
					<Auth
						redirectTo="http://localhost:3000/"
						appearance={{ theme: ThemeSupa }}
						supabaseClient={supabaseClient}
						providers={[]}
						socialLayout="horizontal"
					/>
				</Box>
			</Center>
		);

	return (
		<>
			<button onClick={() => supabaseClient.auth.signOut()}>Sign out</button>
			<p>user:</p>
			<pre>{JSON.stringify(user, null, 2)}</pre>
		</>
	);
};

export default LoginPage;
