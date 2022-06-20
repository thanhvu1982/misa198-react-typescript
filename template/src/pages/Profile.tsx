// Demo component

import { useAppSelector } from 'app/hooks/redux';
import HelmetMeta from 'components/common/HelmetMeta';
import { User } from 'modals/User';
import { FC } from 'react';

const Profile: FC = () => {
  const user = useAppSelector((state) => state.auth.user.data) as User;

  return (
    <>
      <HelmetMeta title="Profile" />
      <h4>
        Hello {user.role} - {user.name}
      </h4>
      <p>Everyone after login can access this page</p>
    </>
  );
};

export default Profile;
