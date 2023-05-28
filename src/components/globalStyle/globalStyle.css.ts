import { globalStyle } from "@vanilla-extract/css";

const parentElements = ["canvas", "iframe", "img", "svg", "video"];
const childElements = ["svg *", "symbol *"];

globalStyle(`*:not(${[...parentElements, ...childElements].join()})`, {
  all: "unset",
  display: "revert",
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("html", {
  fontSize: 8,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
});