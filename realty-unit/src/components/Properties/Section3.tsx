import { colors, propertydummy } from "@/constants";
import {
  Box,
  Container,
  Chip,
  Typography,
  Button,
  Pagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getProperties } from "@/api";
import PropertyCard from "../Home/PropertyCard";

interface Property {
  _id: string;
  [key: string]: any;
}
interface PageData {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  propertiesData: Property[];
}

interface GetPropertiesResponse {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  response: Property[];
}

const Section3 = () => {
  const [pageData, setPageData] = useState<PageData>({
    pageNumber: 1,
    pageSize: 5,
    totalPages: 1,
    propertiesData: [],
  });

  const { pageNumber, pageSize, totalPages, propertiesData } = pageData;

  const fetchProperties = async (pageNumber: number, pageSize: number) => {
    try {
      const resp: GetPropertiesResponse = await getProperties({
        pageNumber,
        pageSize,
      });
      setPageData((prev) => {
        return {
          ...prev,
          totalPages: resp.totalPages,
          propertiesData: resp.response,
          pageNumber,
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPageData((prev) => ({
      ...prev,
      pageNumber: value,
    }));
  };

  useEffect(() => {
    // fetchProperties(pageNumber, pageSize);
  }, [pageNumber, pageSize]);
  return (
    <Box sx={{ color: "#000", mt: "60px" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>1-9 of {totalPages * pageSize} results</Typography>
          <Box sx={{ display: "flex", gap: "20px", padding: "40px 0px" }}>
            <Typography>clear</Typography>
            <Typography>Filters</Typography>
          </Box>
        </Box>
        <Box>
          <Box
            py={{ xs: 1, sm: 3 }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Box
              display={"flex"}
              justifyContent={{ xs: "center", sm: "space-between" }}
              alignItems={"center"}
              flexWrap={"wrap"}
            >
              {propertydummy.map((card) => (
                <PropertyCard key={card.src} card={card} />
              ))}
            </Box>
          </Box>
        </Box>
        <Box mb={6} width={"100%"} display={"flex"} justifyContent={"center"}>
          <Pagination
            count={totalPages}
            page={pageNumber}
            onChange={handlePageChange}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Section3;
