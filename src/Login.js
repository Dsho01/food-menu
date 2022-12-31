import Button from "@mui/material/Button";

function Login({setIsAuthenticated}) {
  const logUserIn = () => {
    setIsAuthenticated(true);
  };

  return (
    <Button variant="contained" onClick={logUserIn}>Login</Button>
  );
}

export default Login;