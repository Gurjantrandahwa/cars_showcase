
export async function fetchCars() {
    const headers={
        'X-RapidAPI-Key': '1a45904997msh5953a5178ce4a89p1b1ef1jsn3cdfb66640c7',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers:headers,
    });

    const result =await response.json();

    return result;

}
