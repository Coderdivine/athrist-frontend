const img_path = document.getElementById("img");
window.onload =()=>{
    axios.get("").then(result=>{
        console.log(result.data.data);
    })
}