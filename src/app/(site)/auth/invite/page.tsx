import React from "react";
import InvitedSignin from "@/components/Auth/InvitedSignin";
import { Suspense } from "react";

/**
 * The Invited Sign-in page component.
 * This page allows users who have been invited to sign in to the platform.
 * It uses React's Suspense for lazy loading the InvitedSignin component.
 * @returns {JSX.Element} The rendered Invited Sign-in page.
 */
const InvitedSigninPage = () => {
	return (
		<main className='pt-[150px]'>
			{/* Suspense wrapper for lazy loading the InvitedSignin component */}
			<Suspense fallback={<div>Loading...</div>}>
				{/* Invited Sign-in component */}
				<InvitedSignin />
			</Suspense>
		</main>
	);
};

export default InvitedSigninPage;