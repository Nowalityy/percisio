import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Activity } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Biopsy | Percisio',
  description: 'End-to-end guidance for minimally invasive biopsies.',
};

export default function BiopsyPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Activity className="text-primary mx-auto mb-6 h-20 w-20" />
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">Biopsy</h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-xl">
            End-to-end guidance for minimally invasive biopsies.
          </p>
          <div className="mx-auto max-w-4xl text-left">
            <div className="prose prose-lg mx-auto">
              <div className="mb-8 flex justify-center">
                <Image
                  src="/biopsy.png"
                  alt="Biopsy procedure with PERCISIO guidance showing 3D holographic visualization of liver and target nodule"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <p className="mb-6">
                The image shows a suspected hepatic metastasis, requiring an interventional biopsy
                for histopathological confirmation. This type of procedure demands careful planning
                to avoid major vessels and to ensure accurate sampling of the target tissue.
              </p>
              <p className="mb-6">
                With PERCISIO Guidance, the operator visualizes the liver and the target nodule as a
                3D holographic volume perfectly aligned with the patient&apos;s anatomy. The
                hologram displays the planned needle path, the entry point, and the distance to the
                lesion, enabling safe and intuitive guidance throughout the approach.
              </p>
              <p className="mb-6">
                If the target area is too small or too deep to guarantee full accuracy within
                PERCISIO&apos;s certified precision range, the system can be used to guide the
                initial trajectory and bring the needle as close as possible to the lesion. The
                practitioner can then complete the final step under CT control, combining
                PERCISIO&apos;s spatial guidance with conventional imaging for optimal precision.
              </p>
              <p>
                This hybrid workflow enhances diagnostic reliability, operator safety, and overall
                procedural efficiency, while maintaining full compatibility with standard
                interventional protocols.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
