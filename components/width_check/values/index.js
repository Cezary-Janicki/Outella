import Width_Check from "../index";

export let isMobile = () => {
  let dataArray = Width_Check();
  return dataArray.props.children[2];
};
export let isTablet = () => {
  let dataArray = Width_Check();
  return dataArray.props.children[1];
};
export let isDesktop = () => {
  let dataArray = Width_Check();
  return dataArray.props.children[0];
};
export const desktopBreakPoint = 1000;
export const tabletBreakPoint = 800;
