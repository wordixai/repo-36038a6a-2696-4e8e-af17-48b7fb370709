const GridBackground = () => {
  return (
    <div className="fixed inset-0 min-h-screen w-full pointer-events-none z-0" style={{ opacity: 0.18 }}>
      <div className="absolute inset-0 h-full w-full bg-black pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent,white)]"></div>
      <div className="grid-bg absolute inset-0 h-full w-full"></div>
    </div>
  );
};

export default GridBackground;