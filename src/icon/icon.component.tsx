import { motion, MotionProps } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import icons, { TIcons } from './icon.config';

import brand from '@/assets/styles/variables/brand';
import { mq } from '@/assets/styles/variables/responsive';

interface IComponentProps extends MotionProps {
	name?: TIcons;
	color?: string;
	height?: number;
	width?: number;
	className?: string;
	heightMobile?: number;
	widthMobile?: number;
}

const StyledDiv = styled(
	({ color, height, width, heightMobile, widthMobile, children, ...props }) => (
		<motion.div {...props}>{children}</motion.div>
	),
)<IComponentProps>`
	height: ${({ height }) => height}px;
	width: ${({ width }) => width}px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	color: ${({ color }) => color};

	${({ heightMobile, widthMobile, height, width }) => mq.mobile`
		height: ${heightMobile || height}px;
		width: ${widthMobile || width}px;
	`}

	svg {
		color: ${({ color }) => color};
		width: 100%;
		height: 100%;
	}
`;

/** Renders Icon component */
const Icon: FunctionComponent<IComponentProps> = (props) => {
	// Destructure props
	const {
		name = 'ArrowRight',
		color = brand.text,
		height = 30,
		width = 30,
		widthMobile,
		heightMobile,
		className,
		...rest
	} = props;

	const IconToShow = icons[name];
	return (
		<StyledDiv
			{...rest}
			className={className}
			height={height}
			width={width}
			color={color}
			widthMobile={widthMobile}
			heightMobile={heightMobile}
			data-testid="svg-icon-div"
		>
			<IconToShow />
		</StyledDiv>
	);
};

export default Icon;
