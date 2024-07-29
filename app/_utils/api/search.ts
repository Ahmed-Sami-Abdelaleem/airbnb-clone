export const getSearch = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
        const searchData = await res.json();
        return searchData;
    } catch (error) {
        console.log(error)
    }
}