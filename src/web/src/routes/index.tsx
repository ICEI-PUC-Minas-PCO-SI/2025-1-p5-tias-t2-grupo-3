import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import { Layout } from "@/components";
import ProtectedRoute from "@/components/ProtectedRoute";
import Home from "@/pages/Home";
import Dumpsters from "@/pages/dumpsters";
import Residues from "@/pages/Residues";
import Operations from "@/pages/operations";
import Rent from "@/pages/rent";
import SignIn from "@/pages/sign/sign-in";
import SignUp from "@/pages/sign/sign-up";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/sign-in" replace />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Layout>
          <Home />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/dumpsters",
    element: (
      <ProtectedRoute>
        <Layout>
          <Dumpsters />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/operations",
    element: (
      <ProtectedRoute>
        <Layout>
          <Operations />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/rent",
    element: (
      <ProtectedRoute>
        <Layout>
          <Rent />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/residues",
    element: (
      <ProtectedRoute>
        <Layout>
          <Residues />
        </Layout>
      </ProtectedRoute>
    ),
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
