import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';
import { HTMLMotionProps, motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';

const Button: FunctionComponent<
	ButtonProps &
	React.ButtonHTMLAttributes<HTMLButtonElement> &
	HTMLMotionProps<'button'>
> = (props) => {
	const { children, ...rest } = props;
	return (
		<>
			<ChakraButton
				{...rest}
				as={motion.button}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
			>
				{children}
			</ChakraButton>
		</>
	);
};

export default Button;
