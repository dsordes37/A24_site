var dest_car=document.querySelector('#destaques .car_sldr');

let filmes=[
    ['civil war', '26/04/2024', 'https://d135u4jtzauizi.cloudfront.net/_hero/111975/CW_16x9_Trailer_TextlessThubmnail.webp'],
    ['love lies bleeding', '08/03/2024', 'https://d135u4jtzauizi.cloudfront.net/LLB_Sundance-Image_2023-12-06-192814_ccya.jpg'],
    ['the iron claw', '22/12/2023', 'https://d135u4jtzauizi.cloudfront.net/_hero/109313/IRON_CLAW_16x9_Trailer_Thubmnail_Textless.webp'],
    ['the zone of interest', '15/12/2023', 'https://d135u4jtzauizi.cloudfront.net/_hero/109805/ZOI_16x9_Teaser_ThubmnailTextless.webp'],
    ['priscilla', '26/12/2023', 'https://d135u4jtzauizi.cloudfront.net/_hero/106810/P_YouTubeClean_Thumb.webp'],
    ['the curse', '10/11/2023', 'https://d135u4jtzauizi.cloudfront.net/_hero/110977/curse_new_house.webp']];




for(var p of filmes){
    dest_car.innerHTML+=`
        <div class='car_item' style='background-image: url(${p[2]})'>
            <h2>${p[0]}</h2>
            <h3>${p[1]}</h3>

        </div>
        <hr>
    `
}


