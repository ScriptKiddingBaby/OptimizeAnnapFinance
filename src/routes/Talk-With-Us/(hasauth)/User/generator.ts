export const convertDate = (date: string) =>
{   
    const mutatedDate = new Date(date);
    return mutatedDate.toLocaleTimeString() + ", " + mutatedDate.toLocaleDateString();
}