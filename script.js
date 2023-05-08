
let API_KEY = 'live_T1s6FKlQ3drSWOn04bqnBPlUYlNHpDeRtdE2kOcgHRZhV1L05m9omstFR5v0BDXB'

let cat_api = async () => {

    let response = `https://api.thecatapi.com/v1/images/search?${API_KEY}`
    let res = await fetch(response)
    let ele = await res.json()
    console.log(ele)
    for (let data of ele) {
        console.log(data);
        let parent_div = document.querySelector('.container')
        //Creating Element and Append
        let div_tag = document.createElement('div')
        div_tag.setAttribute('class', 'img_tag')
        let img_tag = document.createElement('img')
        img_tag.src = data.url
        div_tag.append(img_tag)
        parent_div.append(div_tag)

    }
}
cat_api()

let btn1 = document.querySelector('.btn')
btn1.addEventListener('click', () => {
    document.location.reload();
})