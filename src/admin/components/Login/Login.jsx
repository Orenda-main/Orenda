import { useForm } from 'react-hook-form';
import Input from '../Input';
import LoginLayout from '../SignUp/LoginLayout';
import { Link } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <LoginLayout>
        <div className="w-full">
          {false && (
            <div className="flex gap-4 p-4 justify-around items-center rounded-lg border-l-8 border-l-[#BB2313] border border-[#E7E7E7] mb-10">
              <div>
                <div className="rounded-[0.32294rem] size-8 border-[1.292px] border-[#BB2313] grid place-items-center bg-[#FDE5D7]">
                  <span className="inline-block rounded-full border border-[#BB2313] bg-white size-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M13.3346 4L6.0013 11.3333L2.66797 8"
                        stroke="#BB2313"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <p className="font-medium text-sm">
                Incorrect login details. Please check your details and try
                again.
              </p>
              <button className="ps-3 border-l border-[#DDD8CB] cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="#0F0F0F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="#0F0F0F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}

          <h1 className="font-dm-sans font-bold ~text-2xl/3xl text-center mb-2">
            Welcome back!
          </h1>

          <button className="font-semibold flex items-center rounded-3xl border border-[#E7E7E7] justify-center gap-2 w-full mx-auto p-[0.625rem] mt-8 hover:bg-[#f5f5f5] transition-colors duration-500">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  d="M16.3541 8.03113H15.75V8H9V11H13.2386C12.6203 12.7464 10.9586 14 9 14C6.51487 14 4.5 11.9851 4.5 9.5C4.5 7.01487 6.51487 5 9 5C10.1471 5 11.1908 5.43275 11.9854 6.13962L14.1068 4.01825C12.7673 2.76987 10.9755 2 9 2C4.85812 2 1.5 5.35812 1.5 9.5C1.5 13.6419 4.85812 17 9 17C13.1419 17 16.5 13.6419 16.5 9.5C16.5 8.99713 16.4482 8.50625 16.3541 8.03113Z"
                  fill="#FFC107"
                />
                <path
                  d="M2.36328 6.00912L4.82741 7.81625C5.49416 6.1655 7.10891 5 8.99853 5C10.1457 5 11.1893 5.43275 11.9839 6.13962L14.1053 4.01825C12.7658 2.76987 10.974 2 8.99853 2C6.11778 2 3.61953 3.62637 2.36328 6.00912Z"
                  fill="#FF3D00"
                />
                <path
                  d="M9.00109 16.9993C10.9383 16.9993 12.6986 16.2579 14.0295 15.0523L11.7082 13.088C10.9299 13.6799 9.97889 14.0001 9.00109 13.9993C7.05034 13.9993 5.39397 12.7554 4.76997 11.0195L2.32422 12.9039C3.56547 15.3328 6.08622 16.9993 9.00109 16.9993Z"
                  fill="#4CAF50"
                />
                <path
                  d="M16.3541 8.03113H15.75V8H9V11H13.2386C12.9428 11.8312 12.41 12.5574 11.706 13.0891L11.7071 13.0884L14.0284 15.0526C13.8641 15.2019 16.5 13.25 16.5 9.5C16.5 8.99713 16.4482 8.50625 16.3541 8.03113Z"
                  fill="#1976D2"
                />
              </svg>
            </span>
            Continue with Google
          </button>

          <div className="flex items-center gap-[1.38rem] justify-cente w-full max-w-[18.81rem] mx-auto mt-4 px-4">
            <span className="block w-full h-[1px] bg-[#CFCFCF]" />
            <span>Or</span>
            <span className="block w-full h-[1px] bg-[#CFCFCF]" />
          </div>

          <form className="mt-4" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="space-y-4">
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                register={register}
                errors={errors}
              />
              <Input
                label="Password"
                name="password"
                type="password"
                placeholder="Create password"
                register={register}
                errors={errors}
              />
            </div>

            <p className="mt-4">
              <Link
                className="text-sm underline hover:font-medium transition-all duration-500 inline-block"
                to="/admin/password/reset"
              >
                Forgot password?
              </Link>
            </p>

            <button className="w-full bg-orenda-purple text-white rounded-3xl mt-8 px-4 py-3 font-semibold hover:opacity-80 transition-colors duration-500">
              Login
            </button>

            <p className="text-sm mt-4 text-center">
              Don't have an account?{' '}
              <Link
                to="/admin/sign-up"
                className="text-orenda-purple font-bold underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </LoginLayout>
    </div>
  );
};
export default Login;
