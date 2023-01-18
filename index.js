var Product =[{
    id: 1,
    img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff.btwcdn.com%2Fstore-35589%2Fproduct%2F40048ec6-09c4-f543-97df-5ef2031980ff.jpg&f=1&nofb=1&ipt=7b4549dcafa411226e834a39372099c293fb0173d2b2c186b1cadd514598bb74&ipo=images',
    name:'Shirt',
    price:300,
    description:' Shirt Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, aut. Sit modi dolorum aliquam voluptate unde quibusdam qui eligendi explicabo minus dignissimos? Velit, alias porro repellendus nesciunt impedit doloribus commodi!',
    type: 'Shirt'
},{
    id: 2,
    img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.vZwnrN-opB_jgjgMuxuuggHaJ4%26pid%3DApi&f=1&ipt=b942202f52e3681c392d957f1200a0eaf76d5e05562a385fe1aa3f47c5a311a0&ipo=images',
    name:'Trousers',
    price:600,
    description: ' trousers Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, aut. Sit modi dolorum aliquam voluptate unde quibusdam qui eligendi explicabo minus dignissimos? Velit, alias porro repellendus nesciunt impedit doloribus commodi!',
    type: 'Trousers'
},{
    id: 3,
    img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.vZwnrN-opB_jgjgMuxuuggHaJ4%26pid%3DApi&f=1&ipt=b942202f52e3681c392d957f1200a0eaf76d5e05562a385fe1aa3f47c5a311a0&ipo=images',
    name:'Trousers',
    price:600,
    description: ' trousers Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, aut. Sit modi dolorum aliquam voluptate unde quibusdam qui eligendi explicabo minus dignissimos? Velit, alias porro repellendus nesciunt impedit doloribus commodi!',
    type: 'Trousers'
}]
$(document).ready(()=> {
    var html = '';
    //i = 0 
    for (let i=0;i < Product.length; i++){
        //state 3
       html +=`<div class="product-item ${Product[i].type}">
                    <img class="product-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff.btwcdn.com%2Fstore-35589%2Fproduct%2F40048ec6-09c4-f543-97df-5ef2031980ff.jpg&f=1&nofb=1&ipt=678206895f41521fe6e09054109cacf0713543e37a606fc94282a00474eb6456&ipo=images" alt="">
                    <p style="font-size: 1.2vw;">Product Name</p>
                    <p style="font-size: 1vw;">500 THB</p>
              </div>` 
    }
    $("#Product-list").html(html);
})