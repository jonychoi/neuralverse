export const postRequest = (img, api_url, setResult, arg) => {

    let data = null;
    
    if (Array.isArray(img)){
        data = { "data": img}
    } else if (arg) {
        data = { "data": [img, arg]}
    } else {
        data = { "data": [img] };
    }

    console.log(data);

    fetch(api_url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    }).then(function (response) {
        if (response.status == 200) {
            console.log("hi", response);
            return response.json();
        }
        else {
            console.log(response)
        }
    }).then(function (json_response) {
        console.log("output", json_response)
        setResult(json_response);
        return json_response;
    })
}