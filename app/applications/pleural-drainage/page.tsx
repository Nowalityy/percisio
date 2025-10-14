import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Activity } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pleural Drainage | Percisio',
  description: 'Quick and efficient drainage of pleural fluid.',
};

export default function PleuralDrainagePage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Activity className="text-primary mx-auto mb-6 h-20 w-20" />
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">Pleural Drainage</h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-xl">
            Quick and efficient drainage of pleural fluid.
          </p>
          <div className="mx-auto max-w-4xl text-left">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 flex justify-center">
                <Image
                  src="/hepatic_drainage.png"
                  alt="Pleural drainage procedure with PERCISIO guidance showing 3D holographic visualization"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <p className="mb-4">
                Pleural effusion is a common condition resulting from the accumulation of fluid
                within the pleural cavity, which can compress the lung and cause shortness of
                breath, chest pain, and respiratory discomfort. The fluid may be serous,
                hemorrhagic, purulent, or chylous, depending on the underlying cause — such as heart
                failure, infection, malignancy, or trauma.
              </p>
              <p className="mb-4">
                When the effusion becomes large, loculated, or symptomatic, a pleural drainage
                procedure is indicated to remove the fluid and allow the lung to re-expand. Under
                image guidance, a catheter is inserted through the chest wall into the pleural
                space, providing immediate decompression and clinical relief. The evacuated fluid
                can also be analyzed to determine its nature and guide further treatment.
              </p>
              <p>
                In complex or deep collections, where access is limited by ribs, diaphragm, or
                adjacent organs, PERCISIO Guidance assists in planning and visualizing the drainage
                trajectory to optimize safety and accuracy.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
