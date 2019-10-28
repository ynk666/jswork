var provinceArr = ['计算机与设计学院','汽车学院'];
var cityArr = [
    ['软件','网络'],
    ['汽检', '汽配', '汽电', '汽营', '汽新'],
];
var countryArr =  [
    [
       ['软件1905','软件1906']
    ],[
        ["网络1901","网络1902","网络1903","网络1917"]
    ]
];


function createOption(obj, data){
    for (var i in data){
        var op =new Option(data[i], i);
        obj.options.add(op);
    }
}
var province = document.getElementById('province');
createOption(province,provinceArr);
var city =document.getElementById('city');
province.onchange = function() {
    city.options.length =0;
    createOption(city, cityArr[province.value]);
};
var country = document.getElementById('country');
city.onchange = function() {
    country.options.length =0;
    createOption(country, countryArr[province.value][city.value]);
};
province.onchange = function(){
    city.options.length =0;
    createOption(city,cityArr[province.value]);
    if (province.value >=0){
        city.onchange();
    } else{
        country.options.length =0;
    }
};