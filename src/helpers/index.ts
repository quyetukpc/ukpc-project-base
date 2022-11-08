export const wait = async (second?: number) => {
	return setTimeout(() => {}, second ?? 2000);
};
