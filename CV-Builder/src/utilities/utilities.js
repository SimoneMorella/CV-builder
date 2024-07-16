export async function getFlagImg(country) {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${country}`
        );
        const data = await response.json();
        
        if (data && data.length > 0) {
            return data[0].flag;
        } else {
            throw new Error("no data found")
        }
    }
    catch(error) {
        console.log(error);
    }
}