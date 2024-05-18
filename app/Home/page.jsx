"use client";
import { title } from "@/components/primitives";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase/config";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import {Image} from "@nextui-org/image";

export default function BlogPage() {
	const router = useRouter();
  const [user] = useAuthState(auth);
  const userSession = typeof window !== "undefined" ? sessionStorage.getItem("user") : null;
  
 
  const [diseases, setDiseases] = useState([]);

    //getting data from firebase
	useEffect(() => {
		if (!user && !userSession) {
			router.push("/");
		  }
		const reference = collection(db, "Diseases");
	
		const dbQuery = query(reference, orderBy("name", "asc"));
	
		onSnapshot(dbQuery, (querySnapshot) => {
		  let i = 1;
	
		  // Load data to Array
		  setDiseases(
			querySnapshot.docs.map((doc) => {
			  let data = doc.data();
	
			  return {
				index: i++,
				...data,
			  };
			})
		  );
		});

		
	  }, []);

	  const [Products, setProducts] = useState([]);
	return (
		<div>
			<h1 className={title()}>Wellness Mindset</h1>
			{diseases && (
				 <div className="w-full sm:w-1/2 flex  flex-row sm:flex-row gap-4 mb-8 h-max my-10">
				 <div className="mt-5">
				   {diseases.map((disease, id) => ( 
					<div key={id} className="mt-10">
					 <Image	
					 width={600}
					 alt="NextUI hero Image"
					 src={disease.image}
				   />
				   <h1 className="text-2xl font-bold mt-4">{disease.name}</h1>

				   </div>
				))}
				 </div>
			   </div>
			)}
		</div>
	);
}
