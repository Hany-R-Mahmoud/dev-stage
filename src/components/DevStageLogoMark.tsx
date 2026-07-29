import type { SVGProps } from 'react';

type DevStageLogoMarkProps = Readonly<SVGProps<SVGSVGElement>>;

export function DevStageLogoMark({
  className,
  ...props
}: DevStageLogoMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className ? `dev-stage-mark ${className}` : 'dev-stage-mark'}
      focusable="false"
      shapeRendering="geometricPrecision"
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path className="dev-stage-mark__gold" d="M20 18 52 6v8L20 24Z" />
      <path className="dev-stage-mark__mid" d="M16 27 51 16v13L16 35Z" />
      <path className="dev-stage-mark__side" d="m52 16 15 7v14l-15-6Z" />
      <path className="dev-stage-mark__mid" d="m12 38 39-8v17l-39-3Z" />
      <path className="dev-stage-mark__side" d="m52 32 15 7v15l-15-6Z" />
      <path className="dev-stage-mark__gold" d="m32 50 19-3v25L32 80Z" />
      <path className="dev-stage-mark__side" d="m52 49 15 6v15l-15 8Z" />
      <path
        className="dev-stage-mark__front"
        clipRule="evenodd"
        d="M4 44 34 48v32L4 70Zm10 12v17l12 4V59Z"
        fillRule="evenodd"
      />
      <path className="dev-stage-mark__gold" d="m19 62 5 1.5V77l-5-1.5Z" />
    </svg>
  );
}
