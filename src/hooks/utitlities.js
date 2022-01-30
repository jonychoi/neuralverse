export const getItem = (title, data) => {
    console.log(title, data);
    for (let i = 0; i < data.length; i ++){
        if (title == data[i].title){
            return data[i];
        }
    }
}