import { PlanDetails, PlanFeature } from "../../types/types";

export const planDetails: PlanDetails[] = [
  {
    name: "Starter",
    price: "$17/month",
    description: "billed monthly"
  },
  {
    name: "Premium", 
    price: "$88/month",
    description: "billed monthly"
  }
];

export const planFeatures: PlanFeature[] = [
  { name: "Users", starter: "1", premium: "15" },
  { name: "Branches", starter: "1", premium: "10" },
  { name: "Courses", starter: "3", premium: "15/branch" },
  { name: "Max. Students Allowed", starter: "25", premium: "500" },
  { name: "Communication", starter: "25", premium: "Yes" },
  { name: "Bulk Updates", starter: "25", premium: "Yes" },
  { name: "User Roles", starter: "25", premium: "Yes" }
];