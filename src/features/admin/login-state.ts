export interface AdminLoginState {
  message: string;
  status: "idle" | "error";
}

export const initialAdminLoginState: AdminLoginState = {
  message: "",
  status: "idle",
};
