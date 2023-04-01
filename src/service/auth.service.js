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

export async function createFeedBackApi(body) {
  const response = await Axiosinstance.post("/createfeedback", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

export async function getFeedBackApi() {
  const response = await Axiosinstance.get("/getfeedback", {
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

export async function loggedUserApi() {
  const response = await Axiosinstance.get("/loggeduser", {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

export async function deleteUserApi(id) {
  const response = await Axiosinstance.delete(`/deleteuser/${id}`, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

export async function changePassApi(body) {
  const response = await Axiosinstance.post("/changepassword", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}


export async function forgetPasswordApi(body) {
  console.log(body);
  const response = await Axiosinstance.post("/forgetpassword", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}