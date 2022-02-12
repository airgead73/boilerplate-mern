import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p><img src={user.picture} alt={user.name} title={user.name} /></p>
      </div>
    )
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <div>loading...</div>
});