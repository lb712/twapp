import SHOPCARTURL from "../constants/FetchApiUrl";

var getShopCartListByUser =  function (cb) {
    fetch(SHOPCARTURL.fetchApi).then(response=>{
        response.json().then(data=>{
            cb(data);
        })

    });
}

export default {getShopCartListByUser}




