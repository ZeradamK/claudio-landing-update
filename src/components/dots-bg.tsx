import Particles from "./Particles";

const DotsBg = () => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '1200px',
      background: 'black',
      zIndex: -1000,
      pointerEvents: 'none',
    }}
  >
    <Particles
      particleColors={["#ffffff"]}
      particleCount={200}
      particleSpread={10}
      speed={0.1}
      particleBaseSize={100}
      moveParticlesOnHover={true}
      alphaParticles={false}
      disableRotation={false}
    />
  </div>
);

export default DotsBg; 