import "./App.css";
import { usePrivy } from "@privy-io/react-auth";

function App() {
  const { ready, authenticated, user, login, logout } = usePrivy();

  // Wait until the Privy client is ready before taking any actions
  if (!ready) {
    return null;
  }

  return (
    <div className="App">
      <header className="App-header">
        {ready && authenticated ? (
          <div>
            <UserProfile user={user} />
            <button onClick={logout} style={{ marginTop: "20px", padding: "12px", backgroundColor: "#007BFF", color: "#FFFFFF", border: "none", borderRadius: "6px" }}>
              <b>Log Out</b>
            </button>
          </div>
        ) : (
          <button onClick={login} style={{padding: "12px", backgroundColor: "#007BFF", color: "#FFFFFF", border: "none", borderRadius: "6px" }}><b>Log In</b></button>
        )}
      </header>
    </div>
  );
}

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      
      <div className="user-detail">
        <strong>Name:</strong> {user.google.name}
      </div>
      
      <div className="user-detail">
        <strong>Email:</strong> {user.google.email}
      </div>
      
      <div className="user-detail">
        <strong>Wallet Address:</strong> {user.wallet.address}
      </div>
      
      <div className="user-detail">
        <strong>Wallet Client:</strong> {user.wallet.walletClient}
      </div>
    </div>
  );
}


export default App;
