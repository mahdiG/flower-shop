import { Router } from "@vaadin/router";
import "./src/components/fs-home";
import "./src/components/product/fs-product";

export default function(outletElement) {
  console.log("outlet: ", outletElement);
  const router = new Router(outletElement);
  router.setRoutes([
    { path: "/", component: "fs-home" },
    // 404 not found
    { path: "(.*)", redirect: "/" },
    {
      path: "/product",
      children: [
        {
          path: "/:id",
          component: "fs-product"
        }
      ]
    }
  ]);
}
