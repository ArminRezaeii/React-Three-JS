import { proxy } from "valtio";
import { MyState } from "../Types";

export  const state:MyState = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal:'./threejs.png',
  fullDecal:'./threejs.png'
});
;
