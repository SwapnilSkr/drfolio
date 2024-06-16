import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export function BentoComponent() {
  return (
    <BentoGrid>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          className={i === 4 || i === 6 ? "md:col-span-4" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Pulmonary Function Tests",
    description: [
      "Spirometry Test",
      "Diffusion of Lung (DLCO)",
      "Forced oscillometry (FOT)",
      "FeNO",
      "6MWT",
    ],
  },
  {
    title: "Allergy Testing",
    description: [
      "Spirometry Test",
      "Diffusion of Lung (DLCO)",
      "Forced oscillometry (FOT)",
      "FeNO",
      "6MWT",
    ],
  },
  {
    title: "Sleep Study",
    description: [
      "Spirometry Test",
      "Diffusion of Lung (DLCO)",
      "Forced oscillometry (FOT)",
      "FeNO",
      "6MWT",
    ],
  },
  {
    title: "Pleural Fluid Tapping",
    description: [
      "Spirometry Test",
      "Diffusion of Lung (DLCO)",
      "Forced oscillometry (FOT)",
      "FeNO",
      "6MWT",
    ],
  },
  {
    title: "Pulmonary Rehabilitation",
    description: [
      "Exercise Training : Improve cardiovascular fitness and muscle strength",
      "Education : Teach disease management and lifestyle changes",
      "Nutritional Counseling : Optimize diet for respiratory health",
      "Breathing Techniques : Instruction on specific breathing exercises to enhance lung efficiency and reduce breathlessness",
      "Psychological Support : Counseling and support to help manage the emotional and psychological aspects of living with a chronic respiratory condition",
      "Medication Management : Education on the proper use of inhalers, nebulizers, and other medications to control symptoms and prevent exacerbations",
    ],
  },
];
