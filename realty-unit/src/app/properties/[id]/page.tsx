"use client";

import { useParams, useRouter } from "next/navigation";
import { Box, Container, Grid, Typography } from "@mui/material";
import { dummy } from "@/constants";
import TopImageSection from "@/components/propDetail/TopImageSection";
import OurAminitiesSection from "@/components/Home/OurAminitiesSection";
import MapSection from "@/components/propDetail/MapSection";
import Gallery from "@/components/propDetail/Gallery";
import Features from "@/components/propDetail/Features";

const PropertyDetails = () => {
  const params = useParams();
  const id = params.id;

  const card = dummy.find((property: any) => property.id === id);

  return (
    <Box>
      <TopImageSection />
      <Features />
      <Gallery />
      <OurAminitiesSection />
      <MapSection />
    </Box>
  );
};

export default PropertyDetails;
