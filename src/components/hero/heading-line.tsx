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
		className={`text-2xl sm:text-4xl md:text-6xl text-slate-700 font-bold animate-slidein opacity-0 ${margin}`}
		id={id}
	>
		<span>{spanText}</span>
		{normalText}
	</h1>
);
