import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "@/components";
import Home from "@/pages/Home";
import Dumpsters from "@/pages/dumpsters";
import Residues from "@/pages/residues";
import Operations from "@/pages/operations";
import Rent from "@/pages/rent";
import SignIn from "@/pages/sign/sign-in";
import SignUp from "@/pages/sign/sign-up";

const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
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
        <Operations />
      </Layout>
    ),
  },
  {
    path: "/rent",
    element: (
      <Layout>
        <Rent />
      </Layout>
    ),
  },
  {
    path: "/residues",
    element: (
      <Layout>
        <Residues />
      </Layout>
    ),
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
