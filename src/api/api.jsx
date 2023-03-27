export const BaseUrl = 'https://baby-todo.onrender.com';

// Get an OTP to verify your email
const getOTP = '/account/request-email-verify';

// Signup
const signup = '/account/signup';

// Login
const login = '/account/login';

//  Forget Password
const ForgetPassword = '/account/password-forget';

//  Reset Password
const ResetPassword = '/account/password-reset';

// Update Email
const UpdateEmail = '/account/change-email';

// Update Username
const UpdateUsername = '/account/change-username';

// Update Password
const UpdatePassword = '/account/change-password';

// Delete Task
export const DeleteTask = taskId => `/tasks/${taskId}`;

//  exports
export const EndPoints = {
  getOTP,
  signup,
  login,
  ForgetPassword,
  ResetPassword,
  UpdateEmail,
  UpdateUsername,
  UpdatePassword,
  DeleteTask,
};
