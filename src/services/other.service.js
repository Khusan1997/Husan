import ApiService from "./api.service";
const OtherService = {
  Get(schoolyearid, oblastid, regionid) {
    return ApiService.get(
      `/api/about_user/`
    );
  },
  Post(data) {
    return ApiService.post( `/api/about_user/`, data);
  },
};
export default OtherService;