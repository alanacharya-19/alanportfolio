import { motion } from "framer-motion";
import { useIsMobile } from "@/lib/useIsMobile";

export default function Background() {
  const isMobile = useIsMobile();

  const blobClass = "fixed rounded-full pointer-events-none";

  const blobs = [
    {
      animate: { x: [0, 80, -40, 60, 0], y: [0, -60, 40, -30, 0], scale: [1, 1.15, 0.9, 1.05, 1] },
      transition: { duration: 20, repeat: Infinity, ease: "easeInOut" as const },
      className: `${blobClass} top-[15%] right-[5%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-accent/15 dark:from-accent/8 via-accent-light/10 dark:via-accent-light/5 to-transparent rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px]`,
    },
    {
      animate: { x: [0, -50, 70, -30, 0], y: [0, 40, -60, 20, 0], scale: [1, 0.9, 1.1, 0.95, 1] },
      transition: { duration: 25, repeat: Infinity, ease: "easeInOut" as const },
      className: `${blobClass} bottom-[20%] left-[5%] w-[200px] h-[200px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] bg-gradient-to-tr from-accent/12 dark:from-accent/5 via-accent-light/15 dark:via-accent-light/8 to-transparent rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px]`,
    },
    {
      animate: { x: [0, 30, -80, 50, 0], y: [0, -30, 60, -50, 0], scale: [1, 1.05, 0.85, 1.1, 1] },
      transition: { duration: 30, repeat: Infinity, ease: "easeInOut" as const },
      className: `${blobClass} top-[50%] left-[50%] w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] bg-gradient-to-br from-accent/8 dark:from-accent/3 to-transparent rounded-full blur-[50px] sm:blur-[60px] lg:blur-[80px]`,
    },
  ];

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-b from-white via-accent/[0.02] to-accent-light/[0.03] dark:from-gray-950 dark:via-accent/[0.04] dark:to-accent-light/[0.05] pointer-events-none" />
      {blobs.map((blob, i) =>
        isMobile ? (
          <div key={i} className={blob.className} />
        ) : (
          <motion.div key={i} animate={blob.animate} transition={blob.transition} className={blob.className} />
        )
      )}
    </>
  );
}
