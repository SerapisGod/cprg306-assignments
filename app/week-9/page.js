"use client";

import { useEffect } from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter(); 

  return (
    <div>
      <h1>Week 9</h1>
      <p>{user ? "Hi there!" : "Please sign in"}</p>
      <p>{user?.email}</p>
      {user && user.displayName}
      <p>
        {user ? (
          <div>
            <button onClick={firebaseSignOut}>Sign Out</button>
            <br />
            <Link href="/week-9/shopping-list">
              Continue to your Shopping List
            </Link>
          </div>
        ) : (
          <button onClick={gitHubSignIn}>Sign In with GitHub</button>
        )}
      </p>
    </div>
  );
}