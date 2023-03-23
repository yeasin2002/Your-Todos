import Error404 from '../../components/Icons/Error404';
import SB_btn from '../../components/SB_btn.jsx';

const ErrorPage = () => {
  return (
    <div className=" md:flex-row flex flex-col">
      <div>
        <p className="text-blue-600">404 Error</p>
        <h2 className="text-secondary text-3xl font-extrabold">
          Page Not Found
        </h2>
        <p className="text-[#264073]">
          Sorry, the page you are looking for doesn’t exist. Here are some
          helpful links:
        </p>
        <div className=" gap-x-2 flex">
          <SB_btn backgroundColor={'bg-ashed'} title={'Go Back'} />
          <SB_btn backgroundColor={'bg-primary'} title={'Take Me Home'} />
        </div>
      </div>
      <div>
        <Error404 />
      </div>
    </div>
  );
};

export default ErrorPage;
