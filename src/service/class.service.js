import Axiosinstance from "../api/axios";

export async function addClassApi(body) {
  const response = await Axiosinstance.post("/addclass", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

export async function getClassApi() {
  const response = await Axiosinstance.get("/getallclass", {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

export async function bookClassApi(body) {
  const response = await Axiosinstance.post("/registerclass", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

export async function deleteClassApi(body) {
  const response = await Axiosinstance.post("/deleteclass", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

export async function deRegisterClassApi(body) {
  const response = await Axiosinstance.post("/deregisterclass", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

// export async function getTrainers() {
//   const response = await Axiosinstance.get("/addclass", body, {
//     headers: { "Content-Type": "application/json" },
//   });
//   return response.data;
// }
