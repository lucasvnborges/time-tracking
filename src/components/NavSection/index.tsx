export { default as NavSectionVertical } from "./Vertical";

export function isExternalLink(path: string | string[]) {
  return path.includes("http");
}

export function getActive(path: any, pathname: string | any[], asPath: string | any[]) {
  return pathname.includes(path) || asPath.includes(path);
}
