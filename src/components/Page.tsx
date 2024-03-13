import {
  forwardRef,
  ReactNode,
  HTMLAttributes,
  ForwardRefRenderFunction,
} from "react";
// next
import Head from "next/head";
// @mui
import { Box } from "@mui/material";

interface PageProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title?: string;
  meta?: ReactNode;
}

const Page: ForwardRefRenderFunction<HTMLDivElement, PageProps> = (
  { children, title = "", meta, ...other },
  ref
) => (
  <>
    <Head>
      <title>{title}</title>
      {meta}
    </Head>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
);

export default forwardRef(Page);
