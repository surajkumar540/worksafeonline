import { bigShoulders } from "@/app/layout";
import { motion } from "framer-motion";

interface Step {
  label: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  reduceSize?: boolean;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  reduceSize,
}) => {
  return (
    <div className="flex items-center justify-center space-x-4 w-full">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center space-x-4">
          {/* Step Circle */}
          <motion.div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              index < currentStep
                ? "bg-primary text-white" // Completed step
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
            className={`font-extrabold ${
              reduceSize ? "text-xs uppercase" : "text-xl"
            } ${bigShoulders.className} ${
              index < currentStep
                ? "text-primary" // Label for completed step
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
              className={`h-0.5 w-16 ${
                index < currentStep ? "bg-primary" : "bg-gray-300"
              }`}
              initial={{ width: 0 }}
              animate={{ width: index < currentStep ? "4rem" : "1rem" }}
              transition={{ duration: 0.3 }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
