import {ApiManager} from "./ApiManager.js";

const Login = (data) => {
  return ApiManager.post("/auth", data);
};

const Me = (data) => {
  return ApiManager.get('/api/me', data)
}

const Grade = (data) => {
  const GradeId = AsyncStorage.getItem('GradeId')
  return ApiManager.get(`/users/${GradeId}/certifications`, data);
};

const Certification = (data) => {
  const CertificationId = AsyncStorage.getItem('GradeId')
  return ApiManager.get(`/api/courses/${CertificationId}`, data);
};

const Course = (data) => {
  const CourseId = AsyncStorage.getItem('CourseId')
  return ApiManager.get(`/api/courses/${CourseId}`, data);
};

const AuthService = {
  Login,
  Grade,
  Certification,
  Course,
  Me
};

export default AuthService;