// @ts-expect-error ignore 
export function getNestedValue(obj, path: string) {
    console.log(path);

    return path.split('.').reduce((acc, key) => acc?.[key], obj);
}