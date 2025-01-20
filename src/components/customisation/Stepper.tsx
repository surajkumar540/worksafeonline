import { motion } from "framer-motion";
import { bigShoulders } from "@/app/layout";

interface Step {
  label: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  reduceSize?: boolean;
  handleCustomizeNextId?: any;
  handleCustomizePrevious: any;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  reduceSize,
  currentStep,
  handleCustomizeNextId,
  handleCustomizePrevious,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 w-full">
      {steps.map((step, index) => (
        <div
          onClick={() => {
            if (index < currentStep) handleCustomizePrevious();
            else handleCustomizeNextId(index);
          }}
          key={index}
          className="flex items-center space-x-2"
        >
          {/* Step Circle */}
          <motion.div
            className={`w-[26px] h-[26px] text-sm cursor-pointer rounded-full flex items-center justify-center ${
              index <= currentStep
                ? "bg-secondary text-white" // Completed step
                : index === currentStep
                ? "bg-black text-white" // Current step
                : "bg-gray-300 text-gray-700" // Incomplete step
            }`}
            initial={{ scale: 0.8 }}
            animate={{ scale: index <= currentStep ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {index < currentStep ? "✔" : index + 1}
          </motion.div>

          {/* Step Label */}
          <motion.div
            className={`cursor-pointer font-extrabold ${
              reduceSize ? "text-sm uppercase" : "text-xl"
            } ${bigShoulders.className} ${
              index <= currentStep
                ? "text-secondary" // Label for completed step
                : index === currentStep
                ? "text-black" // Label for current step
                : "text-gray-500" // Label for incomplete step
            }`}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            animate={{ opacity: index <= currentStep ? 1 : 0.5 }}
          >
            {step.label}
          </motion.div>

          {/* Line between steps */}
          {index < steps.length - 1 && (
            <motion.div
              className={`h-0.5 w-12 ${
                index <= currentStep ? "bg-secondary" : "bg-gray-300"
              }`}
              initial={{ width: 0 }}
              animate={{ width: index <= currentStep ? "2rem" : "1rem" }}
              transition={{ duration: 0.3 }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
