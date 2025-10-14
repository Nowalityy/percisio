import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Activity } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hepatic Drainage | Percisio',
  description: 'A classic of interventional radiology.',
};

export default function HepaticDrainagePage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Activity className="text-primary mx-auto mb-6 h-20 w-20" />
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">Hepatic Drainage</h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-xl">
            A classic of interventional radiology.
          </p>
          <div className="mx-auto max-w-4xl text-left">
            <div className="prose prose-lg mx-auto">
              <p className="mb-6">
                The drainage procedure is one of the great classics of interventional radiology.
                Reaching a hepatic abscess with PERCISIO Guidance becomes faster, safer, and more
                intuitive. The system provides a 3D holographic visualization of the liver and
                surrounding organs, allowing the operator to plan and monitor the needle trajectory
                in real time while minimizing the risk of injury to vessels or neighboring
                structures.
              </p>
              <div className="mb-8 flex justify-center">
                <Image
                  src="/hepatic_drainage.png"
                  alt="Hepatic drainage procedure with PERCISIO guidance showing holographic visualization"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <p className="mb-6">
                The illustration shows a holographic volume precisely positioned over the abscess
                area, together with a virtual needle path. These elements, included in the patient's
                holographic overlay, provide all the essential data required for the accurate
                execution of the procedure. The software also relies on depth information and the
                target volume dimensions to authorize the intervention.
              </p>
              <p className="mb-6">
                PERCISIO only validates actions that remain within its certified precision range,
                ensuring procedural safety and maintaining the accuracy expected for image-guided
                interventions. By combining markerless body tracking, CT-based volumetric data, and
                augmented guidance overlays, PERCISIO enables precise percutaneous access to deep or
                complex lesions.
              </p>
              <p>
                This results in shorter procedure times, reduced radiation exposure, and greater
                operator confidence, both in clinical practice and in training environments.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
