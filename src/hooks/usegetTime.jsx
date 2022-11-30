const useGetTime = () => {
  const date = new Date();
  const hour = date.getHours();

  if (hour >= 18) return ' Good Evening';
  if (hour >= 14) return ' Good Afternoon';
  if (hour >= 12) return ' Good Noon';
  if (hour >= 5) return ' Good Morning';
  return 'Evening';
};
export default useGetTime;
