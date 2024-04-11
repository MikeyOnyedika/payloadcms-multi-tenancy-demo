export default function hasRole<T extends string = string>(role: T, userRoles: string[]): boolean{
    return userRoles.includes(role);
}