import { Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

export function SplineScene({ scene, className, onLoad, containerRef }) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <div ref={containerRef} className="w-full h-full">
        <Spline scene={scene} className={className} onLoad={onLoad} />
      </div>
    </Suspense>
  );
}
