const DashboardLayout = ({
  admin,
  user,
}: {
  admin: React.ReactNode;
  user: React.ReactNode;
}) => {
  return (
    <div>
      {admin}
      {user}
    </div>
  );
};

export default DashboardLayout;
