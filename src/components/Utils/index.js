
export const getAPIAsync = async (url) => {
    let json;
    try {
        const response = await fetch(
            url
        );
        json = await response.json();
        // console.log(json);
    } catch (error) {
        console.error(error);
    }
    // console.log("after");
    return json;
};