import TiltedCard from './TiltedCard';
import MarqueeDemo from './testimonials';
import WaitlistSection from './WaitlistSection';

const MoreFeatures = () => {
  return (
    <section className="py-32">
      <div className="container max-w-5xl flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-4 text-white">More features</h1>
        <p className="text-lg text-center mb-12 text-white/80 max-w-2xl mx-auto">Claudio can search, apply, and refine high-end architectural pattern solutions for your needs.</p>
        <video
          src="/block-video.mp4"
          className="aspect-video rounded-md object-cover w-full h-auto max-h-[400px] lg:max-h-[600px]"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="w-full flex flex-col md:flex-row gap-8 justify-center my-12">
          <TiltedCard
            altText="Claudio-Betav0.1"
            captionText="Claudio-Betav0.1"
            containerHeight="300px"
            containerWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            className="bg-black/30 rounded-[15px]"
            overlayContent={
              <div className="p-4 text-white text-sm">
                <h3 className="font-bold text-lg mb-2">Claudio-Betav0.1</h3>
                <p>Conversational AI assistant always available to search solution patterns, assist with microservices clarification, and help you understand components in your cloud architecture.</p>
              </div>
            }
          />
          <TiltedCard
            altText="DeepDesign v0.2"
            captionText="DeepDesign v0.2"
            containerHeight="300px"
            containerWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            className="bg-black/30 rounded-[15px]"
            overlayContent={
              <div className="p-4 text-white text-sm">
                <h3 className="font-bold text-lg mb-2">DeepDesign v0.2</h3>
                <p>AI-assisted design tool that refines your generated architectures for reliability, scalability, and best practices. Exports ready for CDK, SDK, and Terraform. Ship robust, production-grade designs with confidence.</p>
              </div>
            }
          />
          <TiltedCard
            altText="DeepAnalysis"
            captionText="DeepAnalysis"
            containerHeight="300px"
            containerWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            className="bg-black/30 rounded-[15px]"
            overlayContent={
              <div className="p-4 text-white text-sm">
                <h3 className="font-bold text-lg mb-2">DeepAnalysis</h3>
                <p>Model trained under Claudio to convert your solutions into actionable numbers: cost analysis, projections, profit & loss, and financial recommendations for business-specific ideas.</p>
              </div>
            }
          />
        </div>
        <div className="mt-24 w-full">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Testimonials</h2>
          <MarqueeDemo />
        </div>
        <div className="my-[100px] w-full" id="waitlist">
          <WaitlistSection />
        </div>
      </div>
    </section>
  );
};

export default MoreFeatures; 