import Axiosinstance from "../api/axios";

export async function LoginApi(body) {
  const response = await Axiosinstance.post("/login", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

export async function SignupApi(body) {
  const response = await Axiosinstance.post("/register", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

export async function fetchCustmersApi() {
  const response = await Axiosinstance.get("/getalluser", {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

export async function feedBackApi(body) {
  const response = await Axiosinstance.post("/getfeedback", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

export async function addClassApi(body) {
  const response = await Axiosinstance.post("/addclass", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}
