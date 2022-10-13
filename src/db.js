import image from "./assets/images/controller.png";

export const products = [
  {
    id: 1,
    image: image,
    name: "نام آیتم در دسته بندی",
    price: 1850,
  },
  {
    id: 2,
    image: image,
    name: "نام آیتم در دسته بندی",
    price: 1500,
  },
  {
    id: 3,
    image: image,
    name: "نام آیتم در دسته بندی",
    price: 2245,
  },
  {
    id: 4,
    image: image,
    name: "نام آیتم در دسته بندی",
    price: 1453,
  },
  {
    id: 5,
    image: image,
    name: "نام آیتم در دسته بندی",
    price: 15333,
  },
  {
    id: 4356,
    image: image,
    name: "نام آیتم در دسته بندی",
    price: 34652,
  },
  {
    id: 7,
    image: image,
    name: "نام آیتم در دسته بندی",
    price: 25334,
  },
  {
    id: 8,
    image: image,
    name: "نام آیتم در دسته بندی",
    price: 123,
  },
  {
    id: 9,
    image: image,
    name: "نام آیتم در دسته بندی",
    price: 6634,
  },
  {
    id: 10,
    image: image,
    name: "نام آیتم در دسته بندی",
    price: 23456,
  },
];

export const fakeLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    if (username === "09396903816" && password === "K@mij3314") {
      setTimeout(() => {
        resolve({
          token: "sample token ",
          firstName: "Ali",
          lastName: "Komijani",
          username: "09396903816",
        });
      }, 1000);
    } else {
      reject("invalid username or password");
    }
  });
};
