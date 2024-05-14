import Image from 'next/image';

export const RankImage = ({
	src,
	animation,
	className
}: {
	src: string;
	animation: string;
	className?: string;
}) => (
	<Image
		src={src}
		alt="Detox Rank"
		className={`w-32 h-32 sm:w-80 sm:h-80 xl:w-96 xl:h-96 absolute top-5 sm:top-20 left-1/2 transform -translate-x-1/2 ${animation} z-0 duration-500 ease-in-out ${className}`}
		width={150}
		height={150}
	/>
);
