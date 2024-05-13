type HeadingLineProps = {
	spanText: string;
	normalText: string;
	margin: string;
	id: string;
};

export const HeadingLine = ({
	spanText,
	normalText,
	margin,
	id
}: HeadingLineProps) => (
	<h1
		className={`text-2xl font-sigmarOne sm:text-5xl md:text-6xl xl:text-8xl text-slate-700 font-bold animate-slidein opacity-0 ${margin}`}
		id={id}
	>
		<span>{spanText}</span>
		{normalText}
	</h1>
);
