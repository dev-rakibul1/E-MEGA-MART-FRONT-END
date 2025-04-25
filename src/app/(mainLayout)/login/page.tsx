import LoginCom from "@/components/login/LoginCom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MegaMart",
  description: "Login | MetaMart login page",
};

const LoginPage = () => {
  return (
    <div>
      <LoginCom />
    </div>
  );
};

export default LoginPage;
