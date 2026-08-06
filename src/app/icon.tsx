import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0908",
          borderRadius: 14,
          fontFamily: "Georgia, serif",
        }}
      >
        <span
          style={{
            fontSize: 30,
            fontWeight: 700,
            fontStyle: "italic",
            color: "#cba260",
          }}
        >
          B&F
        </span>
      </div>
    ),
    { ...size }
  );
}
