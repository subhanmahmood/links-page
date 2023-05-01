import ArrowLeft from '@/assets/svg/arrow-left';
import ArrowRight from '@/assets/svg/arrow-right';

const iconConfig = { ArrowRight, ArrowLeft };

export type TIcons = keyof typeof iconConfig;

export default iconConfig;
