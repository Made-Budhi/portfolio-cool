import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import type { ComponentProps } from "react";

type ShaderGradientProps = ComponentProps<typeof ShaderGradient>;

/**
 * Visual configuration for the animated shader gradient. Extracted so the
 * look can be tweaked in one place without touching layout/markup.
 */
const GRADIENT_CONFIG: ShaderGradientProps = {
  animate: "on",
  brightness: 1,
  cAzimuthAngle: 180,
  cDistance: 3.5,
  cPolarAngle: 80,
  cameraZoom: 9.1,
  color1: "#606080",
  color2: "#8d7dca",
  color3: "#212121",
  envPreset: "city",
  grain: "on",
  lightType: "3d",
  loop: "on",
  loopDuration: 10,
  positionX: 0,
  positionY: 0,
  positionZ: 0,
  range: "disabled",
  rangeEnd: 0,
  rangeStart: 0,
  reflection: 0.1,
  rotationX: 50,
  rotationY: 0,
  rotationZ: -60,
  shader: "defaults",
  type: "waterPlane",
  uAmplitude: 0,
  uDensity: 1.5,
  uFrequency: 0,
  uSpeed: 0.1,
  uStrength: 1.5,
  uTime: 8,
  wireframe: false,
};

/**
 * Full-bleed animated gradient that sits behind page content.
 * Fixed to the viewport so it stays full-screen on any device.
 */
export function GradientBackground() {
  return (
    <ShaderGradientCanvas
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: -1,
      }}
      pixelDensity={1.5}
      fov={45}
    >
      <ShaderGradient {...GRADIENT_CONFIG} />
    </ShaderGradientCanvas>
  );
}
