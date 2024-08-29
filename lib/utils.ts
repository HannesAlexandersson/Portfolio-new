export const isBrowser = () => typeof window !== 'undefined'

export function createCopyright(): string {
    const year = new Date().getFullYear();
    const mark = createCopyMark();
    const message = `Copyright ${mark} ${year} Hannes Alexandersson`;
    return message;
}


export function createCopyMark(): string {
    return "©"; 
}