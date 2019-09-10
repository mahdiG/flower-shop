import { Router } from "@vaadin/router";
import "./src/components/fs-home";
import "./src/components/product/fs-product";
import "./src/components/fs-login";
import "./src/components/fs-cart";

export default function(outletElement) {
  const router = new Router(outletElement);
  router.setRoutes([
    { path: "/", component: "fs-home" },
    {
      path: "/product",
      children: [
        {
          path: "/:id",
          component: "fs-product"
        }
      ]
    },
    {
      path: "/login",
      component: "fs-login"
    },
    {
      path: "/cart",
      component: "fs-cart"
    },
    // 404 not found
    { path: "(.*)", redirect: "/" }
  ]);
}
