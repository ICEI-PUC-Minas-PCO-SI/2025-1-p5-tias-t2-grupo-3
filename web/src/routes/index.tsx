import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "@/pages/Home";
import { Layout } from "@/components";
import Dumpsters from "@/pages/Dumpsters";
import Operations from "@/pages/Operations";
import Rent from "@/pages/Rent";
import Residues from "@/pages/Residues";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/dumpsters",
    element: (
      <Layout>
        <Dumpsters />
      </Layout>
    ),
  },
  {
    path: "/operations",
    element: (
      <Layout>
        <Operations/>
      </Layout>
    ),
  },
  {
    path: "/rent",
    element: (
      <Layout>
        <Rent/>
      </Layout>
    ),
  },
  {
    path: "/residues",
    element: (
      <Layout>
        <Residues/>
      </Layout>
    )
  }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
