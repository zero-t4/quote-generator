export const getRandomColorIndex = (colors: string[]): string => {
    const index = Math.floor(Math.random() * colors.length) + 1;

    return colors[index];
};
