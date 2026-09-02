import {
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("./App.jsx"),
  route("carrinho", "./Carrinho.jsx"),

  layout("./auth/layout.tsx", [
    route("login", "./auth/login.tsx"),
    route("register", "./auth/register.tsx"),
  ]),

  ...prefix("concerts", [
    index("./concerts/home.tsx"),
    route(":city", "./concerts/city.tsx"),
    route("trending", "./concerts/trending.tsx"),
  ]),
];
