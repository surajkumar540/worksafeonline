"use client";

import { Fetch } from "@/utils/axios";
import { useRouter } from "next/navigation";
import Loader from "@/components/common/Loader";
import React, { useEffect, useState } from "react";
import { isTokenExist } from "@/api/generateDeviceId";
import FilterSection from "../shop/components/FilterSection";

export default function ClientPage() {
  const router = useRouter();
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!isTokenExist()) return router.replace("/");
        const url = "api/MyUniformListingWCategories";
        const resp: any = await Fetch(url, {}, 5000, true, false);
        if (resp.status) setProducts(resp ?? []);
        else setProducts({});
        setLoading(false);
      } catch (error) {
        console.log("Error: " + error);
      }
    };
    fetchData();
  }, [router]);

  if (loading) return <Loader />;
  return (
    <FilterSection
      category={0}
      subcategory={0}
      response={products}
      categoryResponse={products}
    />
  );
}
