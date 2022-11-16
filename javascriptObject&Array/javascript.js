const user = [];
user[0] = {
    name : "Monica",
    gender : "female",
    age : 17,
    email : "monica@dingdong.com",
    favoriteColor : ["Yellow", "Pink", "white", "Purple"],
    isHavePet : "Yes",
    education : [
        {
            name : "SD 01",
            city : "Jakarta",
            garaduate : "2016"
        },
        {
            name : "SMP 02",
            city : "Jakarta",
            garaduate : "2019"
        },
        {
            name : "SMA 03",
            city : "Tangerang"
        }
    ],
    favoriteRestaurant : ["Bento", "Sushi", "Pancake", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"]
};

user[1] = {
    name : "Wendy",
    gender : "Male",
    age : 23,
    email : "wendy@dingdong.com",
    favoriteColor : ["Blue", "Black", "Gray"],
    isHavePet : "No",
    education : [
        {
            name : "SD 02",
            city : "Jakarta",
            garaduate : "2010"
        },
        {
            name : "SMP 03",
            city : "Bogor",
            garaduate : "2013"
        },
        {
            name : "SMA 01",
            city : "Surabaya",
            garaduate : "2016"
        },
        {
            name : "Universitas Maju",
            city : "Tangerang",
        }
    ],
    favoriteRestaurant : ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]
};

console.log("Nama : " + user[1].name);
console.log("SMA : " + user[1].education[2].name);
console.log("Kota : " + user[1].education[2].city);
console.log("Makanan Favorit : " + user[1].favoriteRestaurant[5]);