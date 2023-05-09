var product =[{
    id: 1,
    img:'./img/t-shirt.png',
    name:'Shirt',
    price:300,
    description:' Shirt Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, aut. Sit modi dolorum aliquam voluptate unde quibusdam qui eligendi explicabo minus dignissimos? Velit, alias porro repellendus nesciunt impedit doloribus commodi!',
    type: 'Shirt'
},{
    id: 2,
    img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsneakersd.cn%2Fwp-content%2Fuploads%2F2022%2F11%2Faustin%2520shoe%2520company.jpeg&f=1&nofb=1&ipt=5d6743c93f37c18a25b0f892f939b2f1603edcb130bf7d8306be00d36c4a436b&ipo=images',
    name:'Shoe',
    price:600,
    description: ' trousers Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, aut. Sit modi dolorum aliquam voluptate unde quibusdam qui eligendi explicabo minus dignissimos? Velit, alias porro repellendus nesciunt impedit doloribus commodi!',
    type: 'shoe'
},{
    id: 3,
    img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.vZwnrN-opB_jgjgMuxuuggHaJ4%26pid%3DApi&f=1&ipt=b942202f52e3681c392d957f1200a0eaf76d5e05562a385fe1aa3f47c5a311a0&ipo=images',
    name:'Trousers',
    price:600,
    description: ' trousers Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, aut. Sit modi dolorum aliquam voluptate unde quibusdam qui eligendi explicabo minus dignissimos? Velit, alias porro repellendus nesciunt impedit doloribus commodi!',
    type: 'Trousers'
}];

$(document).ready(()=> {
    var html = '';
    for (let i=0;i < product.length; i++){
       html += ` <div onclick="openProductDetail(${i})" class="product-item ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p style="font-size: 1vw;">${numberWithCommas(product[i].price)}THB</p>
              </div>` 
    }
    $("#Product-list").html(html);
 
})
function numberWithCommas(x){
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2")
    return x;
}
function searchsomething(elem) {
    // console.log('#'+elem.id)
    var value = $('#'+elem.id).val()
    console.log(value)

    var html = '';
    for (let i = 0; i < product.length; i++) {
        if( product[i].name.includes(value) ) {
            html += `<div onclick="openProductDetail(${i}) class="product-items ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p stlye="font-size: 1vw;">${ numberWithCommas(product[i].price) } THB</p>
                </div>`;
        }
    }
}
if(html == ''){
    $("Product-list").html(`<p>Not found product</p>`)
}else{
        $("Product-list").html(html)
}

function searchproduct(params) {
    console.log(params)
    $(".product-item").css('display', 'none')
    if(params == 'all'){
        $(".product-item").css('display', 'block')
    }else{
        $("."+params).css('display', 'block')
    }
    
}

