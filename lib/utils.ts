export const isBrowser = () => typeof window !== 'undefined'

export function createCopyright(): string {
    const year = new Date().getFullYear();
    const message = `Copyright &copy; ${year} Hannes Alexandersson`;
    return message;
}