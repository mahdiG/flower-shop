import { Router } from "@vaadin/router";
import "./src/components/fs-home";
import "./src/components/product/fs-product";

export default function(outletElement) {
  console.log("outlet: ", outletElement);
  const router = new Router(outletElement);
  router.setRoutes([
    { path: "/", component: "fs-home" },
    {
      path: "/product",
      component: "fs-product",
      children: [
        {
          path: "/:id",
          component: "fs-product"
        }
      ]
    }
  ]);
}
