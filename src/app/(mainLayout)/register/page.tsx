import RegisterCom from "@/components/register/RegisterCom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MegaMart",
  description: "Register | MetaMart register page",
};

const RegisterPage = () => {
  return (
    <div>
      <RegisterCom />
    </div>
  );
};

export default RegisterPage;
